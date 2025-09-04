import Image from "next/image";

export default function ProductCard({ name, img_url, kind, rating, price }: { name: string, kind: string, img_url: string, rating: number, price: string }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="bg-gray-50 p-8 flex justify-center items-center min-h-[200px]">
                <Image 
                    src={img_url} 
                    alt={name} 
                    width={200} 
                    height={200} 
                    className="object-contain max-h-[180px] w-auto"
                />
            </div>
            
            <div className="p-6">
                <div className="mb-4">
                    <p className="text-gray-500 text-sm mb-1">{kind}</p>
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">{name}</h3>
                    <div className="flex mb-3">
                        {[...Array(rating)].map((_, i) => (
                            <span key={i} className="text-orange-400 text-sm">★</span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-gray-800">
                        <span className="text-lg align-super">$</span>{price}
                    </p>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200">
                        <span className="text-xl font-light">+</span>
                    </button>
                </div>
            </div>
        </div>
    );
}