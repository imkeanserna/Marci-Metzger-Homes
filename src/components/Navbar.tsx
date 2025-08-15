"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOutsideHero, setIsOutsideHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const videoSectionHeight = window.innerHeight;

      setIsScrolled(currentScrollY > 50);
      setIsOutsideHero(currentScrollY > videoSectionHeight);

      if (currentScrollY >= videoSectionHeight - 100) {
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const linkClasses = `relative uppercase text-sm tracking-wider after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0 ${
    isOutsideHero ? "text-black after:bg-black" : "text-white after:bg-white"
  }`;

  return (
    <nav
      className={`fixed top-0 px-12 left-0 w-full z-50 transition-all duration-300 ${
        isOutsideHero
          ? "bg-white shadow-lg text-black"
          : isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg text-white"
            : "bg-transparent py-4 text-white"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center justify-between px-6">
        {/* Left side links */}
        <div className="flex items-center gap-10">
          <a href="#" className={linkClasses}>
            Our Properties
          </a>
          <a href="#" className={linkClasses}>
            Meet the Team
          </a>
        </div>

        {/* Center logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src={
              isOutsideHero
                ? "/homepage/hero-section/logo-black.webp"
                : "/homepage/hero-section/logo-white.webp"
            }
            alt="Logo"
            className={`object-contain transition-all duration-300 ${
              isScrolled ? "w-[180px] h-[90px]" : "w-[250px] h-[150px]"
            }`}
          />
        </a>

        {/* Right side */}
        <div className="flex items-center gap-10">
          <a href="#" className={linkClasses}>
            Contact Us
          </a>
          <span
            className={`text-sm tracking-wide ${isOutsideHero ? "text-black" : "text-white"}`}
          >
            (206) 919-6886
          </span>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu
              className={`w-6 h-6 ${isOutsideHero ? "text-black" : "text-white"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`${isOutsideHero ? "bg-white text-black" : "bg-black bg-opacity-90 text-white"} p-4 md:hidden`}
        >
          <a href="#" className="block py-2">
            Our Properties
          </a>
          <a href="#" className="block py-2">
            Meet the Team
          </a>
          <a href="#" className="block py-2">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
