import { useState, useEffect } from 'react';
import { useIsMobileContext } from '../../context/MobileContext';

const GameWindow = () => {
  const isMobile = useIsMobileContext();
  const ROWS = isMobile ? 8 : 10;
  const COLS = isMobile ? 8 : 10;
  const MINES = isMobile ? 10 : 15;

  const [grid, setGrid] = useState([]);
  const [gameState, setGameState] = useState('ready'); // ready, playing, won, lost
  const [flagCount, setFlagCount] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);

  const initializeGrid = () => {
    // Create empty grid
    const newGrid = Array(ROWS).fill(null).map(() =>
      Array(COLS).fill(null).map(() => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborMines: 0,
      }))
    );

    // Place mines randomly
    let minesPlaced = 0;
    while (minesPlaced < MINES) {
      const row = Math.floor(Math.random() * ROWS);
      const col = Math.floor(Math.random() * COLS);

      if (!newGrid[row][col].isMine) {
        newGrid[row][col].isMine = true;
        minesPlaced++;
      }
    }

    // Calculate neighbor mine counts
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (!newGrid[row][col].isMine) {
          let count = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const newRow = row + dr;
              const newCol = col + dc;
              if (
                newRow >= 0 && newRow < ROWS &&
                newCol >= 0 && newCol < COLS &&
                newGrid[newRow][newCol].isMine
              ) {
                count++;
              }
            }
          }
          newGrid[row][col].neighborMines = count;
        }
      }
    }

    setGrid(newGrid);
    setGameState('ready');
    setFlagCount(0);
    setRevealedCount(0);
  };

  useEffect(() => {
    initializeGrid();
  }, []);

  const revealCell = (row, col) => {
    if (gameState === 'won' || gameState === 'lost') return;
    if (grid[row][col].isRevealed || grid[row][col].isFlagged) return;

    if (gameState === 'ready') {
      setGameState('playing');
    }

    const newGrid = JSON.parse(JSON.stringify(grid));

    if (newGrid[row][col].isMine) {
      // Game over - reveal all mines
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (newGrid[r][c].isMine) {
            newGrid[r][c].isRevealed = true;
          }
        }
      }
      setGrid(newGrid);
      setGameState('lost');
      return;
    }

    // Flood fill reveal
    const reveal = (r, c) => {
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
      if (newGrid[r][c].isRevealed || newGrid[r][c].isFlagged || newGrid[r][c].isMine) return;

      newGrid[r][c].isRevealed = true;
      setRevealedCount(prev => prev + 1);

      // If no neighboring mines, reveal neighbors
      if (newGrid[r][c].neighborMines === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            reveal(r + dr, c + dc);
          }
        }
      }
    };

    reveal(row, col);
    setGrid(newGrid);

    // Check win condition
    const totalCells = ROWS * COLS;
    const revealedCells = newGrid.flat().filter(cell => cell.isRevealed).length;
    if (revealedCells === totalCells - MINES) {
      setGameState('won');
    }
  };

  const toggleFlag = (row, col, e) => {
    e.preventDefault();
    if (gameState === 'won' || gameState === 'lost') return;
    if (grid[row][col].isRevealed) return;

    if (gameState === 'ready') {
      setGameState('playing');
    }

    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[row][col].isFlagged = !newGrid[row][col].isFlagged;

    setFlagCount(prev => newGrid[row][col].isFlagged ? prev + 1 : prev - 1);
    setGrid(newGrid);
  };

  const getCellColor = (count) => {
    const colors = {
      1: 'text-blue-600',
      2: 'text-green-600',
      3: 'text-red-600',
      4: 'text-purple-600',
      5: 'text-yellow-700',
      6: 'text-pink-600',
      7: 'text-black',
      8: 'text-gray-600',
    };
    return colors[count] || 'text-black';
  };

  return (
    <div className={`h-full bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col ${isMobile ? 'p-2' : 'p-4'}`}>
      {/* Header */}
      <div className={`bg-white border-2 border-gray-400 shadow-lg ${isMobile ? 'p-3 mb-2' : 'p-4 mb-4'}`}>
        <div className="flex justify-between items-center mb-3">
          <div className={`flex items-center gap-2 bg-black text-red-500 font-bold border-2 border-gray-400 ${isMobile ? 'px-3 py-1 text-base' : 'px-4 py-2 text-xl'}`}>
            💣 {MINES - flagCount}
          </div>

          <button
            onClick={initializeGrid}
            className={`bg-yellow-400 hover:bg-yellow-500 border-4 border-yellow-300 shadow-md transition-all active:scale-95 ${isMobile ? 'w-10 h-10 text-2xl' : 'w-12 h-12 text-3xl'}`}
            title="New Game"
          >
            {gameState === 'lost' ? '😵' : gameState === 'won' ? '😎' : '🙂'}
          </button>

          <div className={`flex items-center gap-2 bg-black text-red-500 font-bold border-2 border-gray-400 ${isMobile ? 'px-3 py-1 text-base' : 'px-4 py-2 text-xl'}`}>
            🚩 {flagCount}
          </div>
        </div>

        {/* Status Message */}
        <div className={`text-center font-semibold ${isMobile ? 'text-xs' : 'text-sm'}`}>
          {gameState === 'ready' && (
            <span className="text-gray-700">
              {isMobile ? 'Tap to reveal, long press to flag' : 'Click to reveal, right-click to flag'}
            </span>
          )}
          {gameState === 'playing' && (
            <span className="text-blue-600">Find all {MINES} mines!</span>
          )}
          {gameState === 'won' && (
            <span className="text-green-600">🎉 You Won! Great job!</span>
          )}
          {gameState === 'lost' && (
            <span className="text-red-600">💥 Game Over! Try again!</span>
          )}
        </div>
      </div>

      {/* Game Grid */}
      <div className="flex-1 flex items-center justify-center overflow-auto">
        <div
          className="inline-grid gap-0 border-4 border-gray-500 shadow-2xl bg-gray-400"
          style={{
            gridTemplateColumns: `repeat(${COLS}, ${isMobile ? '30px' : '35px'})`,
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                onClick={() => revealCell(rowIndex, colIndex)}
                onContextMenu={(e) => toggleFlag(rowIndex, colIndex, e)}
                onTouchStart={(e) => {
                  const touch = setTimeout(() => {
                    toggleFlag(rowIndex, colIndex, e);
                  }, 500);
                  e.target.dataset.touchTimeout = touch;
                }}
                onTouchEnd={(e) => {
                  clearTimeout(e.target.dataset.touchTimeout);
                }}
                className={`${isMobile ? 'w-[30px] h-[30px] text-xs' : 'w-[35px] h-[35px] text-sm'} flex items-center justify-center font-bold border transition-all ${
                  cell.isRevealed
                    ? cell.isMine
                      ? 'bg-red-500 border-red-600'
                      : 'bg-gray-200 border-gray-300'
                    : 'bg-gray-400 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-600 hover:bg-gray-300 active:bg-gray-200'
                }`}
                disabled={cell.isRevealed || gameState === 'won' || gameState === 'lost'}
              >
                {cell.isRevealed ? (
                  cell.isMine ? (
                    '💣'
                  ) : cell.neighborMines > 0 ? (
                    <span className={getCellColor(cell.neighborMines)}>
                      {cell.neighborMines}
                    </span>
                  ) : null
                ) : cell.isFlagged ? (
                  '🚩'
                ) : null}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Instructions */}
      {!isMobile && (
        <div className="mt-3 text-center text-xs text-gray-700 bg-white border-2 border-gray-400 p-2">
          Left-click to reveal • Right-click to flag • Find all mines without clicking on them
        </div>
      )}
    </div>
  );
};

export default GameWindow;
