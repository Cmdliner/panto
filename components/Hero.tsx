export default function Hero() {
    return (
        <section className="flex flex-col items-center pt-30">
            <h1 className="text-2xl md:text-[5rem] text-white text-center font-bold">
                <span className="block text-nowrap">Make Your Interior More</span>
                <span className="block text-nowrap">Minimalistic & Modern</span>
            </h1>

            <p className="text-white text-center text-lg md:text-2xl ">
                <span className="block md:text-nowrap">Turn your room with panto into a more minimalist</span>
                <span className="block md:text-nowrap">and modern with ease and speed</span>
            </p>



            <div className="max-w-md w-[90%] md:w-[27%] rounded-full backdrop-blur-sm mt-12 p-1 px-4 border border-white text-xl flex items-center ">
                <input
                    type="text"
                    placeholder="Search furniture"
                    className="w-full h-12 rounded-full text-white placeholder-gray-300 outline-none"
                />
                <button
                    className="bg-[#e58411] text-white p-2.5 rounded-full cursor-pointer hover:bg-orange-600 transition"
                    aria-label="Search"
                >
                    
                    <img src="/assets/search.png" alt="Search icon" />
                </button>
            </div>
        </section>
    );
}