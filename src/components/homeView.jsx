import { FaWhatsapp, FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import Footer from "./footer";

export default function HomeView() {
    return (
        <section className="min-h-screen bg-green-200 mb-4">


            <div className="min-h-screen flex flex-col justify-center items-center ">
                <h1 className="text-2xl font-bold">HomeView Page</h1>
            </div>


            <div className="mt-auto ">
                <Footer />
            </div>







            <div className="fixed w-[50px] h-[140px] bg-green-800 bottom-1/2 right-0 flex flex-col items-center justify-around py-3 shadow-lg ">

                <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:scale-110 transition-transform"
                >
                    <FaWhatsapp />
                </a>


                <a
                    href="https://m.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:scale-110 transition-transform"
                >
                    <FaFacebookMessenger />
                </a>



                <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:scale-110 transition-transform"
                >
                    <FaTelegramPlane />
                </a>

            </div>




        </section>
    )
}   