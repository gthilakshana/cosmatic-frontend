import { FaTimes } from "react-icons/fa";

export default function AdminAddProducts({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50  ">
            <div className="bg-white w-[90%] lg:w-[75%]  px-[2%] shadow-lg p-6 relative border-2 border-green-200 overflow-y-auto">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-green-800 transition cursor-pointer"
                >
                    <FaTimes size={20} />
                </button>

                <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                    Add New Product
                </h2>


                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Product Name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-300 outline-none"
                            placeholder="Enter product name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            rows="3"
                            className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-300 outline-none"
                            placeholder="Enter product description"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Price
                            </label>
                            <input
                                type="number"
                                className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-300 outline-none"
                                placeholder="Price"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Labelled Price
                            </label>
                            <input
                                type="number"
                                className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-300 outline-none"
                                placeholder="Labelled Price"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-300 outline-none"
                            placeholder="Category"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Images
                        </label>
                        <input
                            type="file"
                            multiple
                            className="w-full border border-gray-300 px-4 py-2 cursor-pointer"
                        />
                    </div>


                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-green-800 text-white px-6 py-2 shadow-md hover:bg-green-900 transition cursor-pointer"
                        >
                            Save Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
