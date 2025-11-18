import Navbar from "./components/moleclues/navigation/Navbar";
import Hero from "./components/templates/Hero";
import Bikes from "./components/templates/Bikes";
import Points from "./components/templates/Points";
import Sponsers from "./components/templates/Sponsers";
import Contact from "./components/templates/Contact";
// import Motivate from "./components/templates/Motivate";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <div className="bg-hero-custom">
          <Bikes />
          <Points />
        </div>
        <Sponsers />
        <Contact />
        {/* <Motivate/> */}
      </main>
    </>
  );
}
