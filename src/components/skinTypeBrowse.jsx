export default function SkinTypeBrowse() {
    const skinTypes = [
        { name: "Normal Skin", image: "/skin-normal.jpg" },
        { name: "Oily Skin", image: "/skin-oily.jpg" },
        { name: "Dry Skin", image: "/skin-dry.jpg" },
        { name: "Combination Skin", image: "/skin-combination.jpg" },
        { name: "Sensitive Skin", image: "/skin-sensitive.jpg" },
    ];

    return (
        <div className="bg-green-50 h-[100vh]">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-10">
                🌿 Browse by Your Skin Type
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {skinTypes.map((skin) => (
                    <div
                        key={skin.name}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group"
                    >
                        <div className="w-full h-32 md:h-40 overflow-hidden">
                            <img
                                src={skin.image}
                                alt={skin.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-green-800 font-semibold text-lg">
                                {skin.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
