"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  MapPin,
} from "lucide-react";

const PhotoGallery = ({
  images = [
    "/homepage/photo-gallery/photo-gallery1.webp",
    "/homepage/photo-gallery/photo-gallery2.webp",
    "/homepage/photo-gallery/photo-gallery3.webp",
    "/homepage/photo-gallery/photo-gallery4.webp",
    "/homepage/photo-gallery/photo-gallery5.webp",
    "/homepage/photo-gallery/photo-gallery6.webp",
    "/homepage/photo-gallery/photo-gallery7.webp",
  ],
  autoPlay = true,
  autoPlayDelay = 4000,
  propertyTitle = "Luxury Modern Villa",
  location = "Beverly Hills, CA",
  price = "$4,750,000",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, autoPlayDelay]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <p className="text-gray-400 text-lg">No property images available</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center p-8 lg:p-16 lg:py-28">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">
              {location}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 tracking-[0.15em]">
            {propertyTitle}
          </h1>
          <p className="text-2xl md:text-3xl text-amber-400 font-light tracking-wider">
            {price}
          </p>
        </div>

        {/* Main Gallery Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 lg:-left-20 top-1/3 transform -translate-y-1/2 z-20 bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-all duration-300 rounded-full p-4 text-white hover:scale-110 shadow-2xl border border-white/10 cursor-pointer"
            disabled={isTransitioning}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-amber-400" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 lg:-right-20 top-1/3 cursor-pointer transform -translate-y-1/2 z-20 bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-all duration-300 rounded-full p-4 text-white hover:scale-110 shadow-2xl border border-white/10"
            disabled={isTransitioning}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-amber-400" />
          </button>

          {/* Main Image Container */}
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <div className="relative h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
              {/* Image Slider */}
              <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 relative"
                  >
                    <img
                      src={image}
                      alt={`${propertyTitle} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      onLoad={() => setImageLoaded(true)}
                    />
                    {/* Elegant gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>

              {/* Top Controls */}
              <div className="absolute top-6 right-6 flex gap-3 z-10">
                <button
                  onClick={toggleAutoPlay}
                  className="bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-all duration-200 rounded-full p-3 text-white border border-white/10"
                  aria-label={
                    isAutoPlaying ? "Pause slideshow" : "Play slideshow"
                  }
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
                <button className="bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-all duration-200 rounded-full p-3 text-white border border-white/10">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <p className="text-lg font-light">
                      {currentIndex + 1} / {images.length}
                    </p>
                  </div>
                  <div className="text-right text-white">
                    <p className="text-sm opacity-80">
                      Premium Property Gallery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black/50 via-black/30 to-black/50">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-500 ease-out shadow-lg"
                style={{
                  width: `${((currentIndex + 1) / images.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "border-amber-400 shadow-lg transform scale-110"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Clients Section */}
          <div className="mt-28">
            <div className="flex justify-center items-center">
              <div className="px-8 md:px-12 lg:px-20 flex items-center justify-center border-r-2 border-white">
                <img
                  src="/homepage/clients/client1.webp"
                  alt="Client 1"
                  className="h-12 md:h-32 w-auto object-contain"
                />
              </div>
              <div className="px-8 md:px-12 lg:px-20 flex items-center justify-center border-r-2 border-white">
                <img
                  src="/homepage/clients/client2.webp"
                  alt="Client 2"
                  className="h-12 md:h-32 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <div className="px-8 md:px-12 lg:px-20 flex items-center justify-center border-r-2 border-white">
                <img
                  src="/homepage/clients/client3.webp"
                  alt="Client 3"
                  className="h-12 md:h-32 w-auto object-contain rounded-lg"
                />
              </div>
              <div className="px-8 md:px-12 lg:px-20 flex items-center justify-center">
                <img
                  src="/homepage/clients/client4.webp"
                  alt="Client 4"
                  className="h-12 md:h-32 w-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
