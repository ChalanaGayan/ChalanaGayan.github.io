import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Desktop from "./components/WindowsXP/Desktop";

const App = () => {
  return (
    <BrowserRouter>
      <Desktop />
    </BrowserRouter>
  );
}

export default App;
