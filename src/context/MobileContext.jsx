import { createContext, useContext } from 'react';

const MobileContext = createContext(false);

export const MobileProvider = ({ children, isMobile }) => {
  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
};

export const useIsMobileContext = () => {
  return useContext(MobileContext);
};
