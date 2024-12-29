import { Footer } from "./components/Footer";
import Header from "./components/Header"
import SectionFeatures from "./components/SectionFeatures";
import { SectionFeaturesTwo } from "./components/SectionFeaturesTwo";
import SectionHero from "./components/SectionHero"
import SectionMetrics from "./components/SectionMetrics";
import SectionQuote from "./components/SectionQuote";
import SectionSocial from "./components/SectionSocial"

export default function Home() {
  return (
    <>
      <Header/>
      <SectionHero/>
      <SectionSocial/>
      <SectionFeatures/>
      <SectionQuote/>
      <SectionFeaturesTwo/>
      <SectionMetrics/>
      <Footer/>
    </>
  );
}
