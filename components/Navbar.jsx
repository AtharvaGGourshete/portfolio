const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
];

const Navbar = () => {
  return (
    <nav className="p-3 sticky top-0 z-10 bg-[#0f0f0f]">
      <div className="mx-40 flex items-center justify-between">
        <a href="#home" className="text-2xl">
          AG<span className="text-5xl text-yellow-500">.</span>
        </a>

        <div className="flex gap-3 text-md">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="cursor-pointer hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
