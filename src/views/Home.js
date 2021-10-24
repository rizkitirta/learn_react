import React from "react";
import { useRecoilState } from "recoil";
import Authenticated from "../components/Authenticated";
import { theme } from "../store";
import { UserProvider } from "./context/User";

const Home = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const defaultTheme = currentTheme == "dark" ? "bg-dark" : "bg-primary";
  return (
    <div className="container">
      <div class="form-group">
        <label for="theme">Change Theme</label>
        <select
          class="form-control"
          name="theme"
          id="theme"
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </div>
  );
};

export default Home;
