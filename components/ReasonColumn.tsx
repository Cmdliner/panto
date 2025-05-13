import Link from "next/link";

export default function ReasonColumn({title, body}: {title: string, body: string}) {
    return (
        <div className="text-[#1e1e1e] p-2 flex flex-col items-start gap-4 w-full md:w-[20%] grow-1 shrink-1">
            <h1 className="font-bold">{title}</h1>
            <p>{body}</p>
            <Link href="#" className="text-[#e58411]">More Info  -- </Link>
        </div>
    );
}