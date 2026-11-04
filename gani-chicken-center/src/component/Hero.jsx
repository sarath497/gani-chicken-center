
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
import mobileImage from "../assets/mobile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[720px] sm:min-h-[650px] lg:min-h-[540px] flex items-center overflow-hidden bg-[#1c0c06]"
    >

      {/* DESKTOP BACKGROUND IMAGE */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={heroImage}
          alt="Fresh chicken meat"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
      </div>

      {/* MOBILE BACKGROUND IMAGE */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={mobileImage}
          alt="Fresh chicken background"
          className="w-full h-full object-cover object-center"
        />

        {/* Mobile overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/35" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14 py-14 sm:py-16 lg:py-20">

        <div className="max-w-2xl text-white">

          {/* TAGLINE */}
          <p className="text-[10px] sm:text-sm md:text-base tracking-[2px] sm:tracking-[3px] font-semibold text-gray-100 mb-5">
            FRESH <span className="text-red-500 px-1">|</span>
            HYGIENIC <span className="text-red-500 px-1">|</span>
            DAILY SUPPLY
          </p>

          {/* MAIN HEADING */}
          <h1 className="font-extrabold leading-[0.95] mb-6">

            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              Gani
            </span>

            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600 mt-2">
              CHICKEN CENTER
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-xl md:text-2xl text-white font-semibold max-w-lg leading-snug mb-8">
            Fresh & Healthy Chicken for a 
            <br className="hidden sm:block" />
            Better Tomorrow
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-6 sm:gap-8 mb-9">

            {/* FRESH CHICKEN */}
            <div className="flex items-center gap-3">
              <Leaf
                size={35}
                strokeWidth={1.5}
                className="shrink-0"
              />

              <span className="text-xs sm:text-base font-semibold">
                100%
                <br />
                Fresh Chicken
              </span>
            </div>

            {/* HYGIENIC */}
            <div className="flex items-center gap-3">
              <ShieldCheck
                size={38}
                strokeWidth={1.5}
                className="shrink-0"
              />

              <span className="text-xs sm:text-base font-semibold">
                Hygienic
                <br />
                Processing
              </span>
            </div>

            {/* DAILY SUPPLY */}
            <div className="flex items-center gap-3">
              <Truck
                size={38}
                strokeWidth={1.5}
                className="shrink-0"
              />

              <span className="text-xs sm:text-base font-semibold">
                Daily
                <br />
                Supply
              </span>
            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* ORDER NOW */}
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <ShoppingCart size={23} />
              Order Now
              <ArrowRight size={22} />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919491864370"
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

      {/* FRESH CHICKEN BADGE - DESKTOP */}
      <div className="hidden md:flex absolute top-10 right-8 lg:right-16 z-10 bg-red-600 text-white w-32 h-32 lg:w-40 lg:h-40 rounded-full rotate-12 items-center justify-center text-center shadow-xl border-4 border-red-500">

        <p className="font-extrabold text-xl lg:text-2xl italic leading-tight">
          Fresh
          <br />
          Chicken
          <br />
          <span className="text-yellow-300">
            Always!
          </span>
        </p>

      </div>

    </section>
  );
};

export default Hero;
