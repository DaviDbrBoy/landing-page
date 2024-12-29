import Link from "next/link";

import { FiChevronDown } from "react-icons/fi";

interface ItemsHeaderProps {
    title: string
    href: string
    isChevron?: boolean
}


export function ItemsHeader(props: ItemsHeaderProps) {
    return(
        <Link className="flex items-center gap-2 px-8" href={props.href} >{props.title} {props.isChevron && <FiChevronDown />} </Link>
    )
}