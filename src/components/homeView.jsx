import { FaWhatsapp, FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import Footer from "./footer";
import Banner from "./banner";

export default function HomeView() {
    return (
        <>

            <section className="min-h-screen bg-green-200 mb-4">


                <div className="min-h-screen flex flex-col ">
                    <Banner />
                </div>


                <div className="mt-auto ">
                    <Footer />
                </div>






                <div className="fixed w-[50px] h-[140px] bg-green-800 bottom-1/2 right-0 flex flex-col items-center justify-around py-3 z-50 shadow-lg">

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

        </>
    )
}   