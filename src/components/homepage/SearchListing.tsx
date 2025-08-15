"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  Home,
  SortAsc,
  Bed,
  Bath,
  DollarSign,
  ChevronDown,
  Filter,
  Star,
  Award,
  Users,
} from "lucide-react";

export default function SearchListing() {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    type: "",
    sortBy: "",
    bedrooms: "",
    bathrooms: "",
    minPrice: "",
    maxPrice: "",
  });

  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const handleInputChange = ({
    field,
    value,
  }: {
    field: string;
    value: string;
  }) => {
    setSearchFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    console.log("Searching with filters:", searchFilters);
  };

  const clearFilters = () => {
    setSearchFilters({
      location: "",
      type: "",
      sortBy: "",
      bedrooms: "",
      bathrooms: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-screen bg-cover bg-center bg-fixed py-8 lg:py-2"
        style={{
          backgroundImage:
            "url('/homepage/listing-search/search-listing-background.jpg')",
        }}
      >
        {/* Enhanced Dark overlay with sophisticated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>

        {/* Subtle pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 max-w-5xl">
            <div className="inline-flex items-center gap-2 text-amber-400 mb-6 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-amber-400/20">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-xs font-medium tracking-wider uppercase">
                Premium Real Estate
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-[0.1em]">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Discover Luxury
              </span>
              <br />
              <span className="text-amber-400 font-extralight">Properties</span>
            </h1>

            <p className="text-xl md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed font-light">
              Experience the finest selection of premium properties in the
              world's most prestigious locations
            </p>
          </div>

          <div className="w-full max-w-5xl bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 lg:p-8 border border-white/10">
            {/* Primary Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative group">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5 transition-all duration-300 group-focus-within:scale-110" />
                <input
                  type="text"
                  placeholder="Enter location, city, or neighborhood"
                  value={searchFilters.location}
                  onChange={(e) =>
                    handleInputChange({
                      field: "location",
                      value: e.target.value,
                    })
                  }
                  className="w-full pl-10 text-sm pr-4 py-3 text-white rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-1 focus:ring-amber-400/60 focus:border-amber-400/10 transition-all duration-300 placeholder-gray-400"
                />
              </div>

              <div className="relative group">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5 transition-all duration-300 group-focus-within:scale-110" />
                <select
                  value={searchFilters.type}
                  onChange={(e) =>
                    handleInputChange({ field: "type", value: e.target.value })
                  }
                  className="pl-10 pr-8 py-3 text-white text-sm rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-1 focus:ring-amber-400/60 focus:border-amber-400/10 transition-all duration-300 min-w-48 appearance-none cursor-pointer"
                >
                  <option value="">Property Type</option>
                  <option value="luxury-villa">Luxury Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="mansion">Mansion</option>
                  <option value="estate">Estate</option>
                  <option value="waterfront">Waterfront</option>
                  <option value="contemporary">Contemporary Home</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-4 h-4 pointer-events-none" />
              </div>

              <button
                onClick={handleSearch}
                className="relative overflow-hidden group bg-amber-500 text-white py-6 md:py-0 text-xs px-8 uppercase tracking-widest cursor-pointer flex items-center gap-3 rounded-md border border-amber-500"
              >
                <Search className="w-4 h-4 relative z-10 transform transition-transform group-hover:text-black" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  Search
                </span>
                <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              </button>
            </div>

            {/* Advanced Filters Toggle */}
            <div className="text-center mb-2">
              <button
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                className="text-amber-400 text-sm cursor-pointer hover:text-amber-300 font-medium transition-all duration-300 flex items-center gap-2 mx-auto px-4 py-2 rounded-lg hover:bg-white/5"
              >
                <Filter className="w-4 h-4" />
                {isAdvancedOpen ? "Hide" : "Show"} Advanced Filters
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    isAdvancedOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Advanced Filters */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isAdvancedOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-white/20 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Sort By */}
                  <div className="relative group">
                    <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-4 h-4 transition-all duration-300 group-focus-within:scale-110" />
                    <select
                      value={searchFilters.sortBy}
                      onChange={(e) =>
                        handleInputChange({
                          field: "sortBy",
                          value: e.target.value,
                        })
                      }
                      className="w-full text-sm pl-10 pr-8 py-3 text-white rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-1 focus:ring-amber-400/60 focus:border-amber-400/10 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Sort By</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="newest">Recently Listed</option>
                      <option value="featured">Featured Properties</option>
                      <option value="luxury">Luxury First</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-4 h-4 pointer-events-none" />
                  </div>

                  {/* Bedrooms */}
                  <div className="relative group">
                    <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-4 h-4 transition-all duration-300 group-focus-within:scale-110" />
                    <select
                      value={searchFilters.bedrooms}
                      onChange={(e) =>
                        handleInputChange({
                          field: "bedrooms",
                          value: e.target.value,
                        })
                      }
                      className="w-full text-sm pl-10 pr-8 py-3 text-white rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-1 focus:ring-amber-400/60 focus:border-amber-400/10 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Bedrooms</option>
                      <option value="3">3+ Bedrooms</option>
                      <option value="4">4+ Bedrooms</option>
                      <option value="5">5+ Bedrooms</option>
                      <option value="6">6+ Bedrooms</option>
                      <option value="7">7+ Bedrooms</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-4 h-4 pointer-events-none" />
                  </div>

                  {/* Bathrooms */}
                  <div className="relative group">
                    <Bath className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-4 h-4 transition-all duration-300 group-focus-within:scale-110" />
                    <select
                      value={searchFilters.bathrooms}
                      onChange={(e) =>
                        handleInputChange({
                          field: "bathrooms",
                          value: e.target.value,
                        })
                      }
                      className="w-full text-sm pl-10 pr-8 py-3 text-white rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-1 focus:ring-amber-400/60 focus:border-amber-400/10 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Bathrooms</option>
                      <option value="2">2+ Bathrooms</option>
                      <option value="3">3+ Bathrooms</option>
                      <option value="4">4+ Bathrooms</option>
                      <option value="5">5+ Bathrooms</option>
                      <option value="6">6+ Bathrooms</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-4 h-4 pointer-events-none" />
                  </div>

                  {/* Min Price */}
                  <div className="relative group">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-4 h-4 transition-all duration-300 group-focus-within:scale-110" />
                    <input
                      type="text"
                      placeholder="Min Price"
                      value={searchFilters.minPrice}
                      onChange={(e) =>
                        handleInputChange({
                          field: "minPrice",
                          value: e.target.value,
                        })
                      }
                      className="w-full text-sm pl-10 pr-4 py-3 text-white rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-1 focus:ring-amber-400/60 focus:border-amber-400/10 transition-all duration-300 placeholder-gray-400"
                    />
                  </div>

                  {/* Max Price */}
                  <div className="relative group">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-4 h-4 transition-all duration-300 group-focus-within:scale-110" />
                    <input
                      type="text"
                      placeholder="Max Price"
                      value={searchFilters.maxPrice}
                      onChange={(e) =>
                        handleInputChange({
                          field: "maxPrice",
                          value: e.target.value,
                        })
                      }
                      className="w-full text-sm pl-10 pr-4 py-3 text-white rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-1 focus:ring-amber-400/60 focus:border-amber-400/10 transition-all duration-300 placeholder-gray-400"
                    />
                  </div>

                  {/* Clear Filters */}
                  <div className="flex items-end">
                    <button
                      onClick={clearFilters}
                      className="w-full py-3 cursor-pointer text-sm text-amber-400 hover:text-amber-300 border border-amber-400/30 hover:border-amber-400/50 rounded-lg transition-all duration-300 font-medium hover:bg-amber-400/10"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="mt-8 w-full max-w-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-2 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-black/40 transition-all duration-300">
                <div className="flex gap-2 items-center justify-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-amber-400/20 rounded-full mb-3">
                    <Award className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="font-light text-amber-400 mb-1">$2.5B+</div>
                </div>
                <div className="text-xs text-gray-300 font-light">
                  Properties Sold
                </div>
              </div>

              <div className="text-center p-2 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-black/40 transition-all duration-300">
                <div className="flex gap-2 items-center justify-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-amber-400/20 rounded-full mb-3">
                    <Home className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="font-light text-amber-400 mb-1">1,500+</div>
                </div>
                <div className="text-xs text-gray-300 font-light">
                  Luxury Properties
                </div>
              </div>

              <div className="text-center p-2 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-black/40 transition-all duration-300">
                <div className="flex gap-2 items-center justify-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-amber-400/20 rounded-full mb-3">
                    <Users className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="font-light text-amber-400 mb-1">98%</div>
                </div>
                <div className="text-xs text-gray-300 font-light">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
