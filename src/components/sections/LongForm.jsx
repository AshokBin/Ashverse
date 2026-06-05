import { longFormVideos } from "../../data/videos";
import SectionTitle from "../ui/SectionTitle";
import VideoCarousel from "../ui/VideoCarousel";

export default function LongForm() {
  return (
    <section className="py-24 overflow-hidden bg-brand-dark" id="long-form">
      <SectionTitle title="Long Form" />
      <VideoCarousel videos={longFormVideos} aspectRatio="landscape" />
    </section>
  );
}
