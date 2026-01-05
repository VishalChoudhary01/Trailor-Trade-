import Navbar from "./components/moleclues/navigation/Navbar";
import Hero from "./components/templates/Hero";
import Bikes from "./components/templates/Bikes";
import Points from "./components/templates/Points";
import Sponsers from "./components/templates/Sponsers";
import Contact from "./components/templates/Contact";
import MotorcycleMosaic from "./components/organism/MotorcycleMosaic";
import TechnologyShowcase from "./components/templates/TechnologyShowcase"; 
import Footer from "./components/moleclues/Footer";
import FAQAccordion from "./components/organism/FAQAccordion";
import StoriesCarousel from "./components/organism/StoriesCarousel";
import TabbedContentSection from "./components/organism/TabbedContentSection";
import DealershipSection from "./components/organism/DealershipSection";


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="w-full overflow-hidden"> 
        <Hero />
        <div className="bg-hero-custom">
          <Bikes />
          <Points />
        </div>
        <Sponsers />
        <Contact />
        <TechnologyShowcase />
         <TabbedContentSection />
         <DealershipSection />
         {/* <StoriesCarousel />
         <FAQAccordion />  */}
      </main>
    </>
  );
}
