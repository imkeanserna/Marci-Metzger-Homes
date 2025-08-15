import GetItSoldPage from "@/components/homepage/GetItSoldPage";
import PhotoGallery from "@/components/homepage/PhotoGallery";
import SearchListing from "@/components/homepage/SearchListing";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-sans">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="/homepage/hero-section/background-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay to darken video if needed */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex flex-col gap-8 flex-1 items-center justify-center text-white space-y-16 mt-28">
            <div className="space-y-12">
              <h1 className="text-8xl subtitle">Pahrump Realtor</h1>
              <p className="text-sm font-medium max-w-2xl text-center tracking-wider">
                Marci Metzger - The Ridge Realty Group
              </p>
            </div>
            <button className="relative overflow-hidden group bg-black text-white text-xs py-5 px-8 uppercase tracking-widest cursor-pointer flex items-center gap-6 rounded-md border border-black">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Call Now
              </span>
              <ArrowRight
                size={16}
                className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-black"
              />
              <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
            </button>
          </main>
        </div>
      </div>
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          {/* Image */}
          <div className="h-full overflow-hidden">
            <Image
              src="/homepage/hero-section/marci_metzger.webp"
              alt="Marci Metzger"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="text-black space-y-8 p-24 flex flex-col justify-center">
            <div>
              <h1 className="text-8xl subtitle">Marci Metzger</h1>
              <p className="text-lg font-bold mt-2 subtitle ms-2">
                REALTOR FOR NEARLY 3 DECADES!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">In Her Words</h3>
              <p className="italic">
                "I love that small-town feeling that our community offers.
                Spectacular golf courses, parks, pool, and easy access to Las
                Vegas make Pahrump a great place to call home. Working or
                retired, fast-paced or looking to relax... there's a place for
                you here! I enjoy living in the Mountain Falls community and
                will strive to find you a home that will suit you just as this
                community does me."
              </p>
            </div>

            {/* Call Now Button */}
            <div className="flex justify-center">
              <button className="relative overflow-hidden group bg-black text-white text-xs py-5 px-8 uppercase tracking-widest cursor-pointer inline-flex items-center gap-4 rounded-md border border-black">
                {/* Text & Number */}
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-black">
                  <span className="font-semibold text-sm">Call Now</span>
                  <span className="font-light">206-919-6886</span>
                </span>

                {/* Arrow */}
                <ArrowRight
                  size={16}
                  className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-black"
                />

                {/* Hover overlay */}
                <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <GetItSoldPage />
      <PhotoGallery />
      <SearchListing />
    </div>
  );
}
