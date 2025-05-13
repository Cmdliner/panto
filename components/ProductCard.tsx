import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export default function ProductCard({ name, img_url, kind, rating, price }: { name: string, kind: string, img_url: string, rating: number, price: string }) {
    return (
        <div className={`${inter.variable} antialiased rounded-t-3xl shadow-sm mt-24 min-h-[350px]`}>
            <figure className="border border-[#f7f7f7]  px-8 min-h-[250px] rounded-t-3xl">
                <Image src={img_url} alt={name} width="241" height="290" className="container relative top-[-50]" />
                <figcaption className="sr-only">{name}</figcaption>
            </figure>
            <div className="px-8 relative bottom-0 bg-[#fff] flex flex-col gap-8 py-4">
                <div>
                    <p className="text-[#8D8D8D]">{kind}</p>
                    <p className="text-[#0D1B39] font-semibold">{name}</p>
                    <p>{"⭐".repeat(rating)}</p>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-3xl text-[#0d1b39] font-semibold"><sup>$</sup>{price}</p>
                    <div className="flex justify-center items-center bg-[#0d1b39] hover:bg-[#0d1b39e8] w-2 h-2 rounded-full cursor-pointer font-light text-white text-6xl p-6">
                        +
                    </div>
                </div>
            </div>
        </div>
    );
}