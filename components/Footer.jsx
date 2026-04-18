const Footer = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 bg-[#131313] px-5 py-8 sm:flex-row sm:items-center sm:px-10">
      <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
        Get in touch
      </span>
      <div className="flex flex-wrap items-center gap-2.5">
        <a
          href="https://www.linkedin.com/in/atharva-gourshete-b2a66927b/"
          className="text-sm text-white border-b border-white/15 pb-px hover:border-white/40 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AtharvaGGourshete"
          className="text-sm text-white border-b border-white/15 pb-px hover:border-white/40 transition-colors"
        >
          Github
        </a>

        <a
          href="https://x.com/Atharvag_17"
          className="text-sm text-white border-b border-white/15 pb-px hover:border-white/40 transition-colors"
        >
          X
        </a>
      </div>
    </div>
  );
};

export default Footer;
