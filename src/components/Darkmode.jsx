import React from 'react'
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

function darkmode() {
  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 text-lg font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-blue-500 text-white hover:bg-blue-600"
      >
        Toggle Theme
      </button>
    </div>
  )
}
}

export default darkmode
