

const CookTable = ({ cook, idx }) => {
    const { recipe_name, preparing_time, calories } = cook;
    return (
        <tbody className="">
            <tr className=" bg-gray-200 ">
                <th>{idx}</th>
                <td><p className="text-xs font-normal">{recipe_name}</p></td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
        </tbody>
    );
};

export default CookTable;