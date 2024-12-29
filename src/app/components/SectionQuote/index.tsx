import Image from "next/image";
import { GridContainer } from "../gridContainer";

export default function SectionQuote() {
    return (
        <section className="bg-gray-50">
            <GridContainer className="flex flex-col items-center text-center py-24">
                <Image
                    src='company.svg'
                    alt="company logo"
                    width={140}
                    height={40}
                />
                <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight py-8">We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h1>
                <div className="flex flex-col items-center pt-4 pb-1">
                    <Image
                        src='avatar_company.svg'
                        alt="company avatar"
                        width={64}
                        height={64}
                    />
                    <h2 className="text-gray-900 text-lg font-medium">Candice Wu</h2>
                    <p className="text-gray-600 text-base">Product Manager, Sisyphus</p>
                </div>
            </GridContainer>
        </section>
    )
}