import { FaLeaf, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { GiHerbsBundle } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-t from-green-50 via-green-100 to-white border-t-2 border-green-300 py-12 ">

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">


                <div className="flex flex-col items-center md:items-start space-y-4">
                    <Link to="/">
                        <img
                            src="/logo.png"
                            alt="Organic Cosmetics Logo"
                            className="h-12 w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                    <p className="text-green-700 text-sm max-w-xs flex items-center gap-2">
                        <FaLeaf className="text-green-800" /> Pure organic cosmetics made with nature’s best herbs and oils. Feel natural, stay beautiful.
                    </p>
                </div>


                <div className="space-y-3">
                    <h3 className="text-green-800 font-semibold mb-2">Quick Links</h3>
                    <Link to="/products" className="block text-green-700 hover:text-green-900 transition duration-300">Products</Link>
                    <Link to="/about" className="block text-green-700 hover:text-green-900 transition duration-300">About Us</Link>
                    <Link to="/contact" className="block text-green-700 hover:text-green-900 transition duration-300">Contact</Link>
                </div>


                <div>
                    <h3 className="text-green-800 font-semibold mb-2">Connect With Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4 mt-1">
                        <a href="#" className="text-green-700 hover:text-green-900 transform hover:scale-110 transition duration-300">
                            <FaInstagram size={22} />
                        </a>
                        <a href="#" className="text-green-700 hover:text-green-900 transform hover:scale-110 transition duration-300">
                            <FaFacebookF size={22} />
                        </a>
                        <a href="#" className="text-green-700 hover:text-green-900 transform hover:scale-110 transition duration-300">
                            <FaTwitter size={22} />
                        </a>
                    </div>
                </div>

            </div>


            <div className="mt-12 text-center text-green-600 text-xs">
                © {new Date().getFullYear()} Organic Cosmetics · Crafted with <GiHerbsBundle className="inline text-green-800" /> from nature
            </div>

        </footer>
    );
}
