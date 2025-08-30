import { useState } from "react";
import { FaSignOutAlt, FaUsers, FaChartLine, FaShoppingCart, FaLeaf, FaBars, FaTimes, FaUserShield } from "react-icons/fa";
import { Link, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import AdminCustomers from "./admin/adminCustomers";
import AdminProducts from "./admin/adminproducts";
import AdminOrders from "./admin/adminOrders";
import AdminView from "./admin/adminView";
import AdminAddProducts from "./admin/adminAddProducts";
import AdminAddCustomer from "./admin/adminAddCustomer";
import AdminUpdateProducts from "./admin/adminUpdateProducts";
import AdminTable from "./admin/adminTable";
import AdminUpdate from "./admin/adminUpdate";

export default function AdminPage() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { name: "Dashboard", icon: <FaChartLine />, path: "/admin/dashboard" },
        { name: "Manage Users", icon: <FaUsers />, path: "/admin/customers" },
        { name: "Manage Admins", icon: <FaUserShield />, path: "/admin/admins" },
        { name: "Manage Products", icon: <FaLeaf />, path: "/admin/products" },
        { name: "Manage Orders", icon: <FaShoppingCart />, path: "/admin/orders" },

    ];

    return (
        <>

            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 bg-green-700 text-white rounded-xl shadow-md hover:bg-green-800 transition duration-300"
                >
                    {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                </button>
            </div>


            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-green-50 to-white shadow-xl p-6 z-40 border-r-2 border-green-200 transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-1/5 flex flex-col`}
            >

                <header className="flex justify-center bg-green-900 items-center w-full h-[100px] md:h-[100px] cursor-pointer border-2 border-green-900">
                    <Link to="/admin">
                        <img
                            src="logo.png"
                            alt="Organic Cosmetics Logo"
                            className="h-[100px] w-[250px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300 "
                        />
                    </Link>
                </header>

                <hr className="border-t border-green-200 my-4 w-full mx-auto" />


                <main className="flex flex-col flex-1">
                    <nav className="flex flex-col gap-2 mt-4">
                        {menuItems.map((item) => {
                            const active = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center gap-3 p-3 font-medium transition-all duration-300 ${active
                                        ? "bg-green-900 text-white shadow-md"
                                        : "text-green-700 hover:bg-green-100 hover:text-green-800"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.icon} <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <button
                        onClick={() => {
                            localStorage.removeItem("authToken");
                            sessionStorage.clear();
                            setIsOpen(false);
                            navigate("/login");
                        }}
                        className="flex items-center gap-3 p-3 mt-auto cursor-pointer bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900 transition duration-300 justify-center font-medium w-full"
                    >
                        <FaSignOutAlt /> Logout
                    </button>
                </main>
            </aside>



            <div className="w-full md:w-[calc(100%-20%)] bg-white flex flex-col overflow-hidden ml-0 md:ml-[20%]">
                <div className="h-default w-full overflow-y-auto p-6">
                    <Routes>
                        <Route path="/" element={<AdminView />} />
                        <Route path="/dashboard" element={<AdminView />} />
                        <Route path="/customers" element={<AdminCustomers />} />
                        <Route path="/admins" element={<AdminTable />} />
                        <Route path="/orders" element={<AdminOrders />} />
                        <Route path="/update-admin/:id" element={<AdminUpdate />} />

                        <Route path="/add-product" element={<AdminAddProducts />} />
                        <Route path="/add-customer" element={<AdminAddCustomer />} />
                        <Route path="/update-product/:id" element={<AdminUpdateProducts />} />
                        <Route path="/products" element={<AdminProducts />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
