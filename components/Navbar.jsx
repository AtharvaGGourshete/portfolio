"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-10 bg-[#0f0f0f] p-3 backdrop-blur">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl sm:text-2xl" onClick={handleNavClick}>
            AG<span className="text-4xl text-yellow-500 sm:text-5xl">.</span>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden items-center gap-x-3 gap-y-1.5 text-sm sm:text-base md:flex">
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

        {isOpen && (
          <div className="mt-3 flex flex-col rounded-lg border border-white/15 bg-white/5 p-3 text-sm md:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded px-2 py-2 hover:bg-white/10"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
