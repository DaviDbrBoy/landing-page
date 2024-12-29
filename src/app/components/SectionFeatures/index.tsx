import { GridContainer } from "../gridContainer";
import { Contents } from "./contents";
import { FiMail, FiZap, FiBarChart, FiSmile, FiCommand, FiMessageCircle } from "react-icons/fi";

const contents = [
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
    {
        'title': 'Connect with customers',
        'desc': 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
        'icon': <FiSmile />
    },
    {
        'title': 'Connect the tools you already use',
        'desc': 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
        'icon': <FiCommand />
    },
    {
        'title': 'Our people make the difference',
        'desc': 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
        'icon': <FiMessageCircle />
    },
]

export default function SectionFeatures() {
    return(
        <section>
            <GridContainer>
                <div className="pt-24 text-center">
                    <p className="text-brand-700 font-semibold text-base">Features</p>
                    <h1 className="text-gray-900 font-semibold text-5xl mt-3 mb-5">Analytics that feels like it’s from the future</h1>
                    <h3 className="text-xl text-gray-600">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</h3>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-y-16">
                    {contents.map((content) => (
                        <Contents key={content.title} {...content} />
                    ))}
                </div>
            </GridContainer>
        </section>
    )
}