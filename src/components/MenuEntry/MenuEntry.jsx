import { Link } from "react-router-dom";


const MenuEntry = ({ option }) => {
    const { id, title } = option
    return (
        <div>
            <ul className="list-none py-2 text-sm">
                <li className="hover:underline cursor-pointer">
                    <Link to={`/categories/${id}`}>{title}</Link>
                </li>
            </ul>

        </div>
    );
};

export default MenuEntry;