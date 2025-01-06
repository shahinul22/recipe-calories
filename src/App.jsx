
import './App.css'
import NavBar from './components/navBar/NavBar';
import Banner from './components/banner/Banner';
import Recipes from './components/Recipes/Recipes';
import CookBook from './components/CoolBook/CookBook';
import RecipeHeader from './components/Recipeheader/RecipeHeader';
import { useState } from 'react';




function App() {

  const [recipes, setRecipes] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [cookTime, setTime] = useState(0);
  const [calooo, setCaloo]  = useState(0);

  const handleWantToCook = (recipe) => {
    // console.log(recipe);

    if (!recipes.includes(recipe) && !cooking.includes(recipe)) {
      const newR = [...recipes, recipe];
      setRecipes(newR);
    }
  }

  const handleCookingTable = (recipe, preparing_time, calories) => {
    if (!cooking.includes(recipe)) {
      const newR = [...cooking, recipe];
      setCooking(newR);

    }
    if(recipes.includes(recipe)){
      const newA = recipes.filter(item => item !== recipe);
      setRecipes(newA);
    }
    setTime((prevTime) => prevTime + preparing_time);
    setCaloo((prevCalo) => prevCalo + calories);

  }

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <RecipeHeader></RecipeHeader>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
          <div className="col-span-2">

            <Recipes handleWantToCook={handleWantToCook}></Recipes>
          </div>

          <div className="col-span-1">
            <CookBook 
            recipes={recipes}
            cooking={cooking}
            handleCookingTable={handleCookingTable}
            preparing_time={cookTime}
            calooo={calooo}
             ></CookBook>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
