
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";

export default function Header() {
    const sections = [
        { name: "home", path: "/" },
        { name: "products", path: "/products" },
        { name: "about", path: "/about" },
        { name: "contact", path: "/contact" },
    ];

    return (
        <header className="fixed top-0 w-full bg-white backdrop-blur-md shadow-sm z-50">
            <div className="w-full mx-auto flex items-center justify-between px-6 md:px-12 py-3 uppercase">
                {/* Logo */}
                <Link to="/">
                    <img
                        src="logo.png"
                        alt="Thilakshana Logo"
                        className="h-9 md:h-12 w-[155px] sm:w-[150px] md:w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
                    {sections.map((section) => (
                        <Link
                            key={section.name}
                            to={section.path}
                            className="px-3 py-3 text-gray-700 hover:text-green-600 transition-colors duration-200"
                        >
                            {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                        </Link>
                    ))}

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
                            <FaUser size={20} />
                        </Link>
                        <Link to="/cart" className="text-gray-700 hover:text-green-600 transition-colors duration-200 relative">
                            <FaShoppingCart size={20} />
                            <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                3
                            </span>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700 hover:text-green-600 focus:outline-none">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
