import { FaUsers, FaChartLine, FaShoppingCart, FaLeaf, FaDollarSign, FaBoxOpen } from "react-icons/fa";

export default function AdminView() {
    const stats = [
        { icon: FaUsers, title: "Customers", value: "1,245", color: "green" },
        { icon: FaShoppingCart, title: "Orders", value: "320", color: "yellow" },
        { icon: FaDollarSign, title: "Revenue", value: "$12,430", color: "teal" },
        { icon: FaBoxOpen, title: "Products", value: "85", color: "purple" },
    ];

    return (
        <div className="p-6 min-h-screen bg-green-50">
            <h1 className="text-3xl font-bold text-green-900 mb-6">Welcome Back</h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={idx}
                            className={`bg-${stat.color}-100 rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col items-start`}
                        >
                            <Icon className={`text-${stat.color}-600 text-3xl mb-3`} />
                            <h3 className={`font-semibold text-${stat.color}-800 text-lg`}>{stat.title}</h3>
                            <p className={`text-${stat.color}-700 mt-1 text-xl font-bold`}>{stat.value}</p>
                        </div>
                    );
                })}
            </div>


            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h2 className="text-2xl font-semibold text-green-900 mb-4">Analytics Overview</h2>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="bg-green-50 flex-1 h-64 rounded-xl shadow-inner flex items-center justify-center">
                        <p className="text-green-400 italic">Orders Chart Placeholder</p>
                    </div>
                    <div className="bg-yellow-50 flex-1 h-64 rounded-xl shadow-inner flex items-center justify-center">
                        <p className="text-yellow-400 italic">Revenue Chart Placeholder</p>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-teal-100 rounded-xl p-6 shadow-md hover:shadow-lg transition flex items-center gap-4 cursor-pointer">
                    <FaLeaf className="text-teal-600 text-3xl" />
                    <span className="text-teal-800 font-semibold">Manage Products</span>
                </div>
                <div className="bg-purple-100 rounded-xl p-6 shadow-md hover:shadow-lg transition flex items-center gap-4 cursor-pointer">
                    <FaUsers className="text-purple-600 text-3xl" />
                    <span className="text-purple-800 font-semibold">Manage Customers</span>
                </div>
                <div className="bg-yellow-100 rounded-xl p-6 shadow-md hover:shadow-lg transition flex items-center gap-4 cursor-pointer">
                    <FaShoppingCart className="text-yellow-600 text-3xl" />
                    <span className="text-yellow-800 font-semibold">Manage Orders</span>
                </div>
                <div className="bg-green-100 rounded-xl p-6 shadow-md hover:shadow-lg transition flex items-center gap-4 cursor-pointer">
                    <FaChartLine className="text-green-600 text-3xl" />
                    <span className="text-green-800 font-semibold">View Analytics</span>
                </div>
            </div>
        </div>
    );
}
