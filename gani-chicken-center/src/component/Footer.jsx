
import React from "react";

const Footer = () => {
  const whatsappNumber = "919491864370";
  const phoneNumber = "+919491864370";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#160b07] text-white overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#210d08] via-[#160b07] to-[#0e0805] opacity-95" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14 py-8">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-7 lg:gap-10">

          {/* BRAND LOGO */}
          <div className="text-center lg:text-left shrink-0">

            <h2 className="text-4xl sm:text-5xl font-extrabold italic text-red-600 leading-none">
              Gani
            </h2>

            <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide text-white mt-1">
              CHICKEN CENTER
            </h3>

            <p className="text-[10px] sm:text-xs tracking-[5px] text-gray-300 mt-1">
              PARVATHIPURAM
            </p>

          </div>

          {/* VERTICAL DIVIDER */}
          <div className="hidden lg:block w-[2px] h-16 bg-gray-400/50" />

          {/* CENTER CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 flex-1">

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-4 text-sm sm:text-base font-medium text-gray-200">
              <span>Fresh Chicken</span>
              <span className="text-red-500">|</span>
              <span>Better Taste</span>
              <span className="text-red-500">|</span>
              <span>Healthier Life</span>
            </div>

            {/* COPYRIGHT */}
            <p className="text-xs sm:text-sm text-gray-400">
              © {currentYear} Gani Chicken Center, Parvathipuram.
              All rights reserved.
            </p>

          </div>

          {/* SOCIAL MEDIA LINKS */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-all duration-300 hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 11.5a8.1 8.1 0 0 1-12 7.1L4 20l1.4-3.8A8.1 8.1 0 1 1 20 11.5Z" />
                <path d="M9 8.5c.3-.5.7-.5 1-.1l1 1.4c.2.3.1.6-.1.8l-.5.6c.6 1.2 1.5 2.1 2.7 2.7l.6-.5c.2-.2.5-.3.8-.1l1.4 1c.4.3.4.7-.1 1-1 .7-2.2.6-3.7-.2-1.5-.8-2.8-2.1-3.6-3.6-.8-1.5-.9-2.7-.2-3.7Z" />
              </svg>
            </a>

            {/* PHONE */}
            <a
              href={`tel:${phoneNumber}`}
              aria-label="Call Gani Chicken Center"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" width="23" height="23" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
              </svg>
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
