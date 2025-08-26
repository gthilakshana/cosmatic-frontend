import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "../components/footer";

export default function ContactPage() {
    return (
        <>

            <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-green-50 to-green-100 mt-9">


                <div className="text-center py-16 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 tracking-wide">
                        Contact Us
                    </h1>
                    <p className="mt-3 text-lg text-green-600 max-w-2xl mx-auto">
                        We’d love to hear from you! Let’s grow together naturally 🌱
                    </p>
                </div>


                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 mb-12">


                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                        <h2 className="text-2xl font-semibold text-green-800 mb-6">Get in Touch</h2>
                        <div className="space-y-5 text-green-700">
                            <p className="flex items-center gap-3 text-lg">
                                <FaPhoneAlt className="text-green-800 text-xl" /> +94 77 123 4567
                            </p>
                            <p className="flex items-center gap-3 text-lg">
                                <FaEnvelope className="text-green-800 text-xl" /> hello@organiccosmetics.com
                            </p>
                            <p className="flex items-center gap-3 text-lg">
                                <FaMapMarkerAlt className="text-green-800 text-xl" /> 125 Green Street, Colombo, Sri Lanka
                            </p>
                        </div>


                        <div className="flex gap-5 mt-8">
                            <a href="#" className="text-green-800 hover:text-green-700 text-2xl"><FaFacebook /></a>
                            <a href="#" className="text-green-800 hover:text-green-700 text-2xl"><FaInstagram /></a>
                            <a href="#" className="text-green-800 hover:text-green-700 text-2xl"><FaTwitter /></a>
                        </div>
                    </div>


                    <div className="bg-white border border-green-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                        <h2 className="text-2xl font-semibold text-green-800 mb-6">Send Us a Message</h2>
                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-green-300 rounded-xl px-4 py-3 text-green-800 placeholder-green-400 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-green-300 rounded-xl px-4 py-3 text-green-800 placeholder-green-400 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                className="w-full border border-green-300 rounded-xl px-4 py-3 text-green-800 placeholder-green-400 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-green-800 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-green-700 transition cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>


                <Footer />
            </div>

        </>
    );
}
