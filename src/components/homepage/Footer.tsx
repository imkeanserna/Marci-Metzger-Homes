import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24 font-sans h-screen">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 text-center">
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-light tracking-widest uppercase">
              THE RIDGE REALTY GROUP
            </h3>
            <div className="space-y-4 text-gray-300 font-light leading-relaxed">
              <p className="italic text-base">Premier Real Estate Agent</p>
              <p className="text-sm leading-relaxed">
                in Pahrump, Nevada, and surrounding areas
              </p>
              <div className="space-y-2 text-sm">
                <p>Marci Metzger | Realtor for Nearly 3 Decades</p>
                <p>Licensed Real Estate Professional</p>
              </div>
            </div>
          </div>

          {/* Middle Column - Location & Map */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-light tracking-wide uppercase">
              Location
            </h3>
            <div className="space-y-4">
              {/* Map Placeholder */}
              <div className="border border-gray-700 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.4746469603194!2d-116.01548292424536!3d36.20887280287885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8fcbf3b9f3c73%3A0x9e713649ed05f1c3!2s3190%20NV-160%20%23F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sus!4v1691912945682!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <button className="text-gray-300 hover:text-white text-sm font-light italic underline transition-colors duration-300">
                Get Directions
              </button>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-6 text-center">
            <h3 className="text-white text-lg font-light tracking-widest uppercase">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="text-gray-300 font-light">
                <p className="text-sm underline italic font-normal hover:text-white transition-colors duration-300 cursor-pointer">
                  (206) 919-6886
                </p>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <p>3190 HW-160, Suite F</p>
                <p>Pahrump, Nevada 89048, USA</p>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <h4 className="text-white font-light">Office Hours</h4>
                <p>Open daily: 8:00 am - 7:00 pm</p>
                <p className="text-xs text-gray-400 italic">
                  Appointments outside office hours available upon request. Just
                  call!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Logo & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Logo & Social Media */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <img
                src="/homepage/hero-section/logo-white.webp"
                alt="The Ridge Realty Group Logo"
                className="h-16 w-auto"
              />
              <div className="text-center lg:text-left">
                <p className="text-white text-sm font-light tracking-wider">
                  THE RIDGE
                </p>
                <div className="w-16 h-px bg-white mt-1 mb-1"></div>
                <p className="text-white text-sm font-light tracking-wider">
                  REALTY GROUP
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                >
                  <Facebook size={16} />
                </a>

                <a
                  href="https://instagram.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                >
                  <Instagram size={16} />
                </a>

                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Copyright & Additional Info */}
            <div className="text-center lg:text-right space-y-2">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} The Ridge Realty Group. All rights
                reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Marci Metzger - Licensed Real Estate Professional
              </p>
              <p className="text-gray-500 text-xs">
                Serving Pahrump, Nevada and surrounding communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
