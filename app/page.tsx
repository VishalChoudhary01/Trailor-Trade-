import Navbar from "./components/moleclues/navigation/Navbar";
import Hero from "./components/templates/Hero";
import Bikes from "./components/templates/Bikes";
import Points from "./components/templates/Points";
import Sponsers from "./components/templates/Sponsers";
import Contact from "./components/templates/Contact";
import TechnologyShowcase from "./components/templates/TechnologyShowcase"; 
import Footer from "./components/moleclues/Footer";
import FAQAccordion from "./components/organism/FAQAccordion";
import StoriesCarousel from "./components/organism/StoriesCarousel";
import TabbedContentSection from "./components/organism/TabbedContentSection";
import DealershipSection from "./components/organism/DealershipSection";
import CTASection from "./components/organism/CTASection";
import SmoothScrollProvider from "./components/providers/SmoothScrollProvider";
import MotionProvider from "./components/providers/MotionProvider";



export default function Home() {
  return (
    <SmoothScrollProvider>
      <MotionProvider>
        <Navbar />
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
           <StoriesCarousel/> 
           <FAQAccordion/>
           <CTASection/>
           <Footer/>
        </main>
      </MotionProvider>
    </SmoothScrollProvider>
  );
}
