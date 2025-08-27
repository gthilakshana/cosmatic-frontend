import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import AdminAddCustomer from "./adminAddCustomer";

export default function AdminCustomers() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const customers = [
        { name: "John Doe", email: "john@example.com", role: "User", status: "active" },
        { name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "blocked" },
        { name: "Bob Johnson", email: "bob@example.com", role: "User", status: "active" },

    ];


    const filteredCustomers = customers.filter(
        (customer) =>
            customer.name.toLowerCase().includes(search.toLowerCase()) ||
            customer.email.toLowerCase().includes(search.toLowerCase()) ||
            customer.role.toLowerCase().includes(search.toLowerCase()) ||
            customer.status.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="min-h-screen p-8 bg-green-50">
                <h1 className="text-3xl font-bold text-green-900 text-center mb-8">
                    Customers Management
                </h1>


                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search customers..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 outline-none"
                    />
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-full bg-white">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-green-100 rounded-t-xl">
                                <tr>
                                    {["Name", "Email", "Role", "Status", "Actions"].map((header) => (
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
                                {filteredCustomers.length > 0 ? (
                                    filteredCustomers.map((customer, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-green-50 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">
                                                {customer.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                                                {customer.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`px-3 py-1 text-xs font-semibold ${customer.role.toLowerCase() === "admin"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-green-100 text-green-700"
                                                        }`}
                                                >
                                                    {customer.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${customer.status === "blocked"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-green-100 text-green-700"
                                                        }`}
                                                >
                                                    {customer.status === "blocked" ? "Blocked" : "Active"}
                                                </span>
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
                                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                                            No customers found.
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


            <AdminAddCustomer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
