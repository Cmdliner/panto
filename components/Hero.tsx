export default function Hero() {
    return (
        <section className="flex flex-col items-center gap-[2rem]">
            <h1 className="text-[5rem] text-white text-center font-bold">
                <span className="block text-nowrap">Make Your Interior More</span>
                <span className="block text-nowrap">Minimalistic & Modern</span>
            </h1>

            <p className="text-white text-center text-2xl ">
                <span className="block text-nowrap">Turn your room with panto into a more minimalist</span>
                <span className="block text-nowrap">and modern with ease and speed</span>
            </p>



            <div className="relative max-w-md w-[30%]">
                <input
                    type="text"
                    placeholder="Search furniture"
                    className="w-full h-12 pl-5 pr-12 py-8 rounded-full backdrop-blur-sm text-white placeholder-gray-300 outline-none"
                />
                <button
                    className="absolute right-3 top-3.5 bg-orange-500 text-white p-2.5 rounded-full cursor-pointer hover:bg-orange-600 transition"
                    aria-label="Search"
                >
                    
                    <img src="/assets/search.png" alt="Search icon" />
                </button>
            </div>
        </section>
    );
}