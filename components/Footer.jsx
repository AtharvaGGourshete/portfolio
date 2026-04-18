const Footer = () => {
  return (
    <div className="bg-[#131313] px-10 py-8 flex items-center justify-between">
      <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
        Get in touch
      </span>
      <div className="flex items-center gap-2.5">
        <a
          href="mailto:atharvagourshete.work.official@gmail.com"
          className="text-sm text-white border-b border-white/15 pb-px hover:border-white/40 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:atharvagourshete.work.official@gmail.com"
          className="text-sm text-white border-b border-white/15 pb-px hover:border-white/40 transition-colors"
        >
          Github
        </a>

        <a
          href="mailto:atharvagourshete.work.official@gmail.com"
          className="text-sm text-white border-b border-white/15 pb-px hover:border-white/40 transition-colors"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
