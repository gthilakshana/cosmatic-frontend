import { FaEdit, FaTrash } from "react-icons/fa";

export default function AdminCustomers() {
    return (
        <div className="min-h-screen bg-green-50 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-green-900 mb-6 text-center">
                    Customers Management
                </h1>

                <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-green-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            <tr className="hover:bg-green-50">
                                <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">

                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">

                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-800">

                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                                    {status === "blocked" ? "Blocked" : "Active"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center space-x-3">
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <FaEdit />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}  