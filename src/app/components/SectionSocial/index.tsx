import { GridContainer } from "../gridContainer";
import { Socials } from "./socials";

export default function SectionSocial() {
    return(
        <section className="py-24">
            <GridContainer className="flex flex-col items-center">
                <p className="text-gray-600 font-medium mb-8">Join 4,000+ companies already growing</p>

                <div>
                    <Socials/>
                </div>
            </GridContainer>
        </section>
    )
}