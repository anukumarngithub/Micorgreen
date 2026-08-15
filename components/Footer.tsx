"use client";

import { Leaf, MessageCircle, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { PHONE_NUMBER, EMAIL, CITY, WHATSAPP_NUMBER } from "@/lib/data";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#microgreens", label: "Microgreens" },
  { href: "#wholesale", label: "Wholesale" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi! I'd like to place an order."
  )}`;

  return (
    <footer className="bg-[#071007] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                Ready for fresh microgreens?
              </h2>
              <p className="text-white/50 text-lg">
                Order now or enquire about wholesale — we respond fast.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-none">
                  Urban LeafBox
                </span>
                <span className="text-[10px] text-green-400 font-medium tracking-widest uppercase">
                  Fresh Every Harvest
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
              Premium microgreens grown in Mysuru using clean cultivation
              practices. Freshly harvested and delivered to homes, restaurants,
              cafes, hotels, and organic stores.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-4.5 h-4.5 text-white" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-4.5 h-4.5 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm text-white/70 uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-sm text-white/50 hover:text-green-400 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm text-white/70 uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, value: PHONE_NUMBER, href: `tel:${PHONE_NUMBER.replace(/\s/g, "")}` },
                { icon: Mail, value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: MapPin, value: CITY, href: "#" },
              ].map(({ icon: Icon, value, href }) => (
                <li key={value}>
                  <a
                    href={href}
                    className="flex items-center gap-2.5 text-sm text-white/50 hover:text-green-400 transition-colors group"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0 text-white/30 group-hover:text-green-400 transition-colors" />
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; 2026 Urban LeafBox. Fresh Every Harvest.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
