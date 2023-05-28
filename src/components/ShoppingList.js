import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('')
  
  function handleFilter (e) {
    setSelectedCategory(e.target.value)
    //setting the selectedCategory to the clicked item
    //need to take selectedCategory and have that be the updated list shown. 
  }

  const filteredCategories = items.filter((items) => {
    // return ({selectedCategory}.includes(item.category))
    return items.category.includes({selectedCategory})
    
    
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
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
