import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods, newFood])
    //console.log(newFood);
  }

  //li click deletes li
  // function handleLiClick(id) {
  //   const newFoods = foods.filter((food) => food.id !== id)
  //   setFoods(newFoods)
  // }

  //li click increments heat
  function handleLiClick(id){
    const newFoods = foods.map((food) => {
      if (food.id === id)
        return {...food,
          heatLevel: food.heatLevel + 1}
      else
        return food
    })
    setFoods(newFoods)
  }

  const foodList = foods.map((food) => (
    <li onClick={() => handleLiClick(food.id)} key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
