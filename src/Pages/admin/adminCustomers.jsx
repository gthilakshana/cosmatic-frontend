import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

export default function AdminCustomers() {
    const customers = [
        { name: "John Doe", email: "john@example.com", role: "User", status: "active" },
        { name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "blocked" },
        { name: "Bob Johnson", email: "bob@example.com", role: "User", status: "active" },
        { name: "John Doe", email: "john@example.com", role: "User", status: "active" },
        { name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "blocked" },
        { name: "Bob Johnson", email: "bob@example.com", role: "User", status: "active" },
        { name: "John Doe", email: "john@example.com", role: "User", status: "active" },
        { name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "blocked" },
        { name: "Bob Johnson", email: "bob@example.com", role: "User", status: "active" },
        { name: "John Doe", email: "john@example.com", role: "User", status: "active" },
        { name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "blocked" },
        { name: "Bob Johnson", email: "bob@example.com", role: "User", status: "active" },
        { name: "John Doe", email: "john@example.com", role: "User", status: "active" },
        { name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "blocked" },
        { name: "Bob Johnson", email: "bob@example.com", role: "User", status: "active" },


    ];

    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold text-green-900 text-center mb-8">
                    Customers Management
                </h1>

                <div className="overflow-x-auto">
                    <div className="min-w-full shadow-lg rounded-xl bg-white">
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
                                {customers.map((customer, index) => (
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
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                                            {customer.role}
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
                                            <button className="text-blue-500 hover:text-blue-700 transition">
                                                <FiEdit />
                                            </button>
                                            <button className="text-red-500 hover:text-red-700 transition">
                                                <RiDeleteBin6Line />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
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
