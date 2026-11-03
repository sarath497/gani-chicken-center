
import React from "react";
import { MessageCircle } from "lucide-react";

import wholeChicken from "../assets/1.png";
import curryCut from "../assets/2.png";
import chickenBreast from "../assets/3.png";
import chickenLeg from "../assets/4.png";
import chickenWings from "../assets/5.png";
import chickenLiver from "../assets/6.png";

const Products = () => {

  const whatsappNumber = "91XXXXXXXXXX";

  const products = [
    {
      id: 1,
      name: "Whole Chicken",
      image: wholeChicken,
    },
    {
      id: 2,
      name: "Chicken Curry Cut",
      image: curryCut,
    },
    {
      id: 3,
      name: "Chicken Breast",
      image: chickenBreast,
    },
    {
      id: 4,
      name: "Chicken Leg Piece",
      image: chickenLeg,
    },
    {
      id: 5,
      name: "Chicken Wings",
      image: chickenWings,
    },
    {
      id: 6,
      name: "Chicken Liver",
      image: chickenLiver,
    },
  ];

  const handleOrder = (productName) => {
    const message = `Hi Gani Chicken Center! I would like to order ${productName}. Please share the price per kg.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="products"
      className="w-full bg-[#fffdf9] py-12 sm:py-14 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">

          <p className="text-red-600 text-xs sm:text-sm font-bold tracking-[3px] mb-2">
            OUR PRODUCTS
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222222]">
            Quality Chicken for{" "}
            <span className="text-red-600">
              Every Need
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Fresh, clean and high-quality chicken, available in
            different cuts as per your requirement.
          </p>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >

              {/* Product Image */}
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="p-2 sm:p-3 flex flex-col items-center text-center flex-1">

                <h3 className="text-xs sm:text-sm font-bold text-gray-900 min-h-[36px] flex items-center justify-center">
                  {product.name}
                </h3>

                {/* Price */}
                <p className="text-gray-700 text-sm mt-1 mb-3">
                  ₹ <span className="font-semibold">__</span> / kg
                </p>

                {/* Order Button */}
                <button
                  onClick={() => handleOrder(product.name)}
                  className="mt-auto w-full flex items-center justify-center gap-1.5 border border-green-600 text-green-700 hover:bg-green-600 hover:text-white rounded-lg py-2 px-1.5 text-[11px] sm:text-xs font-semibold transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  Add to Order
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Products;
