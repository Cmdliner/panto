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
        <section className="min-h-screen p-12">
            <h1 className="uppercase text-[#e58411] text-center">Testimonials</h1>
            <h2 className="font-bold text-[#1E1E1E] text-center text-5xl">Our Clients Reviews</h2>

            <div className="flex">
                {testimonialLists}
            </div>
        </section>
    );
}