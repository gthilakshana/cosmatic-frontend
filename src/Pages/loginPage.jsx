import axios from "axios";
import { useState } from "react";
import { FaLeaf, FaGoogle, FaFacebookF } from "react-icons/fa";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function Login() {
        try {
            const response = await axios.post("http://localhost:5000/users/login", {
                email,
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row bg-green-50">

            {/* Left Section: Logo + Tagline */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-green-100">
                <img
                    src="logo.png"
                    alt="Thilakshana Logo"
                    className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain hover:scale-105 transition-transform duration-300"
                />
                <span className="mt-6 text-center text-gray-700 text-lg sm:text-xl font-medium max-w-xs leading-relaxed">
                    Pure organic cosmetics made with nature’s best herbs and oils. <br />
                    Feel natural, stay beautiful. 🌿
                </span>
            </div>

            {/* Right Section: Login Form */}
            <div className="w-full md:w-1/2 flex justify-center items-center p-8">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-10 flex flex-col gap-6">
                    <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2 justify-center">
                        <FaLeaf /> Login
                    </h1>

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                    />

                    {/* Password Input */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                    />

                    {/* Login Button */}
                    <button
                        onClick={Login}
                        className="w-full py-3 bg-green-200 text-green-900 rounded-xl font-medium shadow hover:bg-green-300 transition-colors duration-300"
                    >
                        Login
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-2 text-gray-400 my-2">
                        <hr className="flex-1 border-t border-gray-300" />
                        <span className="text-sm">or login with</span>
                        <hr className="flex-1 border-t border-gray-300" />
                    </div>

                    {/* Social Buttons */}
                    <div className="flex flex-col gap-3">
                        <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl hover:bg-red-50 transition">
                            <FaGoogle className="text-red-500" /> Login with Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl hover:bg-blue-50 transition">
                            <FaFacebookF className="text-blue-600" /> Login with Facebook
                        </button>
                    </div>

                    {/* Signup Link */}
                    <p className="text-center text-gray-600 text-sm mt-2">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-green-700 hover:underline font-medium">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
