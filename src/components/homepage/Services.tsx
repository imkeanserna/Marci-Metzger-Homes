import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Real Estate Done Right",
      description:
        "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      image: "/homepage/services/service1.webp",
      features: [
        "Buying & Selling",
        "Investment Properties",
        "Market Analysis",
      ],
    },
    {
      id: 2,
      title: "Commercial & Residential",
      description:
        "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
      image: "/homepage/services/service2.webp",
      features: ["All Property Types", "Fixer-Uppers", "Luxury Homes"],
    },
    {
      id: 3,
      title: "Rely on Expertise",
      description:
        "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
      image: "/homepage/services/service3.webp",
      features: ["Credit Guidance", "Loan Options", "Expert Network"],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-32 font-sans">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase font-light mb-8 tracking-[0.1em]">
            <span className="bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent">
              Our Premium
            </span>
            <br />
            <span className="text-black font-extralight">Services</span>
          </h1>
          <p className="text-gray-600 font-light max-w-2xl mx-auto tracking-wide">
            Comprehensive real estate solutions tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative cursor-pointer bg-white border border-gray-200 hover:border-black transition-all duration-700 overflow-hidden shadow-lg hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                {/* Service Number */}
                <div className="absolute top-6 right-6 w-16 h-16 border-2 border-white flex items-center justify-center text-2xl font-light text-white tracking-wider">
                  {String(service.id).padStart(2, "0")}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-light text-white mb-2 tracking-wide group-hover:text-gray-200 transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <p className="text-gray-700 text-sm italic leading-relaxed font-serif tracking-wide">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex text-sm items-center text-gray-600 font-light"
                    >
                      <div className="w-1 h-1 bg-black mr-4"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="relative overflow-hidden group/btn bg-transparent border border-gray-300 text-black text-xs py-4 px-8 uppercase tracking-widest cursor-pointer inline-flex items-center gap-4 hover:border-black transition-colors duration-500">
                    <span className="relative z-10 font-light transition-colors duration-500 group-hover/btn:text-white">
                      Learn More
                    </span>
                    <ArrowRight
                      size={16}
                      className="relative z-10 transform transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:text-white"
                    />
                    <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-32">
          <div className="bg-white border border-gray-200 p-16 space-y-8 shadow-lg">
            <h2 className="text-4xl md:text-6xl font-light tracking-[0.05em]">
              <span className="bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent">
                Ready to Begin Your
              </span>
              <br />
              <span className="text-black font-extralight">Journey?</span>
            </h2>

            <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Let's discuss your real estate goals and create a personalized
              strategy that works for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="relative overflow-hidden group bg-black border border-black text-white text-xs py-5 px-8 uppercase tracking-widest cursor-pointer inline-flex items-center gap-4 transition-colors duration-500">
                <span className="relative z-10 font-light transition-colors duration-500 group-hover:text-black">
                  Schedule Consultation
                </span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-black"
                />
                <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              </button>

              <button className="relative overflow-hidden group bg-transparent border border-black text-black text-xs py-5 px-8 uppercase tracking-widest cursor-pointer inline-flex items-center gap-4 transition-colors duration-500">
                <span className="relative z-10 font-light transition-colors duration-500 group-hover:text-white">
                  Call Now: 206-919-6886
                </span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-white"
                />
                <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
