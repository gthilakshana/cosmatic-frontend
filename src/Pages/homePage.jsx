import { useState, useRef, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../components/footer"
import Header from "../components/header"
import HomeView from "../components/homeView"
import { FadeLoader } from "react-spinners";


export default function AdminPage() {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [loadingSections, setLoadingSections] = useState(true);
    const lastScrollY = useRef(0);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowScrollButton(currentScrollY > 200);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingSections(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen w-full flex flex-col">
            <Header />

            {loadingSections ? (
                <div className="flex-1 flex items-center justify-center bg-white">
                    <FadeLoader color="#39C906" loading={loadingSections} size={15} />
                </div>
            ) : (
                <>
                    <HomeView />
                    <Footer />
                </>
            )}


            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 cursor-pointer bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition "
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
            )}


        </div>
    )
}   