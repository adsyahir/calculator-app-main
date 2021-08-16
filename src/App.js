import Switcher from "./components/Switcher";
import Screen from "./components/Screen";
import Keypad from "./components/Keypad";
import { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState("");
  const [themeBlue, setThemeBlue] = useState(true);
  const [themeWhite, setThemeWhite] = useState("");
  const [themePurple, setThemePurple] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    if (result.slice(0, 1) === "/" || "+") {
      console.log(result.slice);
      setResult(result.concat(e.target.name));
    } else {
      setResult(result.concat(e.target.name));
    }
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
      console.log(result);
    } catch (err) {
      setResult("");
    }
  };
  const theme = (e) => {
    if (e.target.checked) {
      if (e.target.value === "blue") {
        document.documentElement.setAttribute("data-theme", "theme-1");
        localStorage.setItem("theme", "theme-1");
        console.log(e.target.value);
        setThemeBlue(true);
        setThemeWhite(false);
        setThemePurple(false);
      } else if (e.target.value === "white") {
        document.documentElement.setAttribute("data-theme", "theme-2");
        localStorage.setItem("theme", "theme-2");
        setThemeWhite(true);
        setThemeBlue(false);
        setThemePurple(false);
      } else if (e.target.value === "purple") {
        document.documentElement.setAttribute("data-theme", "theme-3");
        localStorage.setItem("theme", "theme-3");
        setThemePurple(true);
        setThemeBlue(false);
        setThemeWhite(false);
      }
    }
  };
  useEffect(() => {
    // Update the document title using the browser API
    const localStorageTheme = localStorage.getItem("theme");
    console.log(localStorageTheme);
    if (localStorageTheme === "theme-1") {
      document.documentElement.setAttribute("data-theme", "theme-1");
      setThemeBlue(true);
      setThemeWhite(false);
      setThemePurple(false);
    } else if (localStorageTheme === "theme-2") {
      document.documentElement.setAttribute("data-theme", "theme-2");
      setThemeWhite(true);
      setThemeBlue(false);
      setThemePurple(false);
    } else if (localStorageTheme === "theme-3") {
      document.documentElement.setAttribute("data-theme", "theme-3");
      setThemePurple(true);
      setThemeBlue(false);
      setThemeWhite(false);
      console.log(localStorageTheme);
    }
  }, []);
  return (
    <div className="container">
      <Switcher
        theme={theme}
        themeBlue={themeBlue}
        themeWhite={themeWhite}
        themePurple={themePurple}
      />
      <Screen result={result} />
      <Keypad
        handleClick={handleClick}
        clear={clear}
        backspace={backspace}
        calculate={calculate}
      />
    </div>
    
  );
}

export default App;
