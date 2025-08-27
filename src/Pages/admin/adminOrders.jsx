import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function AdminOrders() {
    const [search, setSearch] = useState("");

    const orders = [
        {
            orderId: "ORD001",
            name: "John Doe",
            email: "john@example.com",
            status: "preparing",
            phone: "1234567890",
            address: "123 Main St",
            date: "2025-08-27",
            total: 50
        },
        {
            orderId: "ORD002",
            name: "Jane Smith",
            email: "jane@example.com",
            status: "delivered",
            phone: "0987654321",
            address: "456 Elm St",
            date: "2025-08-26",
            total: 80
        },

    ];

    const filteredOrders = orders.filter(
        (order) =>
            order.orderId.toLowerCase().includes(search.toLowerCase()) ||
            order.name.toLowerCase().includes(search.toLowerCase()) ||
            order.email.toLowerCase().includes(search.toLowerCase()) ||
            order.status.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-8 min-h-screen bg-green-50">
            <h1 className="text-3xl font-bold text-green-900 text-center mb-8">
                Orders Management
            </h1>


            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search orders..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 outline-none"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 shadow-lg bg-white">
                    <thead className="bg-green-100">
                        <tr>
                            {["Order ID", "Name", "Email", "Status", "Phone", "Address", "Date", "Total", "Actions"].map((header) => (
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
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order, index) => (
                                <tr key={index} className="hover:bg-green-50 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-800">{order.orderId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-800">{order.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">{order.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === "delivered"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-800">{order.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-800">{order.address}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-800">{order.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-800">${order.total}</td>
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
                                <td colSpan="9" className="px-6 py-4 text-center text-gray-500">
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
