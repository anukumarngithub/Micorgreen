"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const VALUES = [
  "Clean cultivation, no synthetic inputs",
  "Harvested to order for maximum freshness",
  "Traceable from seed to your table",
  "Supporting local, sustainable agriculture",
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#f7faf7] dark:bg-[#0d180d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-green-900/10">
              <img
                src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Urban LeafBox farm — sunflower microgreens"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-[#0a140a] rounded-2xl p-5 shadow-xl border border-green-100 dark:border-green-900/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">16+</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">Varieties</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Available year-round</p>
                </div>
              </div>
            </motion.div>
            {/* Second floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 bg-green-600 rounded-2xl p-5 shadow-xl"
            >
              <div className="text-center">
                <p className="text-white font-bold text-2xl">100%</p>
                <p className="text-green-200 text-xs font-medium">Natural</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Our Story
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Grown with care,
              <br />
              <span className="text-green-600">delivered with love.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Urban LeafBox grows premium microgreens using clean cultivation
              practices in Mysuru. Every tray is carefully nurtured and harvested
              fresh to provide exceptional taste, freshness, and natural
              nutrition — straight to your kitchen.
            </p>
            <ul className="space-y-4 mb-10">
              {VALUES.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-base">{value}</span>
                </li>
              ))}
            </ul>
            <a
              href="#microgreens"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#microgreens")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-green-600/25 hover:-translate-y-0.5"
            >
              Explore Our Greens
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
