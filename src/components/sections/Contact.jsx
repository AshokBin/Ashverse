import { Download } from "lucide-react";
import { contactInfo } from "../../data/contact";
import { socialLinks } from "../../data/social";

export default function Contact() {
  return (
    <section className="py-32 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-[3rem] p-5 md:p-10 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />

        <h2 className="text-5xl md:text-7xl font-black mb-6 text-white relative z-10">
          Let's Create videos that get{" "}
          <span className="text-brand-orange">Results</span>
        </h2>

        <p className="text-xl text-brand-gray mb-12 relative z-10">
          Ready to Elevate Your Content?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <a
            href={`mailto:${contactInfo.email}`}
            className="px-8 py-4 w-full sm:w-auto bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:text-black hover:bg-brand-orange transition-colors text-lg"
          >
            Send an Email
          </a>

          <a
            href={contactInfo.calendlyLink}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 w-full sm:w-auto bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:border-green-600 hover:bg-green-600 hover:text-black transition-all text-lg"
          >
            DM on WhatsApp
          </a>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex justify-center gap-6 relative z-10">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-brand-gray hover:text-brand-orange transition-colors"
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>

        {/* Resume Button */}
        <div className="mt-8 flex justify-center relative z-10">
          <a
            href="/Ashok_Video Editor_Resume.pdf"
            download
            className="group inline-flex items-center justify-center gap-3
                       min-w-[220px]
                       px-10 py-4
                       rounded-full
                       bg-white/5 backdrop-blur-xl
                       border border-white/10
                       text-lg font-semibold text-white
                       shadow-lg
                       hover:border-brand-orange
                       hover:bg-white/10
                       hover:text-brand-orange
                       hover:scale-105
                       transition-all duration-300"
          >
            <Download
              size={20}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
