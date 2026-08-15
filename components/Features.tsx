"use client";

import { motion, type Variants } from "framer-motion";
import { Leaf, MapPin, ShieldCheck, Star } from "lucide-react";

const FEATURES = [
  {
    icon: Leaf,
    title: "Freshly Harvested",
    description: "Cut and delivered within hours for peak nutritional value.",
    color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  },
  {
    icon: MapPin,
    title: "Locally Grown",
    description: "Nurtured in Mysuru using clean, controlled cultivation.",
    color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: ShieldCheck,
    title: "No Preservatives",
    description: "Pure, natural greens — zero chemicals, zero compromise.",
    color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Every tray hand-selected to meet the highest standards.",
    color: "bg-lime-50 dark:bg-lime-900/20 text-lime-600 dark:text-lime-500",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-[#0a140a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feat) => (
            <motion.div
              key={feat.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-green-200 dark:hover:border-green-800/50 bg-white dark:bg-white/[0.02] hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feat.color} mb-6 transition-transform group-hover:scale-110 duration-300`}
              >
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                {feat.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
