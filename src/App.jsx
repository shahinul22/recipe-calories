import { useState } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Banner from './components/banner/Banner';
import Recipes from './components/Recipes/Recipes';
import CookBook from './components/CoolBook/CookBook';
import RecipeHeader from './components/Recipeheader/RecipeHeader';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [cookTime, setTime] = useState(0);
  const [calooo, setCaloo] = useState(0);
  const [toastVisible, setToastVisible] = useState(false); // Toast visibility state

  const handleWantToCook = (recipe) => {
    if (!recipes.includes(recipe) && !cooking.includes(recipe)) {
      const newR = [...recipes, recipe];
      setRecipes(newR);
    } else {
      // Show toast if recipe already exists
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 4000); // Hide toast after 4 seconds
    }
  };

  const handleCookingTable = (recipe, preparing_time, calories) => {
    if (!cooking.includes(recipe)) {
      const newR = [...cooking, recipe];
      setCooking(newR);
    }
    if (recipes.includes(recipe)) {
      const newA = recipes.filter((item) => item !== recipe);
      setRecipes(newA);
    }
    setTime((prevTime) => prevTime + preparing_time);
    setCaloo((prevCalo) => prevCalo + calories);
  };

  return (
    <>
      <NavBar />
      <Banner />
      <RecipeHeader />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
          <div className="col-span-2">
            <Recipes handleWantToCook={handleWantToCook} />
          </div>
          <div className="col-span-1">
            <CookBook
              recipes={recipes}
              cooking={cooking}
              handleCookingTable={handleCookingTable}
              preparing_time={cookTime}
              calooo={calooo}
            />
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastVisible && (
        <div
          className="fixed top-4 right-4 bg-gradient-to-r from-purple-400 to-purple-800 text-white px-4 py-2 rounded-lg shadow-lg border-b-4 border-pink-500 "
        >
          Recipe already exists!
        </div>
      )}

    </>
  );
}

export default App;
