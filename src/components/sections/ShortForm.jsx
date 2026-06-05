import { shortFormVideos } from "../../data/videos";
import SectionTitle from "../ui/SectionTitle";
import VideoCarousel from "../ui/VideoCarousel";

export default function ShortForm() {
  return (
    <section className="py-24 overflow-hidden bg-brand-black" id="short-form">
      <SectionTitle title="Short Form" />
      <VideoCarousel videos={shortFormVideos} aspectRatio="portrait" />
    </section>
  );
}
