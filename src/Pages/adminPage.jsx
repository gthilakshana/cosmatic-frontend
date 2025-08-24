export default function AdminPage() {
    return (
        <>
            <div className="w-full h-full bg-amber-300 flex p-2">
                <div className="w-[300px] h-full bg-amber-400 rounded-[10px]">

                </div>
                <div className="w-[calc(100%-300px)] h-full bg-red-500 rounded-[10px]">
                    <Routes path='/'>
                        <Route path='/' element={<h1>Dashboard</h1>} />
                        <Route path='/products' element={<h1>Products</h1>} />
                        <Route path='/orders' element={<h1>Orders</h1>} />
                        <Route path='/setting' element={<h1>Setting</h1>} />

                    </Routes>
                </div>
            </div>
        </>
    )
}   