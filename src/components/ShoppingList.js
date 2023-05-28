import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  function handleFilter (e) {
    setSelectedCategory(e.target.value)
    //setting the selectedCategory to the clicked item
    //need to take selectedCategory and have that be the updated list shown. 
  }

  const filteredCategories = items.filter((item) => {
    // return ({selectedCategory}.includes(item.category))
    if (selectedCategory === "All") {
      return item
    }
    else if (selectedCategory === item.category) {
      return  (selectedCategory === item.category)} 
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategories.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
