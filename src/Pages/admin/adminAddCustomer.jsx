import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminAddCustomer({ isOpen, onClose, refresh }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "admin",
    });

    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                toast.error("No token found. Please login again.");
                setIsLoading(false);
                return;
            }

            await axios.post(
                `${import.meta.env.VITE_API_URL}/api/users`,
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            toast.success("Admin added successfully");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                role: "admin",
            });
            onClose();
            if (refresh) refresh();
        } catch (error) {
            console.error("Error adding admin:", error.response || error);
            toast.error(error?.response?.data?.message || "Failed to add admin");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">

            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />


            <div className="relative bg-white w-[90%] lg:w-[70%] max-h-[90vh] shadow-2xl overflow-y-auto z-10">
                <div className="sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between p-4 rounded-t-2xl">
                    <h2 className="text-xl font-semibold text-green-800">
                        Add New Admin
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-green-800 rounded-full transition"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                <form className="p-6 space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                                placeholder="Enter first name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                                placeholder="Enter last name"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                            placeholder="Enter email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <input type="hidden" name="role" value="admin" />

                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <button
                            onClick={onClose}
                            type="button"
                            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-green-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Saving..." : "Save Admin"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
