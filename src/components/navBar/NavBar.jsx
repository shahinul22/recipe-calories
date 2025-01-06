import { useState } from "react";

const Navbar = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    return (
        <div className="bg-base-100 shadow relative">
            {/* Main Navbar */}
            <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
                {/* Left Section */}
                <div className="flex items-center space-x-2 lg:space-x-4">
                    {/* Mobile Menu Toggle */}
                    <div className="dropdown lg:hidden">
                        <button tabIndex={0} className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 shadow"
                        >
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    {/* Logo */}
                    <a className="btn btn-ghost normal-case text-xl whitespace-nowrap">
                        Recipe Calories
                    </a>
                </div>

                {/* Center Section */}
                <div className="hidden lg:flex items-center space-x-8">
                    {/* Desktop Navigation */}
                    <ul className="menu menu-horizontal space-x-4">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    {/* Mobile Search Button */}
                    <button
                        onClick={toggleSearch}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {/* Large Device Search Bar */}
                    <div className="hidden lg:flex w-64">
                        <div className="input input-bordered flex items-center w-full rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 ml-2"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="text"
                                className="bg-transparent w-full px-3"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    {/* Avatar */}
                    <div className="avatar">
                        <div className="w-10 md:w-12 rounded-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="User Avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Search Bar for Small Devices */}
            {isSearchVisible && (
                <div className="bg-base-100 shadow-md py-2 px-4 absolute w-full z-50">
                    <div className="flex items-center w-full max-w-md mx-auto input input-bordered rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70 ml-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            type="text"
                            className="bg-transparent w-full px-3"
                            placeholder="Search"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
