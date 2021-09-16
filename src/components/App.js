import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDarkModeClick() {
  setIsDarkMode((isDarkMode) => !isDarkMode);
  }


  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = itemData.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick= {handleDarkModeClick} isDarkMode= {isDarkMode}/>
      <Filter onCategoryChange= {onCategoryChange}/>
      <ShoppingList items={itemsToDisplay} onCategoryChange= {onCategoryChange}/>
    </div>
  );
}

export default App;
