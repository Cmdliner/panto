import { BestSellingProducts } from "@/lib/constants";
import ProductCard from "./ProductCard";

export default function BestSelling() {
    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-8">Best Selling Product</h1>

                <div className="flex justify-center items-center bg-gray-100 rounded-full p-1 max-w-md mx-auto mb-12">
                    <div className="cursor-pointer py-2 px-6 rounded-full bg-white text-gray-800 font-medium shadow-sm">Chair</div>
                    <div className="cursor-pointer py-2 px-6 rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all">Beds</div>
                    <div className="cursor-pointer py-2 px-6 rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all">Sofa</div>
                    <div className="cursor-pointer py-2 px-6 rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all">Lamp</div>
                </div>

                <div className="relative">
                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
                        {BestSellingProducts.map((prod, id) => (
                            <ProductCard 
                                key={id} 
                                name={prod.name} 
                                kind={prod.kind} 
                                price={prod.price.toString()} 
                                rating={prod.rating} 
                                img_url={prod.img_url}  
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors flex items-center justify-center mx-auto">
                        View All 
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}