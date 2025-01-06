import { FaRegClock } from "react-icons/fa6";
import { FaFire } from "react-icons/fa6";
const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_id, recipe_image, recipe_name, short_description, calories, ingredients, preparing_time } = recipe;

    return (
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden max-w-xl  transition-all duration-500 ease-in-out hover:scale-105">
            <figure className="w-full max-h-64 h-auto p-2">
                <img
                    src={recipe_image}
                    alt={recipe_name}
                    className="rounded-xl" />
            </figure>
            <div className="card-body p-6">
                <div className="border-b pb-3 mb-4">
                    <h2 className="text-xl font-bold mb-2">{recipe_name}</h2>
                    <p className="text-gray-600">{short_description}</p>
                </div>
                <div className="border-b pb-3 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Ingredients ({ingredients.length}):</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {
                            ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex justify-between items-center text-xs font-light text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                        <FaRegClock className="text-blue-500" />
                        <p>{preparing_time}minutes </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaFire className="text-red-500" />
                        <p>{calories} calories</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleWantToCook(recipe)} className="btn bg-green-400 w-full rounded-full">Want to Cook</button>
                </div>
            </div>
        </div>

    );
};

export default Recipe;
