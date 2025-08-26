import { Link, Routes, Route } from "react-router-dom";
import { FaUsers, FaChartLine, FaShoppingCart, FaLeaf } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import AdminCustomers from "./admin/adminCustomers";
import AdminProducts from "./admin/adminProducts";
import AdminOrders from "./admin/adminOrders";
import AdminView from "./admin/adminView";

export default function AdminPage() {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-50 flex p-4 gap-4 fixed">

                <div className="w-[20%] bg-white rounded-xl shadow-md p-6 flex flex-col border-2 border-green-500">

                    <Link to="/admin">
                        <img
                            src="logo.png"
                            alt="Thilakshana Logo"
                            className="h-9 md:h-12 w-[155px] sm:w-[150px] md:w-[220px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                    </Link>


                    <nav className="flex flex-col gap-4 text-[14px] text-green-700 mt-6 ">
                        <Link to="/admin/dashboard" className="flex items-center gap-2 hover:text-green-500 transition">
                            <FaChartLine /> Dashboard
                        </Link>
                        <Link to="/admin/customers" className="flex items-center gap-2 hover:text-green-500 transition">
                            <FaUsers /> Customers
                        </Link>
                        <Link to="/admin/orders" className="flex items-center gap-2 hover:text-green-500 transition">
                            <FaShoppingCart /> Orders
                        </Link>
                        <Link to="/admin/products" className="flex items-center gap-2 hover:text-green-500 transition">
                            <FaLeaf /> Products
                        </Link>
                    </nav>
                </div>


                <div className="w-[calc(100%-20%)] h-[96vh] bg-white flex flex-col overflow-hidden border-2 border-green-500 rounded-xl">
                    <div className="h-default w-full overflow-y-scroll">
                        <Routes>

                            <Route path="/dashboard" element={<AdminView />} />
                            <Route path="/customers" element={<AdminCustomers />} />
                            <Route path="/orders" element={<AdminOrders />} />
                            <Route path="/products" element={<AdminProducts />} />
                        </Routes>
                    </div>
                </div>

                <div className="fixed w-[40px] h-[40px] bottom-7 right-7 bg-green-900 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-green-700 transition">
                    <FaPlus size={18} />
                </div>
            </div>



        </>
    )
}
