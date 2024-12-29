import Link from "next/link";
import { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

interface ItemsProps {
    icon: ReactNode
    title: string
    desc: string
}

export function Items({icon, title, desc}: ItemsProps) {
    return(
        <div className="w-96 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-brand-100 rounded-[28px] border-brand-50 border-8 flex items-center justify-center text-brand-600">
                {icon}
            </div>

            <h1 className="text-gray-900 text-xl font-medium pt-5 pb-2">{title}</h1>
            <p className="text-gray-600 text-base">{desc}</p>

            <Link href='#' className="text-brand-700 text-base font-semibold pt-5 flex gap-x-2 items-center">Learn more <FiArrowRight size={20}/></Link>
        </div>
    )
}