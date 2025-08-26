import Footer from "../components/footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-green-50 to-green-100 mt-9">

            {/* Page Header */}
            <div className="text-center py-16 px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-green-800 tracking-wide">
                    About Us
                </h1>
                <p className="mt-3 text-lg text-green-600 max-w-2xl mx-auto">
                    Discover our story and passion for creating natural beauty
                </p>
            </div>

            {/* About Content */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 mb-16">
                <div className="bg-white border border-green-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 md:p-12">
                    <h2 className="text-2xl font-semibold text-green-800 mb-6">Our Journey</h2>
                    <p className="text-green-700 leading-relaxed mb-6">
                        At <span className="font-semibold text-green-800">Organic Cosmetics</span>,
                        we believe in the power of nature to enhance true beauty.
                        Our products are crafted with care using pure, natural ingredients
                        that are safe for your skin and kind to the environment.
                    </p>

                    <h2 className="text-2xl font-semibold text-green-800 mb-6">Our Mission</h2>
                    <p className="text-green-700 leading-relaxed mb-6">
                        We are dedicated to promoting sustainable beauty solutions 🌿.
                        From sourcing ingredients ethically to eco-friendly packaging,
                        every step we take is guided by our mission to protect both
                        your skin and our planet.
                    </p>

                    <h2 className="text-2xl font-semibold text-green-800 mb-6">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-green-700 space-y-2">
                        <li>100% natural and organic ingredients</li>
                        <li>Eco-friendly & cruelty-free products</li>
                        <li>Trusted by thousands of happy customers</li>
                        <li>Committed to sustainability and wellness</li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
