
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const whatsappNumber = "919491864370";

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Products", href: "#products", id: "products" },
    { name: "Location", href: "#location", id: "location" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Handle navigation click
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  // Update active tab while scrolling
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Active link styling
  const getLinkClass = (sectionId, mobile = false) => {
    const isActive = activeSection === sectionId;

    if (mobile) {
      return `px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
        isActive
          ? "bg-red-50 text-red-600"
          : "text-gray-800 hover:bg-gray-100 hover:text-red-600"
      }`;
    }

    return `relative py-2 font-semibold text-base transition-all duration-300 ${
      isActive
        ? "text-red-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-red-600"
        : "text-gray-800 hover:text-red-600"
    }`;
  };

  // WhatsApp SVG
  const WhatsAppIcon = ({ size = 25 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 11.5a8.1 8.1 0 0 1-12 7.1L4 20l1.4-3.8A8.1 8.1 0 1 1 20 11.5Z" />
      <path d="M9 8.5c.3-.5.7-.5 1-.1l1 1.4c.2.3.1.6-.1.8l-.5.6c.6 1.2 1.5 2.1 2.7 2.7l.6-.5c.2-.2.5-.3.8-.1l1.4 1c.4.3.4.7-.1 1-1 .7-2.2.6-3.7-.2-1.5-.8-2.8-2.1-3.6-3.6-.8-1.5-.9-2.7-.2-3.7Z" />
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fffdf8] border-b border-gray-200 shadow-sm">

      <div className="max-w-[1500px] mx-auto px-5 md:px-8 lg:px-12">

        <div className="flex items-center justify-between min-h-[85px] lg:min-h-[105px]">

          {/* LOGO */}
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 sm:gap-3 shrink-0"
          >
            <img
              src={logo}
              alt="Gani Chicken Center Logo"
              className="w-16 sm:w-20 md:w-24 object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic text-red-600">
                Gani
              </h1>

              <h2 className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide text-black">
                CHICKEN CENTER
              </h2>

              <p className="text-[9px] sm:text-[10px] tracking-[3px] text-gray-600">
                PARVATHIPURAM
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-10">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                aria-current={
                  activeSection === link.id ? "page" : undefined
                }
                className={getLinkClass(link.id)}
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* DESKTOP WHATSAPP BUTTON */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-5 xl:px-6 py-3 xl:py-4 rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-1"
          >
            <WhatsAppIcon size={27} />
            <span>Order on WhatsApp</span>
          </a>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
          >

            {menuOpen ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}

          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-[450px] opacity-100 pb-5"
              : "max-h-0 opacity-0"
          }`}
        >

          <nav className="flex flex-col gap-1 border-t border-gray-200 pt-3">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                aria-current={
                  activeSection === link.id ? "page" : undefined
                }
                className={getLinkClass(link.id, true)}
              >
                {link.name}
              </a>
            ))}

            {/* MOBILE WHATSAPP BUTTON */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3.5 rounded-xl mt-3 transition-all duration-300"
            >
              <WhatsAppIcon size={24} />
              Order on WhatsApp
            </a>

          </nav>

        </div>

      </div>
    </header>
  );
};

export default NavBar;
