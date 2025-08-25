import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import HomeView from "../components/homeView";
import ProductPage from "./productPage";
import AboutPage from "./aboutPage";
import ContactPage from "./contactPage";
import { FadeLoader } from "react-spinners";

export default function HomePage() {
    const [loadingSections, setLoadingSections] = useState(true);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoadingSections(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => setShowScrollButton(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div className="min-h-screen w-full flex flex-col">
            <Header />

            {loadingSections ? (
                <div className="flex-1 flex items-center justify-center bg-white">
                    <FadeLoader color="#006400" loading={loadingSections} size={15} />
                </div>
            ) : (
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route path="/products" element={<ProductPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>

                </main>
            )}

            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 cursor-pointer bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
}
