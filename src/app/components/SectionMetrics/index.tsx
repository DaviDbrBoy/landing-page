import Image from "next/image";
import { GridContainer } from "../gridContainer";
import Items from "./items";


export default function SectionMetrics() {
    return(
        <section className="py-24">
            <GridContainer>
                <p className="text-brand-700 text-base font-semibold">Launch faster</p>
                <h1 className="text-3xl md:text-4xl md:leading-11 font-semibold text-gray-900 pt-3 pb-5">Build something great</h1>
                <p className="text-gray-600 text-xl max-w-3xl">We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster.</p>

                <div className="flex items-center pt-16">
                    <div className="grid grid-cols-2">
                        <Items h1="4,000+" h3="Global customers" p="We’ve helped over 4,000 amazing global companies."/>
                        <Items h1="600%" h3="Return on investment" p="Our customers have reported an average of ~600% ROI."/>
                        <Items h1="10k" h3="Global downloads" p="Our app has been downloaded over 10k times."/>
                        <Items h1="200+" h3="5-star reviews" p="We’re proud of our 5-star rating with over 200 reviews."/>
                    </div>
                    <Image 
                        src='ambient.svg'
                        alt="ambient"
                        width={560}
                        height={560}
                    />
                </div>
            </GridContainer>
        </section>
    )
}