import { Testimonial } from "..";

export default function TestimonialCard({ name, company_name, bg_img, img_url, review }: Testimonial) {
    return (
        <div className={`bg-no-repeat bg-cover bg-center bg-[url('/assets/testimonial_bg_1.png')] min-h-[60vh] border border-red-500  `}>
            <h2>{name}</h2>
            <h3 >{company_name}</h3>
            <p>{review}</p>

        </div>
    );
}