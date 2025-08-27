import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaLeaf, FaGoogle, FaFacebookF } from "react-icons/fa";
import Footer from "../components/footer";
import toast from "react-hot-toast";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    async function Login() {
        try {
            const response = await axios.post(
                import.meta.env.VITE_API_URL + '/api/users/login',
                { email, password }
            );

            const { user, token, message } = response.data;

            if (!user) {
                toast.error(message);
                return;
            }
            toast.success(message);
            localStorage.setItem("token", token);
            navigate(user.role === "admin" ? "/admin" : "/");


        } catch (error) {
            const status = error?.response?.status;
            const errorMessage = error?.response?.data?.message || error.message;

            if (status === 403) {
                toast.error("Your account has been blocked.");
            } else if (status === 401 || status === 404) {
                toast.error(errorMessage);
            } else {
                toast.error("Something went wrong.");
            }
        }
    }

    return (
        <>
            <div className="w-full min-h-screen flex flex-col md:flex-row bg-green-50">

                <div className="hidden md:flex w-1/2 flex-col justify-center items-center p-5 bg-green-100">
                    <div className="flex w-full h-[300px] flex-col justify-center items-center gap-4 ">
                        <img
                            src="logo.png"
                            alt="Thilakshana Logo"
                            className="w-48 h-48 md:w-120 md:h-30 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <span className="text-center text-gray-700 text-[16px]  leading-relaxed lg:w-[480px] ">
                            Pure organic cosmetics made with nature’s best herbs and oils.
                            Feel natural, stay beautiful. 🌿
                        </span>
                    </div>
                </div>


                <div className="w-full md:w-1/2 flex justify-center items-center p-5 bg-green-100 min-h-screen">
                    <div className="w-full max-w-md bg-white shadow-lg p-10 flex flex-col gap-2">
                        <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2 justify-center">
                            <FaLeaf /> Login
                        </h1>


                        <form onSubmit={(e) => { e.preventDefault(); Login(); }} className="space-y-3">


                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                            />


                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                            />


                            <button
                                type="submit"
                                className="w-full py-3 bg-green-200 text-green-800 font-medium shadow hover:bg-green-300 transition-colors duration-300 cursor-pointer"
                            >
                                Login
                            </button>


                        </form>

                        <div className="flex items-center gap-2 text-gray-400 my-2">
                            <hr className="flex-1 border-t border-gray-300" />
                            <span className="text-sm">or login with</span>
                            <hr className="flex-1 border-t border-gray-300" />
                        </div>

                        <div className="flex flex-col gap-3">
                            <button className="w-full flex items-center justify-center gap-2 text-green-800 py-3 border-2 border-green-200 rounded-xl hover:bg-green-100 transition cursor-pointer">
                                <FaGoogle className="text-green-800" /> Login with Google
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 text-green-800  py-3 border-2 border-green-200 rounded-xl hover:bg-green-100 transition cursor-pointer">
                                <FaFacebookF className="text-green-800" /> Login with Facebook
                            </button>
                        </div>


                        <p className="text-center text-gray-600 text-sm mt-2">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-green-700 hover:underline font-medium">
                                Sign Up
                            </Link>

                        </p>
                    </div>
                </div>


            </div>
            <div className="mt-auto ">
                <Footer />
            </div>

        </>
    );
}
