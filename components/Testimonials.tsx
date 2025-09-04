import { testimonials } from "@/lib/constants";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    const testimonialLists = testimonials.map((t, index) => (
        <TestimonialCard 
        key={index} name={t.name} 
        bg_img={t.bg_img} img_url={t.img_url} 
        review={t.review} company_name={t.company_name} />
    ))
    
    return (
        <section className="min-h-screen py-16 px-8 bg-gray-50">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="uppercase text-[#e58411] text-sm font-medium tracking-wider mb-2">Testimonials</h1>
                <h2 className="font-bold text-[#1E1E1E] text-4xl md:text-5xl">Our Client Reviews</h2>
            </div>

            {/* Testimonials Container */}
            <div className="relative max-w-7xl mx-auto">
                {/* Navigation Arrows */}
                <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Testimonials Scroll Container */}
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-6 px-16 py-8">
                        {testimonialLists}
                    </div>
                </div>
            </div>
        </section>
    );
}