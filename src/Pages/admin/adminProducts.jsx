// import { useEffect, useState } from "react";
// import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function AdminProducts() {

    const products = [
        { id: 1, name: "Product 1", description: "Description 1", price: "$10", category: "Category 1" },
        { id: 2, name: "Product 2", description: "Description 2", price: "$20", category: "Category 2" },
        { id: 3, name: "Product 3", description: "Description 3", price: "$30", category: "Category 3" },
        { id: 1, name: "Product 1", description: "Description 1", price: "$10", category: "Category 1" },
        { id: 2, name: "Product 2", description: "Description 2", price: "$20", category: "Category 2" },
        { id: 3, name: "Product 3", description: "Description 3", price: "$30", category: "Category 3" },
        { id: 1, name: "Product 1", description: "Description 1", price: "$10", category: "Category 1" },
        { id: 2, name: "Product 2", description: "Description 2", price: "$20", category: "Category 2" },
        { id: 3, name: "Product 3", description: "Description 3", price: "$30", category: "Category 3" },
    ]


    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get(import.meta.env.VITE_API_URL + "/products")
    //         .then((response) => {
    //             setProducts(response.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);

    return (
        <>
            <div className="min-h-screen bg-white p-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-green-900 mb-8 text-center">
                        Products Management
                    </h1>

                    <div className="overflow-x-auto shadow-lg bg-white">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-green-100 rounded-t-xl">
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
                                {products.length > 0 ? (
                                    products.map((product, index) => (
                                        <tr key={index} className="hover:bg-green-50 transition-colors duration-200">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <img
                                                    src={product.image || "placeholder.png"}
                                                    alt={product.name}
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">
                                                {product.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                                                {product.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                                                ${product.price}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                                                {product.category}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-3">
                                                <button className="text-blue-500 hover:text-blue-700 transition">
                                                    <FiEdit />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700 transition">
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

            <div className="absolute w-[40px] h-[40px] bottom-10 right-10 bg-green-900 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-green-700 transition">
                <FaPlus size={18} />
            </div>
        </>
    );
}
