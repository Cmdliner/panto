import { BestSellingProducts } from "@/lib/constants";
import ProductCard from "./ProductCard";

export default function BestSelling() {
    return (
        <section className="min-h-screen bg-[#f7f7f7] p-16 flex flex-col gap-12">
            <h1 className="text-center text-[42px] font-bold">Best Selling Product</h1>


            <div className="flex justify-between items-center bg-[#eee] md:w-[27%] p-2 rounded-full m-auto">
                <div className="cursor-pointer p-2.5 px-4.5 rounded-full hover:bg-[#fff]">Chair</div>
                <div className="cursor-pointer p-2.5 px-4.5 rounded-full hover:bg-[#fff]">Beds</div>
                <div className="cursor-pointer p-2.5 px-4.5 rounded-full hover:bg-[#fff]">Sofa</div>
                <div className="cursor-pointer p-2.5 px-4.5 rounded-full hover:bg-[#fff]">Lamp</div>
            </div>

            <div className="flex justify-between items-baseline flex-wrap">
                { BestSellingProducts.map( (prod, id) => (
                <ProductCard key={id} name={prod.name} kind={prod.kind} price={prod.price.toString()} rating={prod.rating} img_url={prod.img_url}  />
            ))}
            </div>
            <div className="text-center text-[#e58411] hover:cursor-pointer">View All ----&gt; </div>
        </section>
    );
}