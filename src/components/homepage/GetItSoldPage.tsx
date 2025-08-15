import React from "react";
import { TrendingUp, Home, Key, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function GetItSoldPage() {
  return (
    <div className="min-h-screen bg-white relative pb-16">
      {/* Black fade at the top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
      {/* Header Section with Enhanced Typography */}
      <div className="text-center py-12 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-8xl font-light text-gray-900 tracking-[0.2em] mb-4 subtitle">
            GET IT SOLD
          </h1>
          <div className="w-32 h-px bg-black mx-auto"></div>
        </div>
      </div>

      {/* Top Residential Sales Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 md:py-20 relative">
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 w-4 h-4 bg-black rotate-45 opacity-20 animate-pulse hidden md:block"></div>
        <div className="absolute bottom-20 left-16 w-6 h-6 bg-black rounded-full opacity-10 hidden md:block"></div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image with Hover Effects */}
          <div className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 z-10"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 flex items-center justify-center">
              <div className="text-white text-center space-y-4">
                <TrendingUp size={48} className="mx-auto" />
                <p className="text-lg font-light tracking-wider">
                  PROVEN RESULTS
                </p>
              </div>
            </div>
            <Image
              src="/homepage/sold-pics/sold1.webp"
              alt="Modern kitchen interior"
              width={600}
              height={500}
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
          </div>

          {/* Enhanced Sales Stats Content */}
          <div className="space-y-8 group">
            <div className="space-y-4 relative">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide leading-tight">
                Top Residential Sales
                <span className="block text-2xl md:text-3xl mt-2 text-gray-600 group-hover:text-black transition-colors duration-500">
                  Last 5 Years
                </span>
              </h2>
              <div className="w-16 h-px bg-black group-hover:w-32 transition-all duration-500"></div>
              {/* Secondary underline */}
              <div className="w-8 h-px bg-gray-400 group-hover:w-16 group-hover:bg-black transition-all duration-700 delay-200"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              {/* Enhanced stats card with multiple hover states */}
              <div className="relative bg-gray-50 p-8 rounded-lg hover:bg-black hover:text-white transition-all duration-700 cursor-pointer group/card border border-gray-100 hover:border-black hover:shadow-2xl">
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-0 h-0 group-hover/card:w-6 group-hover/card:h-6 bg-white/20 transition-all duration-500 rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 group-hover/card:w-6 group-hover/card:h-6 bg-white/20 transition-all duration-500 rounded-tl-full"></div>

                <p className="text-xl font-light uppercase tracking-wider text-center mb-2 group-hover/card:scale-105 transition-transform duration-500">
                  90 Clients Served
                </p>
                <p className="text-lg font-light uppercase tracking-wider text-center group-hover/card:scale-105 transition-transform duration-500">
                  $28.5 Million in Sales - 2021
                </p>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 rounded-lg"></div>
              </div>

              {/* Enhanced quote section */}
              <div className="relative pl-6 border-l-2 border-gray-200 hover:border-black transition-colors duration-500">
                <p className="text-lg opacity-90 subtitle italic text-center relative">
                  <span className="absolute -left-8 -top-2 text-4xl text-gray-300 font-serif">
                    "
                  </span>
                  Our team works hard every day to grow and learn, so that we
                  may continue to excel in our market. Our clients deserve our
                  best, & we want to make sure our best is better every year.
                  <span className="absolute -bottom-6 -right-2 text-4xl text-gray-300 font-serif">
                    "
                  </span>
                </p>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <button className="relative overflow-hidden group bg-black text-white text-xs py-6 px-10 uppercase tracking-widest cursor-pointer inline-flex items-center gap-4 rounded-md border border-black hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black font-semibold">
                View Portfolio
              </span>
              <ArrowRight
                size={16}
                className="relative z-10 transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-black group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              {/* Button glow effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent blur-sm transition-opacity duration-500"></span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#141414] py-20 relative overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.8),inset_0_0_120px_rgba(0,0,0,0.6)]">
        {/* Edge fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none"></div>

        {/* Subtle background blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full opacity-[0.02] blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full opacity-[0.015] blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text section */}
            <div className="space-y-8 group">
              <div className="space-y-4 relative">
                <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide leading-tight">
                  Don't Just List it...
                  <span className="block text-3xl md:text-4xl mt-3 font-semibold text-white group-hover:text-gray-200 transition-colors duration-500 relative">
                    Get it SOLD!
                    {/* Emphasis line */}
                    <div className="absolute -bottom-2 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-700"></div>
                  </span>
                </h2>
                <div className="w-20 h-px bg-white group-hover:w-40 transition-all duration-500"></div>
                <div className="w-10 h-px bg-gray-400 group-hover:w-20 group-hover:bg-white transition-all duration-700 delay-200"></div>
              </div>

              {/* Card */}
              <div className="relative bg-white/5 p-8 text-gray-200 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-700 cursor-pointer group/card border border-white/10 hover:border-white/20 overflow-hidden">
                {/* Sliding background accent */}
                <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-white/10 to-transparent group-hover/card:w-full transition-all duration-700"></div>

                {/* Icon */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="inline-block p-3 bg-white/10 rounded-full group-hover/card:bg-white transition-all duration-500 mb-4 group-hover/card:scale-110 group-hover/card:rotate-6">
                    <Home className="w-6 h-6 text-white group-hover/card:text-black transition-colors duration-500" />
                  </div>

                  <div className="relative pl-6 border-l-2 border-white/20 group-hover:border-white transition-colors duration-500">
                    <p className="text-lg opacity-90 subtitle italic text-left relative text-white leading-relaxed">
                      <span className="absolute -left-8 -top-4 text-5xl text-white/30 font-serif">
                        "
                      </span>
                      We exhaust every avenue to ensure our listings are at the
                      fingertips of every possible buyer, getting you top dollar
                      for your home.
                      <span className="absolute -bottom-8 -right-2 text-5xl text-white/30 font-serif">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image section */}
            <div className="relative group overflow-hidden order-first md:order-last shadow-2xl hover:shadow-3xl transition-shadow duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
              <div className="absolute inset-2 border-2 border-white/0 group-hover:border-white/40 transition-colors duration-700 z-15 rounded"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 transform translate-y-4 group-hover:translate-y-0">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-light tracking-wider uppercase mb-1">
                    MAXIMUM EXPOSURE
                  </p>
                  <p className="text-sm opacity-90">
                    Every possible buyer reached
                  </p>
                  <div className="w-full h-1 bg-white/20 rounded-full mt-3">
                    <div className="h-full bg-white rounded-full w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
                  </div>
                </div>
              </div>

              <Image
                src="/homepage/sold-pics/sold2.webp"
                alt="Luxury home with pool at sunset"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out filter group-hover:brightness-110 group-hover:contrast-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guide to Buyers Section - Enhanced */}
      <section className="max-w-7xl mx-auto px-4 py-20 relative">
        {/* Decorative elements */}
        <div className="absolute top-16 left-8 w-2 h-2 bg-black/20 rounded-full animate-pulse hidden md:block"></div>
        <div className="absolute bottom-12 right-12 w-3 h-3 bg-black/10 transform rotate-45 animate-pulse delay-500 hidden md:block"></div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Enhanced House Keys Image */}
          <div className="relative group overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-700">
            {/* Complex overlay system */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/20 to-black/40 group-hover:from-black/30 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-700 z-10"></div>

            {/* Animated geometric overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-15">
              <div className="absolute top-4 left-4 w-6 h-6 border-2 border-white/30 transform rotate-45 animate-spin"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-2 border-white/30 rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced center content */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 flex items-center justify-center">
              <div className="text-white text-center space-y-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-black/60 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-500">
                  <Key
                    size={48}
                    className="mx-auto transform rotate-45 group-hover:rotate-90 transition-transform duration-500"
                  />
                </div>
                <div className="bg-black/60 backdrop-blur-sm rounded-lg px-6 py-3">
                  <p className="text-lg font-light tracking-wider uppercase">
                    YOUR KEY TO SUCCESS
                  </p>
                </div>
              </div>
            </div>

            <Image
              src="/homepage/sold-pics/sold3.webp"
              alt="House keys on wooden background"
              width={600}
              height={500}
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out filter group-hover:brightness-110 group-hover:saturate-110"
            />
          </div>

          {/* Enhanced Buyer Guide Content */}
          <div className="space-y-8 group">
            <div className="space-y-4 relative">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide group-hover:text-black transition-colors duration-500">
                Guide to Buyers
              </h2>
              <div className="w-16 h-px bg-black group-hover:w-32 transition-all duration-500"></div>
              <div className="w-8 h-px bg-gray-400 group-hover:w-16 group-hover:bg-black transition-all duration-700 delay-200"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              {/* Enhanced expertise card */}
              <div className="relative bg-gray-50 p-8 rounded-lg hover:bg-black hover:text-white transition-all duration-700 cursor-pointer group/card border border-gray-100 hover:border-black shadow-lg hover:shadow-2xl overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-white"></div>
                </div>

                {/* Corner accents with stagger animation */}
                <div className="absolute top-0 left-0 w-0 h-0 group-hover/card:w-8 group-hover/card:h-8 bg-white/20 transition-all duration-500 rounded-br-full delay-100"></div>
                <div className="absolute top-0 right-0 w-0 h-0 group-hover/card:w-6 group-hover/card:h-6 bg-white/15 transition-all duration-500 rounded-bl-full delay-200"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 group-hover/card:w-6 group-hover/card:h-6 bg-white/15 transition-all duration-500 rounded-tr-full delay-300"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 group-hover/card:w-8 group-hover/card:h-8 bg-white/20 transition-all duration-500 rounded-tl-full delay-400"></div>

                <div className="relative z-10">
                  <p className="text-xl font-light mb-3 uppercase tracking-wider text-center group-hover/card:scale-105 transition-transform duration-500">
                    Market Expertise
                  </p>

                  <div className="relative pl-6 border-l-2 border-gray-900/20 group-hover:border-white transition-colors duration-500 inline-block text-left">
                    <p className="text-lg opacity-90 subtitle italic relative group-hover/card:scale-105 transition-transform duration-500 delay-100">
                      <span className="absolute -left-8 -top-4 text-5xl font-serif">
                        "
                      </span>
                      Nobody knows the market like we do. Enjoy having a pro at
                      your service.
                      <span className="absolute -bottom-8 -right-2 text-5xl font-serif">
                        "
                      </span>
                    </p>
                  </div>
                </div>

                {/* Subtle moving gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/card:opacity-100 group-hover/card:animate-pulse transition-opacity duration-700 rounded-lg"></div>
              </div>
            </div>

            {/* Enhanced contact button */}
            <button className="relative overflow-hidden group bg-black text-white text-xs py-6 px-12 uppercase tracking-widest cursor-pointer inline-flex items-center gap-4 rounded-md border border-black shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black font-semibold">
                Start Your Journey
              </span>
              <ArrowRight
                size={16}
                className="relative z-10 transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-black group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              {/* Animated border glow */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent blur-sm transition-opacity duration-500 rounded-md"></span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
