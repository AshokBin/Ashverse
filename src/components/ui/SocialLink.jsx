export default function SocialLink({ platform, url, icon: Icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between px-6 py-4 bg-brand-dark rounded-full border border-white/5 hover:border-brand-orange/50 hover:bg-brand-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,107,61,0.2)]"
    >
      <span className="text-white font-medium group-hover:text-brand-orange transition-colors">
        {platform}
      </span>
      <Icon className="w-5 h-5 text-brand-gray group-hover:text-brand-orange transition-colors" />
    </a>
  );
}
