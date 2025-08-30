import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaTimes, FaTrash } from "react-icons/fa";
import mediaUpload from "../../../utils/mediaUpload";

export default function AdminUpdate({ isOpen, onClose, admin, refresh }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [newImageFile, setNewImageFile] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (admin) {
            setName(`${admin.firstName} ${admin.lastName}`);
            setEmail(admin.email);
            setImage(admin.image || "");
        }
    }, [admin]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) return toast.error("Session expired");

        try {
            setLoading(true);

            let uploadedUrl = image;
            if (newImageFile) {
                uploadedUrl = await mediaUpload(newImageFile);
            }

            const [firstName, ...rest] = name.trim().split(" ");
            const lastName = rest.join(" ");

            await axios.put(
                `${import.meta.env.VITE_API_URL}/api/users/${admin._id}`,
                { firstName, lastName, email, image: uploadedUrl },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            toast.success("Admin updated successfully");
            onClose();
            refresh();
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Failed to update admin");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div className="relative bg-white w-[90%] md:w-[45%] max-h-[80vh] overflow-y-auto shadow-xl rounded-lg">


                <div className="sticky top-0 bg-white border-b flex items-center justify-between p-5 z-10">
                    <h2 className="text-lg font-semibold text-green-700">Update Admin</h2>
                    <button onClick={onClose} className="p-2 text-gray-500 hover:text-green-700 rounded-full">
                        <FaTimes size={18} />
                    </button>
                </div>


                <form className="p-6 space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                                placeholder="Admin Name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setNewImageFile(e.target.files[0])}
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none"
                            />
                            <div className="mt-3">
                                <img
                                    src={newImageFile ? URL.createObjectURL(newImageFile) : image}
                                    alt="Preview"
                                    className="w-24 h-24 object-cover rounded-full border border-green-500"
                                />
                                {image && !newImageFile && (
                                    <button
                                        type="button"
                                        onClick={() => setImage("")}
                                        className="ml-3 px-2 py-1 text-xs bg-red-600 text-white rounded"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-900 text-white px-6 py-2 rounded-lg shadow hover:bg-green-800 transition disabled:opacity-50"
                        >
                            {loading ? "Saving..." : "Update Admin"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
