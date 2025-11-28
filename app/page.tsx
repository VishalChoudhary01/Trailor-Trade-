import Navbar from "./components/moleclues/navigation/Navbar";
import Hero from "./components/templates/Hero";
import Bikes from "./components/templates/Bikes";
import Points from "./components/templates/Points";
import Sponsers from "./components/templates/Sponsers";
import Contact from "./components/templates/Contact";
import MotorcycleMosaic from "./components/templates/MotorcycleMosaic"; 
import Footer from "./components/moleclues/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden"> 
        <Hero />
        <div className="bg-hero-custom">
          <Bikes />
          <Points />
        </div>
        <Sponsers />
        <Contact />
        <MotorcycleMosaic/>
      </main>
    </>
  );
}
