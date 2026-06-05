import { profile } from "../../data/profile";

export default function Marquee() {
  return (
    <div className="w-full bg-brand-dark border-y border-white/5 py-6 overflow-hidden flex flex-nowrap">
      {/* We map twice [1, 2] to create two identical scrolling tracks side-by-side */}
      {[1, 2].map((group) => (
        <div
          key={group}
          className="animate-marquee flex items-center min-w-full shrink-0 justify-around"
        >
          {profile.skills.map((skill, index) => (
            <div
              key={`${group}-${index}`}
              className="flex items-center mx-4 md:mx-8"
            >
              <span className="text-3xl md:text-5xl font-black text-brand-gray/30 uppercase tracking-wider">
                {skill}
              </span>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-brand-orange rounded-full ml-8 md:ml-16" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
