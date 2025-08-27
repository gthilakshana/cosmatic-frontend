import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import AdminAddProducts from "./adminAddProducts";

export default function AdminProducts() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const products = [
        { id: 1, name: "gavrawa", description: "Description 1", price: "10", category: "Category 1" },
        { id: 2, name: "Product 2", description: "Description 2", price: "20", category: "Category 2" },
        { id: 3, name: "Product 3", description: "Description 3", price: "30", category: "Category 3" },
        { id: 4, name: "Product 4", description: "Description 4", price: "40", category: "Category 4" },
        { id: 1, name: "Product 1", description: "Description 1", price: "10", category: "Category 1" },
        { id: 2, name: "Product 2", description: "Description 2", price: "20", category: "Category 2" },
        { id: 3, name: "Product 3", description: "Description 3", price: "30", category: "Category 3" },
        { id: 4, name: "Product 4", description: "Description 4", price: "40", category: "Category 4" },
    ];


    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="min-h-screen bg-green-50 p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-green-900 mb-8 text-center">
                        Products Management
                    </h1>


                    <div className="flex justify-center mb-8">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 outline-none"
                        />
                    </div>

                    <div className="overflow-x-auto shadow-lg bg-white">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-green-100">
                                <tr>
                                    {["Image", "Name", "Description", "Price", "Category", "Actions"].map((header) => (
                                        <th
                                            key={header}
                                            className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                        <tr key={product.id} className="hover:bg-green-50 transition-colors duration-200">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <img
                                                    src={product.image || "placeholder.png"}
                                                    alt={product.name}
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-arial text-sm">
                                                {product.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-arial text-sm">
                                                {product.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-arial text-sm">
                                                ${product.price}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-arial text-sm">
                                                {product.category}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-3">
                                                <button className="text-blue-500 hover:text-blue-700 transition cursor-pointer">
                                                    <FiEdit />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700 transition cursor-pointer">
                                                    <RiDeleteBin6Line />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                            No products found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div
                onClick={() => setIsOpen(true)}
                className="absolute w-[40px] h-[40px] bottom-10 right-10 bg-green-900 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-green-700 transition"
            >
                <FaPlus size={18} />
            </div>


            <AdminAddProducts isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
