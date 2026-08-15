"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a140a]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4750273/pexels-photo-4750273.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Fresh microgreens farm"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a140a]/60 via-[#0a140a]/30 to-[#0a140a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a140a]/70 via-transparent to-[#0a140a]/40" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 text-xs font-semibold tracking-widest uppercase">
             🌿 Grown in Mysore • Delivered Across Karnataka
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            Farm Fresh
            <br />
            <span className="text-green-400">Microgreens</span>
            <br />
            Delivered Fresh
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
          >
            Premium quality microgreens grown naturally in Mysuru and harvested
            fresh for maximum taste and nutrition.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => handleScroll("#microgreens")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-base transition-all duration-200 hover:shadow-2xl hover:shadow-green-600/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll("#wholesale")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              Wholesale Enquiry
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10"
          >
            {[
              { value: "16+", label: "Varieties" },
              { value: "100%", label: "Natural" },
              { value: "7–8", label: "Days Fresh" },
              { value: "Mysuru", label: "Grown Locally" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-green-400">
                  {stat.value}
                </span>
                <span className="text-sm text-white/50 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => handleScroll("#features")}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
