import { FaUsers, FaChartLine, FaShoppingCart, FaLeaf } from "react-icons/fa";


export default function AdminView() {
    return (
        <>


            <div className="w-full bg-white rounded-xl shadow-md p-6 flex flex-col gap-6">
                <h1 className="text-3xl font-bold text-green-900">Welcome Back!</h1>


                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-green-100 rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-start">
                        <FaUsers className="text-green-600 text-2xl mb-2" />
                        <h3 className="font-semibold text-green-800">Customers</h3>
                        <p className="text-green-600 mt-1">1,245</p>
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-start">
                        <FaShoppingCart className="text-yellow-600 text-2xl mb-2" />
                        <h3 className="font-semibold text-yellow-800">Orders</h3>
                        <p className="text-yellow-600 mt-1">320</p>
                    </div>
                    <div className="bg-teal-100 rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-start">
                        <FaChartLine className="text-teal-600 text-2xl mb-2" />
                        <h3 className="font-semibold text-teal-800">Revenue</h3>
                        <p className="text-teal-600 mt-1">$12,430</p>
                    </div>
                </div>


                <div className="bg-green-50 rounded-lg p-4 shadow h-64 flex items-center justify-center">
                    <p className="text-green-300 italic">Analytics Chart Placeholder</p>
                </div>
            </div>


        </>
    )
}