
import React from "react";
import {
  ShoppingCart,
  ArrowRight,
  Leaf,
  ShieldCheck,
  Truck,
  MessageCircle,
} from "lucide-react";

import heroImage from "../assets/hero_image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] lg:min-h-[540px] flex items-center overflow-hidden bg-[#1c0c06]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh chicken meat"
          className="w-full h-full object-cover object-center"
        />

        {/* Lighter overlay - keeps chicken clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14 py-16 lg:py-20">

        <div className="max-w-2xl text-white">

          {/* Tagline */}
          <p className="text-xs sm:text-sm md:text-base tracking-[3px] font-semibold text-gray-100 mb-4">
            FRESH <span className="text-red-500 px-1">|</span>
            HYGIENIC <span className="text-red-500 px-1">|</span>
            DAILY SUPPLY
          </p>

          {/* Main Heading */}
          <h1 className="font-extrabold leading-[0.95] mb-5">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              Gani
            </span>

            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600 mt-2">
              CHICKEN CENTER
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-white font-medium max-w-lg leading-snug mb-8">
            Fresh & Healthy Chicken for a
            <br className="hidden sm:block" />
            Better Tomorrow
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-5 sm:gap-8 mb-9">

            <div className="flex items-center gap-3">
              <Leaf size={35} strokeWidth={1.5} />
              <span className="text-sm sm:text-base font-medium">
                100%<br />Fresh Chicken
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck size={38} strokeWidth={1.5} />
              <span className="text-sm sm:text-base font-medium">
                Hygienic<br />Processing
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Truck size={38} strokeWidth={1.5} />
              <span className="text-sm sm:text-base font-medium">
                Daily<br />Supply
              </span>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="#products"
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <ShoppingCart size={23} />
              Order Now
              <ArrowRight size={22} />
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-white hover:bg-white hover:text-black text-white px-7 py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300"
            >
              <MessageCircle size={24} />
              Order on WhatsApp
            </a>

          </div>
        </div>
      </div>

      {/* Fresh Chicken Badge */}
      <div className="hidden md:flex absolute top-10 right-8 lg:right-16 z-10 bg-red-600 text-white w-32 h-32 lg:w-40 lg:h-40 rounded-full rotate-12 items-center justify-center text-center shadow-xl border-4 border-red-500">
        <p className="font-extrabold text-xl lg:text-2xl italic leading-tight">
          Fresh<br />
          Chicken<br />
          <span className="text-yellow-300">Always!</span>
        </p>
      </div>

    </section>
  );
};

export default Hero;
