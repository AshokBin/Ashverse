import { useState } from "react";
import { shortFormVideos } from "../../data/videos";
import SectionTitle from "../ui/SectionTitle";
import VideoCarousel from "../ui/VideoCarousel";

export default function ShortForm() {
  const [activeTab, setActiveTab] = useState("client");

  return (
    <section className="py-24 overflow-hidden bg-brand-black" id="short-form">
      <SectionTitle title="Short Form" />

      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
          <button
            onClick={() => setActiveTab("internship")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === "internship"
                ? "bg-brand-orange text-black font-semibold"
                : "text-white hover:bg-white/10"
            }`}
          >
            Internship Projects
          </button>

          <button
            onClick={() => setActiveTab("client")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === "client"
                ? "bg-brand-orange text-black font-semibold"
                : "text-white hover:bg-white/10"
            }`}
          >
            Client Projects
          </button>
        </div>
      </div>

      <VideoCarousel
        key={activeTab}
        videos={shortFormVideos[activeTab]}
        aspectRatio="portrait"
      />
    </section>
  );
}
