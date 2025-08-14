import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";

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
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Recent Properties
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Property {item}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    123 Desert View Lane, Pahrump, NV
                  </p>
                  <p className="text-2xl font-bold text-black">
                    ${(250000 + item * 50000).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
