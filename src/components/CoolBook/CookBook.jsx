
import CookTable from '../CookingTable/CookTable';
import RecipeTable from './../RecipeTable/RecipeTable';

const CookBook = ({ recipes, cooking, handleCookingTable, preparing_time, calooo }) => {

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-5">

            <div className=" text-center border-b-2 border-gray-500">

                <h2 className="text-xl font-bold mb-4">Want to Cook : {recipes.length}</h2>
            </div>
            {/* preparing table  */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            recipes.map((recipe, index) => (
                                <RecipeTable
                                    key={recipe.recipe_id}
                                    recipe={recipe}
                                    handleCookingTable={handleCookingTable}
                                    idx={index + 1}
                                />
                            ))
                        }
                        <tbody className=' hidden'>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>
                                    <button
                                        className=" text-xs font-normal  bg-green-500 text-white font-semibold p-2 
                       rounded-full hover:bg-green-700"
                                    >
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            {/*cooking table  */}
            <div className=" text-center border-b-2 border-gray-500 mb-3 mt-5">

                <h2 className="text-xl font-bold mb-4">Currently Cooking : {cooking.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        {
                            cooking.map((cook, index) => (
                                <CookTable 
                                    key={cook.recipe_id}
                                    cook={cook}
                                    idx={index+1}
                                ></CookTable>
                            ))
                            // recipes.map((recipe, index) => (
                            //     <RecipeTable
                            //         key={recipe.recipe_id}
                            //         recipe={recipe}
                            //         handleCookingTable={handleCookingTable}
                            //         idx={index + 1}
                            //     />
                            // ))
                        }
                        <tbody className=' hidden'>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>
                                    <button
                                        className=" text-xs font-normal  bg-green-500 text-white font-semibold p-2 
                       rounded-full hover:bg-green-700"
                                    >
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* calculation */}
            <div className=' flex justify-between items-center my-5'>
                <div>
                    <h4>Total Time : {preparing_time} minutes</h4>
                </div>
                <div>
                    <h4>Total Calories : {calooo}</h4>
                </div>
            </div>

        </div>
    );
};

export default CookBook;



{/* <table className="table-auto w-full border-collapse border border-gray-300">
    <thead>
        <tr>
            <th>#</th>
            <th>Recipe Name</th>
            <th>Preparing Time</th>
            <th>Calories</th>
            <th>Action</th>
        </tr>
    </thead>
    {recipes.map((recipe, index) => (
        <RecipeTable key={recipe.recipe_id} recipe={recipe} idx={index + 1} />
    ))}
</table> */}