import { Testimonial } from "..";

export default function TestimonialCard({ name, company_name, bg_img, img_url, review }: Testimonial) {
    return (
        <div className={`relative bg-no-repeat bg-cover bg-center min-h-[420px] w-[320px] rounded-2xl overflow-hidden flex-shrink-0 mx-3 shadow-lg`} 
             style={{ backgroundImage: `url('${bg_img}')` }}>
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                {/* Profile section at bottom */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-black">
                    <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center shadow-md">
                            {/* Using first letter of name as placeholder since img_url is empty */}
                            <span className="text-white font-bold text-lg">{name.charAt(0)}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">{name}</h3>
                            <p className="text-sm text-gray-600">{company_name}</p>
                        </div>
                    </div>

                    {/* Review text */}
                    <div className="mb-3">
                        <p className="text-sm leading-relaxed text-gray-700">"{review}"</p>
                    </div>

                    {/* Star rating */}
                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-orange-400 text-lg">★</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}