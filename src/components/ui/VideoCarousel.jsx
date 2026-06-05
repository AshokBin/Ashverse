import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YouTube from "react-youtube";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";

export default function VideoCarousel({ videos, aspectRatio = "portrait" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const isPortrait = aspectRatio === "portrait";
  const total = videos.length;

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  const getCardState = (index) => {
    let relative = (index - selectedIndex + total) % total;

    if (relative > total / 2) {
      relative -= total;
    }

    const configs = {
      0: {
        x: 0,
        scale: 1,
        opacity: 1,
        brightness: 1,
        z: 50,
      },

      1: {
        x: 240,
        scale: 0.82,
        opacity: 0.7,
        brightness: 0.45,
        z: 30,
      },

      "-1": {
        x: -240,
        scale: 0.82,
        opacity: 0.7,
        brightness: 0.45,
        z: 30,
      },

      2: {
        x: 420,
        scale: 0.65,
        opacity: 0.25,
        brightness: 0.2,
        z: 10,
      },

      "-2": {
        x: -420,
        scale: 0.65,
        opacity: 0.25,
        brightness: 0.2,
        z: 10,
      },
    };

    return (
      configs[relative] || {
        x: relative > 0 ? 600 : -600,
        scale: 0.5,
        opacity: 0,
        brightness: 0,
        z: 0,
      }
    );
  };

  return (
    <div className="relative w-full py-4 overflow-hidden">
      {/* Hidden Embla Track */}
      <div ref={emblaRef} className="absolute opacity-0 pointer-events-none">
        <div className="flex">
          {videos.map((video) => (
            <div key={video.id} className="flex-[0_0_100%]" />
          ))}
        </div>
      </div>

      {/* Visible Stage */}
      <div
        className={cn(
          "relative mx-auto",
          isPortrait ? "h-[760px]" : "h-[280px] sm:h-[400px] md:h-[520px] ",
        )}
      >
        {videos.map((video, index) => {
          const card = getCardState(index);
          const isActive = index === selectedIndex;

          return (
            <div
              key={video.id}
              onClick={() => !isActive && emblaApi?.scrollTo(index)}
              className="absolute left-1/2 top-1/2 cursor-pointer"
              style={{
                zIndex: card.z,
                opacity: card.opacity,
                transform: `
                  translate(-50%, -50%)
                  translateX(${card.x}px)
                  scale(${card.scale})
                `,
                transition: "all 650ms cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <div className="relative">
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl bg-black",
                    isPortrait
                      ? "w-[340px] aspect-[9/16]"
                      : "w-[75vw] sm:w-[600px] md:w-[720px] aspect-video",
                  )}
                  style={{
                    filter: `brightness(${card.brightness})`,
                    transition: "all 650ms ease",
                    boxShadow: isActive
                      ? `
                        0 0 0 2px rgba(59,130,246,.4),
                        0 0 60px rgba(59,130,246,.25),
                        0 30px 60px rgba(0,0,0,.5)
                      `
                      : "0 10px 40px rgba(0,0,0,.45)",
                  }}
                >
                  {/* {isActive && (
                    <div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        backgroundImage: `
                          linear-gradient(
                            rgba(59,130,246,.08) 1px,
                            transparent 1px
                          ),
                          linear-gradient(
                            90deg,
                            rgba(59,130,246,.08) 1px,
                            transparent 1px
                          )
                        `,
                        backgroundSize: "24px 24px",
                      }}
                    />
                  )} */}

                  <div className="absolute inset-0">
                    <YouTube
                      videoId={video.youtubeId}
                      opts={opts}
                      className="absolute inset-0 w-full h-full"
                      iframeClassName="w-full h-full"
                    />
                  </div>

                  {video.title && (
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
                      <h3 className="text-white text-center text-xl font-bold">
                        {video.title}
                      </h3>
                    </div>
                  )}
                </div>

                {isActive && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollPrev();
                      }}
                      className="absolute top-1/2 -left-6 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-brand-orange text-black flex items-center justify-center"
                    >
                      <ArrowLeft size={22} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollNext();
                      }}
                      className="absolute top-1/2 -right-6 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-brand-orange text-black flex items-center justify-center"
                    >
                      <ArrowRight size={22} />
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
