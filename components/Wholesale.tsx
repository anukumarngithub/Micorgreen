"use client";

import { motion } from "framer-motion";
import { Package, Truck, Box, ChefHat, MessageCircle } from "lucide-react";
import { WHOLESALE_SERVICES, WHATSAPP_NUMBER } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  Package,
  Truck,
  Box,
  ChefHat,
};

const CLIENTS = [
  "Fine Dining Restaurants",
  "Boutique Cafes",
  "5-Star Hotels",
  "Supermarkets",
  "Organic Stores",
  "Cloud Kitchens",
];

export default function Wholesale() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi! I'm interested in wholesale microgreens supply. Please share your pricing and delivery options."
  )}`;

  return (
    <section id="wholesale" className="py-28 bg-[#f7faf7] dark:bg-[#0d180d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold tracking-widest uppercase mb-6">
              B2B Supply
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Premium supply
              <br />
              <span className="text-green-600">for your business.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              We partner with restaurants, cafes, hotels, supermarkets, and
              organic stores in Mysuru to deliver consistent, high-quality
              microgreens on your schedule.
            </p>

            {/* Client types */}
            <div className="flex flex-wrap gap-2 mb-10">
              {CLIENTS.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
                >
                  {c}
                </span>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-green-600/25 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Enquire via WhatsApp
            </a>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {WHOLESALE_SERVICES.map((service, i) => {
              const Icon = ICONS[service.icon] ?? Package;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 hover:border-green-200 dark:hover:border-green-800/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
