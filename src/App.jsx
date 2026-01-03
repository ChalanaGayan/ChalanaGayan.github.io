import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Desktop from "./components/WindowsXP/Desktop";
import MobileAndroidLayout from "./components/Mobile/MobileAndroidLayout";
import useIsMobile from "./hooks/useIsMobile";
import { MobileProvider } from "./context/MobileContext";
import { WindowNavigationProvider } from "./context/WindowNavigationContext";

const App = () => {
  const isMobile = useIsMobile(768); // Switch to mobile layout below 768px

  return (
    <BrowserRouter>
      <MobileProvider isMobile={isMobile}>
        <WindowNavigationProvider>
          {isMobile ? <MobileAndroidLayout /> : <Desktop />}
        </WindowNavigationProvider>
      </MobileProvider>
    </BrowserRouter>
  );
}

export default App;
