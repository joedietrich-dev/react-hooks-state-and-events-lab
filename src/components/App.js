import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkModeSelected, setIsDarkModeSelected] = useState(false)

  const appClass = isDarkModeSelected ? "App dark" : "App light"

  const handleDarkModeClick = () => {
    setIsDarkModeSelected((prev) => !prev);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>{isDarkModeSelected ? 'Light' : 'Dark'} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
