import Footer from "../components/footer";

export default function CartPage() {
    return (
        <>
            <div className="min-h-screen bg-green-200 lg:pt-19 flex">
                <div className="min-h-screen w-[70%] h-full flex flex-col justify-center items-center border-4 border-black m-5 bg-white">
                    <h1 className="text-2xl font-bold">Cart Page</h1>
                </div>

                <div className="w-[30%] min-h-screen h-full flex flex-col justify-center items-center border-4 border-black m-5 bg-white">

                </div>


            </div>

            <div className="mt-auto ">
                <Footer />
            </div>

        </>
    )
}