"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type TabId = "research" | "plan" | "design";  // <-- Move this to the top

const TabbedContentSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("research");

  const tabs: { id: TabId; label: string }[] = [
    { id: "research", label: "Research" },
    { id: "plan", label: "Plan" },
    { id: "design", label: "Design" }
  ];

  const content: Record<TabId, { text: string; image: string }> = {
    research: {
      text: "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit...",
      image: "/api/placeholder/660/440",
    },
    plan: {
      text: "Strategic planning involves careful consideration of resources...",
      image: "/api/placeholder/660/440",
    },
    design: {
      text: "Our design process focuses on creating intuitive experiences...",
      image: "/api/placeholder/660/440",
    },
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              LOREM IPSUM DOLOR SIT AMET
            </h2>

            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-lg font-medium text-lg transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-gray-900 shadow-md"
                      : "bg-transparent text-gray-600 hover:bg-white/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="mb-8">
              <p className="text-gray-700 text-base leading-relaxed">
                {content[activeTab].text}
              </p>
            </div>

            <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all group text-lg">
              Check tools
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-xl">
              <img
                src={content[activeTab].image}
                alt={activeTab}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TabbedContentSection;
