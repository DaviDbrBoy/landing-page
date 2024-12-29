import Image from "next/image";
import { ReactNode } from "react";

interface ContentsProps {
    icon: ReactNode
    title: string
    desc: string
}

export function Contents({icon, title, desc}: ContentsProps) {
    return(
        <div className="w-96 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-brand-100 rounded-[28px] border-brand-50 border-8 flex items-center justify-center text-brand-600">
                {icon}
            </div>

            <h1 className="text-gray-900 text-xl font-medium pt-5 pb-2">{title}</h1>
            <p className="text-gray-600 text-base">{desc}</p>
        </div>
    )
}