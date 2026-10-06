import {
  Zap,
  Box,
  Users,
  Star,
  Truck,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const AboutPages = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Box,
      value: "20K+",
      label: "Products",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Happy Customers",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Avg. Rating",
    },
    {
      icon: Truck,
      value: "99%",
      label: "On-time Delivery",
    },
  ];

  const stats2 = [
    {
      icon: ShieldCheck,
      value: "Trust",
      label:
        "Every product is verified for quality and authenticity before listing.",
    },
    {
      icon: Truck,
      value: "Speed",
      label:
        "We obsess over delivery times so your orders arrive when promised.",
    },
    {
      icon: HeartHandshake,
      value: "Community",
      label: "Built around real customer feedback, not just business metrics.",
    },
    {
      icon: Star,
      value: "Quality",
      label: "We curate the best — no filler, no junk, just great products.",
    },
  ];

  const team = [
    {
      letter: "A",
      name: "Aryan Shah",
      role: "Founder & CEO",
      color: "bg-lime-400",
      textColor: "text-black",
    },
    {
      letter: "P",
      name: "Priya Mehta",
      role: "Head of Product",
      color: "bg-blue-500",
      textColor: "text-white",
    },
    {
      letter: "R",
      name: "Rohan Verma",
      role: "Lead Engineer",
      color: "bg-purple-500",
      textColor: "text-white",
    },
    {
      letter: "S",
      name: "Sneha Kapoor",
      role: "Design Director",
      color: "bg-rose-500",
      textColor: "text-white",
    },
  ];

  return (
    <main className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 xl:px-16 py-10 font-serif">
        <section className="flex flex-col items-center text-center gap-4">
          {/* Logo */}
          <div className="w-20 h-20 bg-[#B7DF02] rounded-3xl flex items-center justify-center">
            <Zap size={38} className="text-black fill-black" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold flex flex-wrap justify-center gap-2">
            <span>About</span>
            <span className="text-[#B7DF02]">SkyMart</span>
          </h1>

          {/* Description */}
          <p className="text-[#FFFFFF66] font-medium text-base sm:text-lg leading-8 max-w-3xl">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </section>

        <section className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((val) => {
              const Icon = val.icon;

              return (
                <div
                  className="
                    h-[153px]
                    rounded-2xl
                    border border-gray-300
                    flex flex-col
                    items-center
                    justify-center
                    gap-1
                   
                  "
                >
                  <Icon size={25} className="text-[#B7DF02] mb-1" />

                  <h2 className="text-3xl font-semibold">{val.value}</h2>

                  <p className="text-gray-500 font-medium">{val.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section
          className="
            border border-gray-400
            rounded-3xl
            p-7 sm:p-10
            flex flex-col
            gap-5
          "
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Our Story</h2>

          <p className="text-[#FFFFFF66] text-sm sm:text-base leading-7">
            SkyMart started in 2022 as a small side project — two engineers
            tired of bloated, slow e-commerce experiences. We asked ourselves:
            what if shopping online was actually enjoyable?
          </p>

          <p className="text-[#FFFFFF66] text-sm sm:text-base leading-7">
            Three years later, SkyMart serves over 50,000 customers across the
            country. We stock electronics, fashion, jewelry, and everyday
            essentials — all at prices that don't require a second mortgage.
          </p>

          <p className="text-[#FFFFFF66] text-sm sm:text-base leading-7">
            We're still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase you make
            here.
          </p>
        </section>

        {/* ================= WHAT WE STAND FOR ================= */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {stats2.map((val) => {
              const Icon = val.icon;

              return (
                <div
                  className="
                    min-h-[154px]
                    rounded-2xl
                    border border-gray-300
                    px-7 py-6
                    flex items-center
                    gap-5
                    hover:border-[#B7DF02]
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-12 h-12
                      shrink-0
                      rounded-xl
                      bg-[#B7DF021A]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon size={23} className="text-[#B7DF02]" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">{val.value}</h3>

                    <p className="text-gray-500 font-medium leading-7">
                      {val.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                className="
                  h-[175px]
                  rounded-2xl
                  border border-gray-300
                  flex flex-col
                  items-center
                  justify-center
                  gap-3
                 
                "
              >
                <div
                  className={`
                    w-16 h-16
                    rounded-2xl
                    ${member.color}
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                    ${member.textColor}
                  `}
                >
                  {member.letter}
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>

                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="
            border
            border-[#B7DF0255]
            rounded-3xl
            min-h-[257px]
            flex
            flex-col
            items-center
            justify-center
            text-center
            gap-5
            px-5
          "
        >
          <h2 className="text-3xl font-semibold">Ready to shop?</h2>

          <p className="text-gray-500">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="
              bg-[#B7DF02]
              text-black
              px-10
              py-4
              rounded-2xl
              font-semibold
              text-lg
              flex
              items-center
              gap-3
              hover:bg-[#c8f51a]
              transition
            "
          >
            Browse Products
            <ArrowRight size={21} />
          </button>
        </section>
      </div>
    </main>
  );
};

export default AboutPages;
