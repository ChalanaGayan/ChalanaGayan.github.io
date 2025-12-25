import { useState, useEffect } from 'react';

const ROWS = 9;
const COLS = 9;
const MINES = 10;

const GameWindow = () => {
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [mineCount, setMineCount] = useState(MINES);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    let interval;
    if (timerRunning && !gameOver && !won) {
      interval = setInterval(() => {
        setTimer(t => Math.min(t + 1, 999));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, gameOver, won]);

  const initGame = () => {
    const newBoard = Array(ROWS).fill(null).map(() =>
      Array(COLS).fill(null).map(() => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborMines: 0,
      }))
    );

    // Place mines
    let minesPlaced = 0;
    while (minesPlaced < MINES) {
      const row = Math.floor(Math.random() * ROWS);
      const col = Math.floor(Math.random() * COLS);
      if (!newBoard[row][col].isMine) {
        newBoard[row][col].isMine = true;
        minesPlaced++;
      }
    }

    // Calculate neighbor mines
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!newBoard[r][c].isMine) {
          let count = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const nr = r + dr;
              const nc = c + dc;
              if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && newBoard[nr][nc].isMine) {
                count++;
              }
            }
          }
          newBoard[r][c].neighborMines = count;
        }
      }
    }

    setBoard(newBoard);
    setGameOver(false);
    setWon(false);
    setMineCount(MINES);
    setTimer(0);
    setTimerRunning(false);
  };

  const revealCell = (row, col) => {
    if (gameOver || won || board[row][col].isRevealed || board[row][col].isFlagged) return;

    if (!timerRunning) setTimerRunning(true);

    const newBoard = [...board];

    if (newBoard[row][col].isMine) {
      // Game over
      newBoard[row][col].isRevealed = true;
      setBoard(newBoard);
      setGameOver(true);
      setTimerRunning(false);
      revealAllMines();
      return;
    }

    // Flood fill for empty cells
    const reveal = (r, c) => {
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
      if (newBoard[r][c].isRevealed || newBoard[r][c].isFlagged || newBoard[r][c].isMine) return;

      newBoard[r][c].isRevealed = true;

      if (newBoard[r][c].neighborMines === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            reveal(r + dr, c + dc);
          }
        }
      }
    };

    reveal(row, col);
    setBoard(newBoard);

    // Check win condition
    checkWin(newBoard);
  };

  const toggleFlag = (e, row, col) => {
    e.preventDefault();
    if (gameOver || won || board[row][col].isRevealed) return;

    if (!timerRunning) setTimerRunning(true);

    const newBoard = [...board];
    newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged;
    setBoard(newBoard);
    setMineCount(prev => newBoard[row][col].isFlagged ? prev - 1 : prev + 1);

    checkWin(newBoard);
  };

  const revealAllMines = () => {
    const newBoard = [...board];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (newBoard[r][c].isMine) {
          newBoard[r][c].isRevealed = true;
        }
      }
    }
    setBoard(newBoard);
  };

  const checkWin = (currentBoard) => {
    let allNonMinesRevealed = true;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!currentBoard[r][c].isMine && !currentBoard[r][c].isRevealed) {
          allNonMinesRevealed = false;
          break;
        }
      }
      if (!allNonMinesRevealed) break;
    }

    if (allNonMinesRevealed) {
      setWon(true);
      setTimerRunning(false);
    }
  };

  const getCellContent = (cell) => {
    if (!cell.isRevealed) {
      return cell.isFlagged ? '🚩' : '';
    }
    if (cell.isMine) {
      return '💣';
    }
    return cell.neighborMines > 0 ? cell.neighborMines : '';
  };

  const getCellColor = (cell) => {
    if (!cell.isRevealed) return 'text-transparent';
    const colors = ['', 'text-blue-600', 'text-green-600', 'text-red-600', 'text-purple-600', 'text-yellow-600', 'text-pink-600', 'text-gray-600', 'text-black'];
    return colors[cell.neighborMines] || 'text-black';
  };

  return (
    <div className="p-4 bg-gray-200 h-full flex flex-col items-center justify-center">
      {/* Game Header */}
      <div className="mb-4 w-full max-w-md">
        <div className="bg-white border-2 border-gray-400 p-2 flex items-center justify-between">
          <div className="bg-black text-red-500 font-mono text-lg px-3 py-1 border-2 border-gray-600">
            {String(mineCount).padStart(3, '0')}
          </div>

          <button
            onClick={initGame}
            className="text-3xl hover:scale-110 transition-transform"
          >
            {gameOver ? '😵' : won ? '😎' : '🙂'}
          </button>

          <div className="bg-black text-red-500 font-mono text-lg px-3 py-1 border-2 border-gray-600">
            {String(timer).padStart(3, '0')}
          </div>
        </div>
      </div>

      {/* Game Board */}
      <div className="bg-white border-2 border-gray-400 p-2 inline-block">
        <div className="grid gap-0" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
          {board.map((row, r) =>
            row.map((cell, c) => (
              <button
                key={`${r}-${c}`}
                onClick={() => revealCell(r, c)}
                onContextMenu={(e) => toggleFlag(e, r, c)}
                className={`w-8 h-8 border flex items-center justify-center font-bold text-sm transition-all ${
                  cell.isRevealed
                    ? cell.isMine
                      ? 'bg-red-300 border-gray-400'
                      : 'bg-gray-300 border-gray-400'
                    : 'bg-gray-400 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-600 hover:bg-gray-300'
                } ${getCellColor(cell)}`}
                disabled={gameOver || won}
              >
                {getCellContent(cell)}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Game Status */}
      {(gameOver || won) && (
        <div className="mt-4 text-center">
          <div className={`text-2xl font-bold ${gameOver ? 'text-red-600' : 'text-green-600'}`}>
            {gameOver ? 'Game Over!' : 'You Won!'}
          </div>
          <button
            onClick={initGame}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold"
          >
            New Game
          </button>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-4 text-xs text-gray-700 text-center max-w-md">
        <p>Left-click to reveal a cell • Right-click to flag a mine</p>
        <p className="mt-1">Clear all non-mine cells to win!</p>
      </div>
    </div>
  );
};

export default GameWindow;
