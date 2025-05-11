import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="text-white flex justify-between items-end">
            <div className="brand-name  text-2xl">Panto</div>

            <nav className="flex items-center">
                <ul className="flex gap-12 text-xl">
                    <li><Link href="#" className="hover:underline">Furniture</Link></li>
                    <li><Link href="#" className="hover:underline">Shop</Link></li>
                    <li><Link href="#" className="hover:underline">About Us</Link></li>
                    <li><Link href="#" className="hover:underline">Contact</Link></li>

                </ul>
            </nav>

            <figure className="w-10 h-10 relative hover:cursor-pointer">
                <Image className="container" src="/assets/bag.png" alt="Bag" width={34} height={34} />
                <div className="bg-[#E58411] h-[1.5rem] w-[1.2rem] text-center rounded-2xl absolute top-2 right-0">0</div>
            </figure>
        </header>
    );
}