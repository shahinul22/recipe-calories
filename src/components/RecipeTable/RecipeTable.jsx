

const RecipeTable = ({ recipe,idx,handleCookingTable }) => {
    const { recipe_id, recipe_name,preparing_time, calories } = recipe;
    console.log(recipe_name);
    return (

        <tbody>
            <tr className="bg-gray-200">
                <th>{idx}</th>
                <td> <p className="text-xs font-normal lg:text-xl">{recipe_name}</p> </td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td>
                    <button onClick={ () => handleCookingTable(recipe, preparing_time, calories)  }
                        className=" text-xs font-normal  bg-green-500 text-white font-semibold p-2 
                                       rounded-full hover:bg-green-700"
                    >
                        Preparing
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default RecipeTable;