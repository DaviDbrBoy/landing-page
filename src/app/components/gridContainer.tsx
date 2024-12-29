import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerProps {
    children: ReactNode
    className?: string
}

export function GridContainer({children, className}: GridContainerProps) {
    return(
        <div className={twMerge("w-full mx-auto max-w-7xl px-4", className)}>
            {children}
        </div>
    )
}