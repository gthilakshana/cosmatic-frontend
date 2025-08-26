import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const sections = [
        { name: "home", path: "/" },
        { name: "products", path: "/products" },
        { name: "about", path: "/about" },
        { name: "contact", path: "/contact" },
    ];

    return (
        <header className="fixed top-0 w-full bg-white backdrop-blur-md shadow-sm z-50 border-b-2 border-green-200">
            <div className="w-full mx-auto flex items-center justify-between px-6 md:px-12 py-3 uppercase">


                <Link to="/">
                    <img
                        src="/logo.png"
                        alt="Organic Cosmetics Logo"
                        className="h-9 md:h-12 w-[155px] sm:w-[150px] md:w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    />
                </Link>


                <nav className="hidden md:flex items-center space-x-6 text-green-800 font-medium">
                    {sections.map((section) => (
                        <Link
                            key={section.name}
                            to={section.path}
                            className="px-3 py-2 hover:text-green-600 transition-colors duration-200"
                        >
                            {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                        </Link>
                    ))}


                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="hover:text-green-900 transition-colors duration-200">
                            <FaUser size={20} />
                        </Link>
                        <Link to="/cart" className="relative hover:text-green-900 transition-colors duration-200">
                            <FaShoppingCart size={20} />
                            <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                3
                            </span>
                        </Link>
                    </div>
                </nav>


                <button
                    className="md:hidden text-green-700 hover:text-green-900 focus:outline-none"
                    onClick={() => setIsOpen(true)}
                >
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            { /* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 
            ${isOpen ? "translate-x-0" : "translate-x-full"} 
            bg-green-50 text-green-700 shadow-xl z-[10000] md:hidden`}
            >

                <div className="flex items-center justify-between px-6 py-4 border-b border-green-200">
                    <h2 className="text-lg font-semibold text-green-800">Menu</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-green-700 hover:text-green-900 transition-colors"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>


                <nav className="flex flex-col space-y-3 px-6 py-6 bg-green-50 h-screen">
                    {sections.map((section) => (
                        <Link
                            key={section.name}
                            to={section.path}
                            className="py-2 px-2 rounded-lg hover:bg-green-100 transition-colors font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                        </Link>
                    ))}


                    <Link
                        to="/login"
                        className="flex items-center py-2 px-2 rounded-lg hover:bg-green-100 transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaUser className="mr-2" /> Login
                    </Link>

                    <Link
                        to="/cart"
                        className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-green-100 transition-colors font-medium relative"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="flex items-center">
                            <FaShoppingCart className="mr-2" /> Cart
                        </div>
                        <span className="absolute -top-1 -right-2 bg-green-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                            3
                        </span>
                    </Link>
                </nav>
            </div>


            {isOpen && (
                <div
                    className="fixed inset-0 0 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </header>
    );
}
