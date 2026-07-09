"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["#about", "About"],
  ["#experience", "Experience"],
  ["#projects", "Work"],
  ["#skills", "Skills"],
  ["#contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#eadcc8]/95 backdrop-blur-xl border-b border-[#2f261f]/10"
          : ""
      }`}
    >
      <div className="page-shell h-[68px] flex items-center justify-between">
        <a
          href="#top"
          className="font-semibold tracking-[-.03em]"
          onClick={() => setOpen(false)}
        >
          Vansh Bhatia
          <span className="text-[#a95532]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link, index) => (
            <a
              key={link[0]}
              href={link[0]}
              className="text-xs text-[#665b51] hover:text-[#a95532] transition-colors"
            >
              <span className="text-[#a95532] mr-1">
                0{index + 1}
              </span>
              {link[1]}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {open && (
        <div className="fixed inset-x-0 top-[68px] h-[calc(100dvh-68px)] bg-[#eadcc8] md:hidden">
          <div className="page-shell pt-8">
            {links.map((link, index) => (
              <a
                key={link[0]}
                href={link[0]}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-5 border-b border-[#2f261f]/15 text-2xl tracking-[-0.03em]"
              >
                <span>{link[1]}</span>

                <span className="text-sm text-[#a95532]">
                  0{index + 1}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}