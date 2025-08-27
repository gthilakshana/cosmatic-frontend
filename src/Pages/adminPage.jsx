import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { FaUsers, FaChartLine, FaShoppingCart, FaLeaf, FaBars, FaTimes } from "react-icons/fa";

import AdminCustomers from "./admin/adminCustomers";
import AdminProducts from "./admin/adminProducts";
import AdminOrders from "./admin/adminOrders";
import AdminView from "./admin/adminView";
import AdminAddProducts from "./admin/adminAddProducts";
import AdminAddCustomer from "./admin/adminAddCustomer";

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

            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 bg-green-800 text-white rounded-full shadow-md hover:bg-green-700 transition duration-300"
                >
                    {isOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
                </button>
            </div>


            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-40 border-r border-green-200 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-1/5 md:flex md:flex-col`}
            >

                <Link to="/admin" className="mb-8 flex justify-center  ">
                    <img
                        src="logo.png"
                        alt="Organic Cosmetics Logo"
                        className="h-12 w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                <hr class="border-t-2 border-green-100 my-4 w-full mx-auto"></hr>

                <nav className="flex flex-col gap-4 mt-6 text-green-700 text-lg">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 hover:text-green-800 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.icon} <span className="font-medium">{item.name}</span>
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
                        <Route path="/add-product" element={<AdminAddProducts />} />
                        <Route path="/add-customer" element={<AdminAddCustomer />} />
                        <Route path="/products" element={<AdminProducts />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
