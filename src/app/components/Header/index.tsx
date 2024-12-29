import { GridContainer } from "@/app/components/gridContainer";
import { ItemsHeader } from "./itemsHeader";

import Image from "next/image";

const items = [
    {
        title: "Home",
        href: "#home",
        isChevron: false
    },
    {
        title: "Products",
        href: "#Products",
        isChevron: true
    },
    {
        title: "Resources",
        href: "#Resources",
        isChevron: true
    },
    {
        title: "Pricing",
        href: "#Pricing",
        isChevron: false
    },
]

export default function Header() {
    return (
        <header className="flex h-20 items-center border-b border-gray-200">
            <GridContainer className="flex justify-between">
                <div className="flex items-center">
                    <Image 
                        src='logo.svg'
                        alt="Logo"
                        width={139}
                        height={32}
                    />

                    <div className="hidden xl:flex text-lg font-semibold text-gray-600">
                        {
                            items.map((item) => (
                                <ItemsHeader key={item.title} {...item} />
                            ))
                        }
                    </div>
                </div>

                <Image 
                    src="avatar.svg"
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="hidden xl:block"
                />

                <Image
                    src='hug.svg'
                    width={40}
                    height={40}
                    alt="hamburger"
                />
            </GridContainer>
        </header>
    );
}