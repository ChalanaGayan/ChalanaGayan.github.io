import { createContext, useContext, useRef, useState, useMemo, useCallback } from 'react';

const WindowNavigationContext = createContext();

export const WindowNavigationProvider = ({ children }) => {
  const [canGoBackInWindow, setCanGoBackInWindow] = useState(false);
  const windowBackHandlerRef = useRef(null);

  const registerWindowBackHandler = useCallback((handler) => {
    windowBackHandlerRef.current = handler;
    setCanGoBackInWindow(true);
  }, []);

  const unregisterWindowBackHandler = useCallback(() => {
    windowBackHandlerRef.current = null;
    setCanGoBackInWindow(false);
  }, []);

  const handleWindowBack = useCallback(() => {
    if (windowBackHandlerRef.current) {
      windowBackHandlerRef.current();
      return true;
    }
    return false;
  }, []);

  const value = useMemo(() => ({
    canGoBackInWindow,
    registerWindowBackHandler,
    unregisterWindowBackHandler,
    handleWindowBack,
  }), [canGoBackInWindow, registerWindowBackHandler, unregisterWindowBackHandler, handleWindowBack]);

  return (
    <WindowNavigationContext.Provider value={value}>
      {children}
    </WindowNavigationContext.Provider>
  );
};

export const useWindowNavigation = () => {
  const context = useContext(WindowNavigationContext);
  if (!context) {
    throw new Error('useWindowNavigation must be used within WindowNavigationProvider');
  }
  return context;
};
