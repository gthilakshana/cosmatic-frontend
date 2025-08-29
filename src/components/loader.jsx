export function Loader() {
    return (
        <div className="w-full h-full min-h-[400px] flex flex-col justify-center items-center gap-4">

            <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>


            <p className="text-sm text-gray-600 animate-pulse">
                Loading, please wait...
            </p>
        </div>
    );
}
