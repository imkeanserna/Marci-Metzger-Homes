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
    <>
      <nav
        className={`fixed top-0 px-4 md:px-12 left-0 w-full z-50 transition-all duration-300 ${
          isOutsideHero
            ? "bg-white shadow-lg text-black py-2 md:py-3"
            : isScrolled
              ? "bg-black/90 backdrop-blur-md shadow-lg text-white py-2 md:py-3"
              : "bg-transparent py-4 text-white"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          className={`flex items-center justify-between px-2 md:px-6 relative ${isScrolled ? "py-0 md:py-4" : "py-2 md:py-12"}`}
        >
          {/* Left side links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className={linkClasses}>
              Our Properties
            </a>
            <a href="#" className={linkClasses}>
              Meet the Team
            </a>
          </div>

          {/* Mobile: Logo on left, Desktop: Center logo */}
          <a
            href="/"
            className="flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
          >
            <img
              src={
                isOutsideHero
                  ? "/homepage/hero-section/logo-black.webp"
                  : "/homepage/hero-section/logo-white.webp"
              }
              alt="Logo"
              className={`object-contain transition-all duration-300 ${
                isScrolled
                  ? "w-[120px] h-[60px] md:w-[180px] md:h-[90px]"
                  : "w-[160px] h-[80px] md:w-[250px] md:h-[150px]"
              }`}
            />
          </a>

          {/* Right side - Contact and phone hidden on mobile */}
          <div className="flex items-center gap-4 md:gap-10">
            {/* Contact link - Hidden on mobile */}
            <a href="#" className={`hidden md:block ${linkClasses}`}>
              Contact Us
            </a>
            {/* Phone number - Hidden on mobile */}
            <span
              className={`hidden md:block text-sm tracking-wide ${isOutsideHero ? "text-black" : "text-white"}`}
            >
              (206) 919-6886
            </span>
            {/* Hamburger menu - Always visible */}
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu
                className={`w-6 h-6 cursor-pointer ${isOutsideHero ? "text-black" : "text-white"}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Side Menu - Responsive width */}
      <div
        className={`fixed top-0 right-0 h-screen transform transition-all duration-500 ease-in-out z-50 flex flex-col justify-between ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } ${
          isOutsideHero
            ? "bg-white text-black shadow-2xl"
            : "bg-black text-white shadow-2xl"
        } w-full sm:w-80 md:w-1/4`}
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
          backgroundColor: isOutsideHero ? "#ffffff" : "#000000",
        }}
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className={`p-2 rounded-full cursor-pointer transition-colors duration-200 ${
              isOutsideHero
                ? "hover:bg-gray-100 text-black"
                : "hover:bg-white/10 text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="px-8 md:px-16 py-4 flex-1 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src={
                  isOutsideHero
                    ? "/homepage/hero-section/logo-black.webp"
                    : "/homepage/hero-section/logo-white.webp"
                }
                alt="Logo"
                className="w-32 h-16 object-contain"
              />
            </div>

            {/* Navigation Links */}
            <div className="space-y-6 text-center">
              <a
                href="#"
                className={`block uppercase text-sm font-light tracking-wider py-3 px-4 transition-all duration-300 transform hover:scale-105 border-b ${
                  isOutsideHero
                    ? "hover:bg-gray-50 text-black border-black/20"
                    : "hover:bg-white/10 text-white border-white/20"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className={`block uppercase text-sm font-light tracking-wider py-3 px-4 transition-all duration-300 transform hover:scale-105 border-b ${
                  isOutsideHero
                    ? "hover:bg-gray-50 text-black border-black/20"
                    : "hover:bg-white/10 text-white border-white/20"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Listings
              </a>
              <a
                href="#"
                className={`block uppercase text-sm font-light tracking-wider py-3 px-4 transition-all duration-300 transform hover:scale-105 border-b ${
                  isOutsideHero
                    ? "hover:bg-gray-50 text-black border-black/20"
                    : "hover:bg-white/10 text-white border-white/20"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Our Properties
              </a>
              <a
                href="#"
                className={`block uppercase text-sm font-light tracking-wider py-3 px-4 transition-all duration-300 transform hover:scale-105 border-b ${
                  isOutsideHero
                    ? "hover:bg-gray-50 text-black border-black/20"
                    : "hover:bg-white/10 text-white border-white/20"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Meet the Team
              </a>
              <a
                href="#"
                className={`block uppercase text-sm font-light tracking-wider py-3 px-4 transition-all duration-300 transform hover:scale-105 border-b ${
                  isOutsideHero
                    ? "hover:bg-gray-50 text-black border-black/20"
                    : "hover:bg-white/10 text-white border-white/20"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Let's Move
              </a>
              <a
                href="#"
                className={`block uppercase text-sm font-light tracking-wider py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isOutsideHero
                    ? "hover:bg-gray-50 text-black"
                    : "hover:bg-white/10 text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
            </div>
          </div>

          {/* Contact Info + CTA Button */}
          <div className="pt-8 mt-8">
            <div className="space-y-3 flex flex-row justify-between items-center">
              <p className="text-sm opacity-70">
                Marci Metzger
                <br />
                The Ridge Realty Group
              </p>

              <div className="mt-0">
                <h3 className="text-sm font-light uppercase tracking-wider opacity-70">
                  Contact
                </h3>
                <a
                  href="tel:206-919-6886"
                  className={`block text-sm font-medium transition-colors duration-200 ${
                    isOutsideHero
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  (206) 919-6886
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                className={`relative w-full overflow-hidden group text-xs py-5 px-8 uppercase tracking-widest cursor-pointer rounded-md text-center border ${
                  isOutsideHero
                    ? "border-black bg-black text-white"
                    : "border-white bg-black text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  Get Started
                </span>
                <span
                  className={`absolute inset-0 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 ${
                    isOutsideHero ? "bg-white" : "bg-white"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
