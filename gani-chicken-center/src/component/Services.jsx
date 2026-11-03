
import React from "react";
import { Bird, ShieldCheck, Leaf, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Farm Fresh",
      subtitle: "Chicken",
      icon: Bird,
    },
    {
      id: 2,
      title: "Hygienic &",
      subtitle: "Clean Processing",
      icon: ShieldCheck,
    },
    {
      id: 3,
      title: "No Added",
      subtitle: "Preservatives",
      icon: Leaf,
    },
    {
      id: 4,
      title: "Daily Fresh",
      subtitle: "Supply in Parvathipuram",
      icon: Truck,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#850909] via-[#a20d0d] to-[#850909] border-y-2 border-red-900">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 py-5 sm:py-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`
                  flex flex-col items-center justify-center text-center
                  gap-2 px-2 sm:px-4
                  ${index < 2 ? "border-b border-white/30 pb-5 mb-5 lg:border-b-0 lg:pb-0 lg:mb-0" : ""}
                  ${index % 2 === 0 && index !== 0 ? "border-r border-white/30" : ""}
                  ${index % 2 === 0 && index === 0 ? "border-r border-white/30" : ""}
                  ${index === 2 || index === 3 ? "lg:border-t-0" : ""}
                  ${index !== 3 ? "lg:border-r lg:border-white/30" : "lg:border-r-0"}
                `}
              >

                {/* Icon */}
                <Icon
                  size={42}
                  strokeWidth={1.5}
                  className="text-white sm:w-11 sm:h-11"
                />

                {/* Service Text */}
                <div className="text-white leading-tight">
                  <p className="text-sm sm:text-base font-semibold">
                    {service.title}
                  </p>

                  <p className="text-sm sm:text-base font-semibold">
                    {service.subtitle}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Services;
