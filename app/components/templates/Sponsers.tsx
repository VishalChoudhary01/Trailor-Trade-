import React from "react";
import HeaderBanner from "../organism/HeaderBanner";
import Bikerain from '../../../public/images/banner/bikerain.png';
import HeaderContent from "../organism/HeaderContent";
import SponsersImages from "../organism/SponsersImages";
import Card from "../organism/Card";
import { performanceCards } from "@/app/utils/data";

const Sponsers = () => {

  return (
    <section className="py-20">
      <HeaderBanner
        heading="Unleash Your Freedom. Own the Road with Power and Precision."
        paragraph1="Whether you're chasing speed, thrill, or freedom — our machines are built to amplify your journey. Discover a range of motorcycles engineered to dominate in style."
        paragraph2="From your first ride to your thousandth, we're here for the ride. Backed by expert care, premium gear, and a tribe of passionate riders — this is more than a bike, it's a lifestyle."
        buttonText="Explore Bikes"
        showButton={true}
        backgroundImageSet={Bikerain.src}
      />
      
      <div className="px-4">
        <SponsersImages/>
      </div>
      
      <div className="md:px-16 px-3 space-y-5">
        <HeaderContent 
          primaryContent="Rider Stories, Tips & Industry News." 
          secondaryContent="UNLEASH THE ROAD WARRIOR IN YOU" 
          descript="Explore the latest from the riding community — from expert riding tips and travel stories to the newest in EV tech and performance upgrades."
        />
        
        <div className="w-full md:px-24 flex justify-center md:mt-20 mt-16 px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
            {performanceCards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsers;