import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Window = ({
  id,
  title,
  children,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  initialPosition,
  onPositionChange,
  width = 700,
  height = 500,
  icon = '📄',
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState({ width, height });
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaximizeState, setPreMaximizeState] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState('');
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    // Don't start dragging if clicking on window controls or if clicking on a button
    if (e.target.closest('.window-controls') || e.target.closest('button')) return;
    if (isMaximized) return; // Can't drag when maximized

    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    onFocus();
  };

  const handleMaximize = () => {
    if (isMaximized) {
      // Restore to previous state
      if (preMaximizeState) {
        setPosition(preMaximizeState.position);
        setSize(preMaximizeState.size);
      }
      setIsMaximized(false);
    } else {
      // Save current state and maximize
      setPreMaximizeState({ position, size });
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 40 }); // -40 for taskbar
      setIsMaximized(true);
    }
    onFocus();
  };

  const handleResizeStart = (e, direction) => {
    if (isMaximized) return; // Can't resize when maximized
    e.stopPropagation();
    setIsResizing(true);
    setResizeDirection(direction);
    setDragStart({ x: e.clientX, y: e.clientY });
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newX = Math.max(0, Math.min(e.clientX - dragStart.x, window.innerWidth - size.width));
        const newY = Math.max(0, Math.min(e.clientY - dragStart.y, window.innerHeight - size.height - 40));

        const newPosition = { x: newX, y: newY };
        setPosition(newPosition);
        onPositionChange(newPosition);
      } else if (isResizing) {
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;

        let newWidth = size.width;
        let newHeight = size.height;
        let newX = position.x;
        let newY = position.y;

        if (resizeDirection.includes('e')) {
          newWidth = Math.max(300, size.width + deltaX);
        }
        if (resizeDirection.includes('w')) {
          newWidth = Math.max(300, size.width - deltaX);
          newX = position.x + deltaX;
        }
        if (resizeDirection.includes('s')) {
          newHeight = Math.max(200, size.height + deltaY);
        }
        if (resizeDirection.includes('n')) {
          newHeight = Math.max(200, size.height - deltaY);
          newY = position.y + deltaY;
        }

        setSize({ width: newWidth, height: newHeight });
        setPosition({ x: newX, y: newY });
        setDragStart({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      setResizeDirection('');
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragStart, position, size, resizeDirection, onPositionChange]);

  return (
    <motion.div
      ref={windowRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="absolute flex flex-col bg-white rounded-lg overflow-hidden"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        border: '1px solid #0054E3',
      }}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-2 py-1 select-none"
        style={{
          background: 'linear-gradient(to bottom, #0058E6 0%, #3A95FF 50%, #0058E6 100%)',
          borderBottom: '1px solid #003C9D',
          cursor: isMaximized ? 'default' : 'move',
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 flex items-center justify-center text-base">
            {icon}
          </div>
          <span className="text-white text-sm font-normal drop-shadow-sm">
            {title}
          </span>
        </div>

        {/* Window Controls */}
        <div className="flex gap-1 window-controls">
          <WindowButton onClick={onMinimize} type="minimize">
            <span className="text-black font-bold text-sm">_</span>
          </WindowButton>
          <WindowButton onClick={handleMaximize} type="maximize">
            <span className="text-black font-bold text-xs">{isMaximized ? '❐' : '□'}</span>
          </WindowButton>
          <WindowButton onClick={onClose} type="close">
            <span className="text-black font-bold text-lg leading-none">×</span>
          </WindowButton>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto bg-white">
        {children}
      </div>

      {/* Status Bar */}
      <div
        className="h-6 px-2 flex items-center border-t"
        style={{
          background: 'linear-gradient(to bottom, #ECE9D8 0%, #E3DED2 100%)',
          borderTop: '1px solid #919B9C',
        }}
      >
        {/* Empty status bar - can add content here if needed */}
      </div>

      {/* Resize Handles - Only show when not maximized */}
      {!isMaximized && (
        <>
          {/* Right edge */}
          <div
            className="absolute top-0 right-0 w-2 h-full cursor-e-resize hover:bg-blue-500/20"
            onMouseDown={(e) => handleResizeStart(e, 'e')}
          />
          {/* Bottom edge */}
          <div
            className="absolute bottom-0 left-0 w-full h-2 cursor-s-resize hover:bg-blue-500/20"
            onMouseDown={(e) => handleResizeStart(e, 's')}
          />
          {/* Left edge */}
          <div
            className="absolute top-0 left-0 w-2 h-full cursor-w-resize hover:bg-blue-500/20"
            onMouseDown={(e) => handleResizeStart(e, 'w')}
          />
          {/* Top edge */}
          <div
            className="absolute top-0 left-0 w-full h-2 cursor-n-resize hover:bg-blue-500/20"
            onMouseDown={(e) => handleResizeStart(e, 'n')}
          />
          {/* Bottom-right corner */}
          <div
            className="absolute bottom-0 right-0 w-5 h-5 cursor-se-resize hover:bg-blue-500/30 z-10"
            onMouseDown={(e) => handleResizeStart(e, 'se')}
          />
          {/* Bottom-left corner */}
          <div
            className="absolute bottom-0 left-0 w-5 h-5 cursor-sw-resize hover:bg-blue-500/30 z-10"
            onMouseDown={(e) => handleResizeStart(e, 'sw')}
          />
        </>
      )}
    </motion.div>
  );
};

const WindowButton = ({ children, onClick, disabled, type }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (onClick && !disabled) {
      onClick(e);
    }
  };

  const getButtonStyle = () => {
    switch (type) {
      case 'close':
        return {
          background: 'linear-gradient(to bottom, #FF6B6B 0%, #E85C5C 50%, #CC4040 100%)',
        };
      case 'minimize':
      case 'maximize':
        return {
          background: 'linear-gradient(to bottom, #3A95FF 0%, #1976D2 50%, #0058E6 100%)',
        };
      default:
        return {
          background: 'linear-gradient(to bottom, #E3DED2 0%, #D4CFC4 100%)',
        };
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={(e) => e.stopPropagation()}
      disabled={disabled}
      className="w-5 h-5 flex items-center justify-center rounded-sm border border-white/50 hover:brightness-110 active:brightness-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      style={getButtonStyle()}
    >
      {children}
    </button>
  );
};

export default Window;
