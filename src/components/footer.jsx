import { FaLeaf, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { GiPerfumeBottle, GiHerbsBundle } from "react-icons/gi";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-green-200 py-8 ">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">


                <div className="flex flex-col items-center md:items-start space-y-3">
                    <Link to="/">
                        <div className="inline-block rounded-md">
                            <img
                                src="logo.png"
                                alt="Thilakshana Logo"
                                className="h-9 md:h-12 w-[155px] sm:w-[150px] md:w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </Link>
                    <p className="text-gray-600 text-sm max-w-xs">
                        Pure organic cosmetics made with nature’s best herbs and oils.
                        Feel natural, stay beautiful.
                    </p>
                </div>


                <div className="space-y-2">
                    <h3 className="text-gray-800 font-semibold mb-2">Quick Links</h3>
                    <a href="/products" className="block text-gray-600 hover:text-green-800">Products</a>
                    <a href="/about" className="block text-gray-600 hover:text-green-800">About Us</a>
                    <a href="/contact" className="block text-gray-600 hover:text-green-800">Contact</a>
                </div>


                <div>
                    <h3 className="text-gray-800 font-semibold mb-2">Connect With Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="text-gray-600 hover:text-green-800">
                            <FaInstagram size={22} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-green-800">
                            <FaFacebookF size={22} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-green-800">
                            <FaTwitter size={22} />
                        </a>
                    </div>
                </div>
            </div>


            <div className="mt-8 text-center text-gray-500 text-xs">
                © {new Date().getFullYear()} Organic Cosmetics · Crafted with <GiHerbsBundle className="inline text-green-800" /> from nature
            </div>
        </footer>
    );
}
