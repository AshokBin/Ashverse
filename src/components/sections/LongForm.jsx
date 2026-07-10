import { useState } from "react";
import { longFormVideos } from "../../data/videos";
import SectionTitle from "../ui/SectionTitle";
import VideoCarousel from "../ui/VideoCarousel";

export default function LongForm() {
  const hasClientProjects = longFormVideos.client.length > 0;

  const [activeTab, setActiveTab] = useState(
    hasClientProjects ? "client" : "internship",
  );

  return (
    <section className="py-24 overflow-hidden bg-brand-dark" id="long-form">
      <SectionTitle title="Long Form" />

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
            disabled={!hasClientProjects}
            onClick={() => setActiveTab("client")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === "client"
                ? "bg-brand-orange text-black font-semibold"
                : "text-white"
            } ${
              hasClientProjects
                ? "hover:bg-white/10"
                : "opacity-40 cursor-not-allowed"
            }`}
          >
            Client Projects
          </button>
        </div>
      </div>

      <VideoCarousel
        key={activeTab}
        videos={longFormVideos[activeTab]}
        aspectRatio="landscape"
      />
    </section>
  );
}
