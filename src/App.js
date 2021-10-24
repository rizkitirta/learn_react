import React from "react";
import { useRecoilState } from "recoil";
import Router from "./router";
import { theme } from "./store";

const App = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const defaultTheme = currentTheme == "dark" ? "bg-dark text-warning" : "bg-light text-dark";
  return (
    <div className={`${defaultTheme} vh-100`}>
      <Router />
    </div>
  );
};

export default App;
