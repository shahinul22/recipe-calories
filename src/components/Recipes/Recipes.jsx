import { useEffect, useState } from 'react';
import Recipe from './../Recipe/Recipe';

const Recipes = ({ handleWantToCook }) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch data from the JSON file
        fetch('recipes.json')
            .then((res) => res.json())
            .then((data) => setRecipes(data));  // Setting the data to state
    }, []);

    return (
        <div className=' mx-auto'>

            {/* Map over recipes and pass each individual recipe to the Recipe component */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-start gap-3 mx-3 lg:mx-16 mt-10">
                {
                    recipes.map((recipe) => (
                        <Recipe 
                        key={recipe.recipe_id} 
                        handleWantToCook={handleWantToCook}
                        recipe={recipe} />
                    ))
                }
            </div>
        </div>
    );
};

export default Recipes;
