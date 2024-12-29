import Link from "next/link";
import { GridContainer } from "../gridContainer";

import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import Image from "next/image";

export default function SectionHero() {
    return (
        <section>
            <GridContainer className="flex flex-col text-center items-center">
                <div className="flex flex-col items-center mx-auto mt-24 mb-12">
                    <div className="flex items-center gap-2 rounded-2xl bg-brand-50 px-4 py-1.5">
                        <button className="bg-white h-6 w-24 rounded-2xl text-brand-700 text-sm font-medium border border-brand-200">
                            New feature
                        </button>
                        <Link
                            href="#"
                            className="flex items-center gap-1 text-brand-700 text-sm font-medium"
                        >
                            Check out the team dashboard
                            <FiArrowRight size={16} />
                        </Link>
                    </div>
                    <h1 className="text-gray-900 text-4xl font-semibold xl:text-7xl mt-4 mb-6">Beautiful analytics to grow smarter</h1>
                    <p className="text-gray-600 xl:text-xl text-lg max-w-3xl">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                </div>

                <div className="xl:flex gap-3 mb-16">
                    <button className="flex justify-center items-center gap-3 h-14 w-36 bg-white rounded-lg  border border-gray-300 text-gray-700 font-semibold text-lg">
                        <FiPlayCircle size={24}/>
                        Demo
                    </button>
                    <button className="h-14 w-32 bg-brand-600 rounded-lg text-white font-semibold text-lg">Sign up</button>
                </div>

                <Image 
                    src='macbook.svg'
                    alt="macbook"
                    width={1280}
                    height={480}
                    className="border-b border-gray-200"
                />
            </GridContainer>
        </section>
    )
}
