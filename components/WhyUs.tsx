import { reasons } from "@/lib/constants";
import ReasonColumn from "./ReasonColumn";

export default function WhyUs() {
    return (
        <section className="min-h-screen px-16 bg-[#f5f5f5] pb-[5rem] flex items-end space-around">
            <div className="text-[#1E1E1E] text-3xl font-bold w-[20%] grow-2 shrink-1">
                <h1>Why</h1>
                <h1>Choosing Us</h1>
            </div>
            {reasons.map(reason => (
                <ReasonColumn key={reason.title} title={reason.title} body={reason.body} />
            ))}
        </section>
    );
}