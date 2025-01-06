import { useEffect, useState } from 'react';
import Recipe from './../Recipe/Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch data from the JSON file
        fetch('recipes.json')
            .then((res) => res.json())
            .then((data) => setRecipes(data));  // Setting the data to state
    }, []);

    return (
        <div>
            <h2 className="text-4xl mb-6">Recipes</h2>
            {/* Map over recipes and pass each individual recipe to the Recipe component */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    recipes.map((recipe) => (
                        <Recipe key={recipe.recipe_id} recipe={recipe} />
                    ))
                }
            </div>
        </div>
    );
};

export default Recipes;
