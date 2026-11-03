
import React from "react";

const ShopLocation = () => {
  const whatsappNumber = "919491864370";
  const phoneNumber = "+91 9491864370";

  const mapQuery = encodeURIComponent(
    "QCCF+G4F, Main Rd, Parvatipuram, Andhra Pradesh 535501, India"
  );

  const directionsURL = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Gani Chicken Center! I would like to place an order."
  )}`;

  return (
    <section
      id="location"
      className="w-full bg-[#fffdf9] py-12 sm:py-14 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">

          {/* LEFT SECTION - ADDRESS */}
          <div className="flex flex-col justify-center">

            <p className="text-red-600 text-xs sm:text-sm font-bold tracking-[3px] mb-2">
              OUR LOCATION
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Visit Our Shop in
              <br />
              Parvathipuram
            </h2>

            <div className="flex items-start gap-3 mb-6">

              {/* MAP PIN SVG */}
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="#dc2626"
                className="shrink-0 mt-1"
              >
                <path
                  d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>

              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  Gani Chicken Center
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Main Road, Parvathipuram,
                  <br />
                  Parvathipuram Manyam District,
                  <br />
                  Andhra Pradesh - 535501
                </p>
              </div>

            </div>

            {/* DIRECTIONS BUTTON */}
            <a
              href={directionsURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl w-fit transition-all duration-300 shadow-sm"
            >

              {/* NAVIGATION SVG */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 11 18-8-8 18-2-8-8-2Z" />
                <path d="m11 13 10-10" />
              </svg>

              Get Directions
            </a>

          </div>

          {/* CENTER SECTION - GOOGLE MAP */}
          <div className="w-full h-[280px] sm:h-[340px] lg:h-full min-h-[280px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">

            <iframe
              title="Gani Chicken Center Map"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

          {/* RIGHT SECTION - QUICK ORDER */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-7 flex flex-col justify-center">

            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-600 text-center mb-1">
              Quick Order
            </h2>

            <p className="text-gray-800 text-sm sm:text-base text-center mb-5">
              Order now on WhatsApp for fresh chicken
            </p>

            {/* WHATSAPP BUTTON */}
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold text-base sm:text-lg py-3.5 rounded-xl transition-all duration-300 shadow-sm mb-6"
            >

              {/* WHATSAPP SVG */}
              <svg
                width="26"
                height="26"
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

              Order on WhatsApp
            </a>

            {/* SHOP TIMINGS */}
            <div className="flex items-start gap-4 mb-4">

              {/* CLOCK SVG */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 mt-1"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>

              <div>
                <h3 className="font-bold text-gray-900">
                  Shop Timings
                </h3>

                <p className="text-gray-700 text-sm sm:text-base">
                  6:00 AM - 9:00 PM
                </p>
              </div>

            </div>

            {/* CONTACT NUMBER */}
            <a
              href="tel:+919491864370"
              className="flex items-start gap-4 mb-4 hover:text-red-600 transition-colors"
            >

              {/* PHONE SVG */}
              <svg
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 mt-1"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
              </svg>

              <div>
                <h3 className="font-bold text-gray-900">
                  Call Us
                </h3>

                <p className="text-gray-700 text-sm sm:text-base">
                  {phoneNumber}
                </p>
              </div>

            </a>

            {/* HOME DELIVERY */}
            <div className="flex items-start gap-4">

              {/* DELIVERY TRUCK SVG */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#dc2626"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 mt-1"
              >
                <path d="M10 17h4V5H2v12h3" />
                <path d="M14 9h5l3 4v4h-2" />
                <circle cx="7.5" cy="17.5" r="2.5" />
                <circle cx="16.5" cy="17.5" r="2.5" />
              </svg>

              <div>
                <h3 className="font-bold text-gray-900">
                  Home Delivery
                </h3>

                <p className="text-gray-700 text-sm sm:text-base">
                  Available in Parvathipuram
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ShopLocation;
