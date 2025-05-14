import Image from "next/image";

export default function Materials() {
    return (
        <section className="md:min-h-screen flex flex-col md:flex-row">
            <div className="flex-1/2 p-8 md:pl-20 m-auto">
                <h2 className="uppercase text-[#e58411] tracking-[.2rem] text-xl font-semibold">materials</h2>

                <h3 className="text-[2.7rem] text-[#1E1E1E] font-bold ">
                    <span className="block leading-12">Very Serious </span>
                    <span className="block leading-12">Materials For Making</span>
                    <span className="block leading-12">Furniture</span>

                </h3>

                <p className=" leading-9 text-lg">
                    Because panto was very serious about designing furniture for our
                    <br />
                    environment, using a very expensive and famous capital but at a
                    <br />
                    relatively low price
                </p>
            </div>

            <div className="grid grid-cols-2 flex-1/2">
                <figure>
                    <Image src="/assets/materials_1.png" alt="" width={400} height={400} />
                </figure>

                <figure className="">
                    <Image src="/assets/materials_left.png" alt="" width={400} height={400} />
                </figure>

                <figure className="hidden lg:block">
                    <Image src="/assets/materials_lg.png" alt="" width={400} height={400} />
                </figure>
            </div>
        </section>
    );
}