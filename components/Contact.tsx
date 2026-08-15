"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, EMAIL, CITY, WHATSAPP_NUMBER } from "@/lib/data";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi Urban LeafBox! I have a question."
  )}`;

  return (
    <section id="contact" className="py-28 bg-white dark:bg-[#0a140a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Get in Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Let&apos;s talk
              <br />
              <span className="text-green-600">fresh greens.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
              Whether you want to place a home order, discuss wholesale pricing,
              or simply learn more about microgreens — we&apos;re here to help.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: PHONE_NUMBER, href: `tel:${PHONE_NUMBER.replace(/\s/g, "")}` },
                { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: MapPin, label: "Location", value: CITY, href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-0.5">
                      {label}
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right — map / image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 shadow-xl flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/5945722/pexels-photo-5945722.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Urban LeafBox — contact"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 dark:bg-[#0a140a]/90 backdrop-blur-sm rounded-2xl p-7 shadow-2xl text-center max-w-xs">
                  <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-1">
                    Urban LeafBox
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {CITY}
                  </p>
                  <p className="text-green-600 dark:text-green-400 text-sm font-semibold">
                    Fresh deliveries across Mysuru
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
