const Recipe = ({ recipe }) => {
    const { recipe_image, recipe_name, short_description, calories } = recipe;

    return (
        <div className="card bg-base-100 shadow-xl w-full max-w-xs mx-auto">
            <figure className="px-10 pt-10">
                <img
                    src={recipe_image}
                    alt={recipe_name}
                    className="rounded-xl w-full h-48 object-cover"
                />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title">{recipe_name}</h2>
                <p>{short_description}</p>
                <p className="text-sm text-gray-500">Calories: {calories}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
