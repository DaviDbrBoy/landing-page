import Image from "next/image";
import { GridContainer } from "../gridContainer";
import { FiMail, FiZap, FiBarChart } from "react-icons/fi";
import { Items } from "./items";


const items = [
    {
        'title': "Share team inboxes",
        'desc': 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
        'icon': <FiMail />
    },
    {
        'title': "Deliver instant answers",
        'desc': 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
        'icon': <FiZap />
    },
    {
        'title': "Manage your team with reports",
        'desc': 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
        'icon': <FiBarChart />
    },
]

export function SectionFeaturesTwo() {
    return(
        <section className="py-24 ">
            <GridContainer className="flex flex-col items-center text-center">
                <div className="w-20 h-7 bg-brand-50 rounded-2xl flex items-center justify-center">
                    <p className="text-brand-700 text-sm font-medium">Features</p>
                </div>

                <h1 className="text-3xl md:text-4xl md:leading-11 font-semibold text-gray-900 pt-4 pb-5">Cutting-edge features for advanced analytics</h1>
                <p className="text-gray-600 text-xl pb-16">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            
                <Image
                    src='cellphone&macbook.svg'
                    alt="company"
                    width={1216}
                    height={719}
                />

                <div className="flex justify-between">
                    {items.map((content) => (
                        <Items key={content.title} {...content} />
                    ))}
                </div>
            </GridContainer>
        </section>
    )
}