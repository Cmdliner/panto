import Image from "next/image";

export default function Experiences() {
    return (
        <section className="flex flex-col-reverse md:flex-row  min-h-screen justify-between items-center">
            <figure className="shadow-md min-w-[50%] rounded-r-3xl shadow-[#00000069]">
                <Image 
                src="/assets/experiences_img.png"
                className="container" 
                width={602} height={445} alt="" />
            </figure>

            <div className="p-12 flex flex-col gap-12">
                <h2 className=" font-semibold uppercase text-[#e58411] ">experiences</h2>

                <h3 className="text-5xl font-bold">
                    <span className="block no-wrap ">We Provide You The </span>
                    <span className="block no-wrap">Best Experience</span>
                </h3>

                <p>
                    <span className="block">You don't have to worry about the result because all of these</span>
                    <span className="block">interiors are made by people who are professionals in their fields</span>
                    <span className="block">with an elegant and lucurious style and with premium quality</span>
                    <span className="block">materials</span>
                </p>

                <p className="text-[#e58411]">More Info ----&gt;</p>
            </div>
            
        </section>
    );
}