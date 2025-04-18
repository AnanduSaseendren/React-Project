import { useState } from "react";
import "./Darkmode.css";

function Darkmode() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className={`container ${theme}`}>
            <h1>{theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}</h1>
            <button onClick={toggleTheme} className="toggle-btn">Toggle Theme</button>
        </div>
    );
}

export default Darkmode;
