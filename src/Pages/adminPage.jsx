import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { FaUsers, FaChartLine, FaShoppingCart, FaLeaf, FaBars, FaTimes } from "react-icons/fa";

import AdminCustomers from "./admin/adminCustomers";
import AdminProducts from "./admin/adminProducts";
import AdminOrders from "./admin/adminOrders";
import AdminView from "./admin/adminView";

export default function AdminPage() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", icon: <FaChartLine />, path: "/admin/dashboard" },
        { name: "Customers", icon: <FaUsers />, path: "/admin/customers" },
        { name: "Orders", icon: <FaShoppingCart />, path: "/admin/orders" },
        { name: "Products", icon: <FaLeaf />, path: "/admin/products" },
    ];

    return (
        <>
            {/* Mobile menu button */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 bg-green-800 text-white rounded-md shadow-md"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-green-100 shadow-md p-6 z-40 border-r-3 border-green-200 transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-[20%] md:flex md:flex-col`}>

                <Link to="/admin" className="mb-6">
                    <img
                        src="logo.png"
                        alt="Thilakshana Logo"
                        className="h-9 md:h-12 w-[155px] sm:w-[150px] md:w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                <nav className="flex flex-col gap-4 text-[14px] text-green-700 mt-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center gap-2 hover:text-green-500 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.icon} {item.name}
                        </Link>
                    ))}
                </nav>
            </div>


            <div className="w-full md:w-[calc(100%-20%)] h-[96vh] bg-white flex flex-col overflow-hidden ml-0 md:ml-[20%]">
                <div className="h-default w-full overflow-y-scroll">
                    <Routes>
                        <Route path="/" element={<AdminView />} />
                        <Route path="/dashboard" element={<AdminView />} />
                        <Route path="/customers" element={<AdminCustomers />} />
                        <Route path="/orders" element={<AdminOrders />} />
                        <Route path="/products" element={<AdminProducts />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
