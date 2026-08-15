"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Clock,
  ChevronRight,
  MessageCircle,
  ChefHat,
  Timer,
  Users,
  Salad,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MICROGREENS, type Microgreen, type Recipe, WHATSAPP_NUMBER } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

function RecipeModal({
  recipe,
  microgreenName,
  open,
  onOpenChange,
}: {
  recipe: Recipe | null;
  microgreenName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!recipe) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0a140a] border-green-100 dark:border-green-900/30 p-0">
        <div className="relative">
          <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 text-green-100 text-xs font-semibold tracking-widest uppercase mb-2">
                <Salad className="w-3.5 h-3.5" />
                <span>Recipe · {microgreenName}</span>
              </div>
              <DialogHeader className="space-y-2">
                <DialogTitle className="text-2xl font-bold text-white text-left">
                  {recipe.name}
                </DialogTitle>
                <DialogDescription className="text-green-50/90 text-left text-sm leading-relaxed">
                  {recipe.description}
                </DialogDescription>
              </DialogHeader>
            </div>
          </div>

          <div className="px-6 pt-4">
            <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300 pb-4 border-b border-gray-100 dark:border-white/5">
              <span className="inline-flex items-center gap-1.5">
                <Timer className="w-4 h-4 text-green-600 dark:text-green-400" />
                {recipe.time}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                {recipe.servings}
              </span>
            </div>
          </div>

          <div className="p-6 grid md:grid-cols-5 gap-6">
            <div className="md:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400 mb-3">
                Ingredients
              </h4>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400 mb-3">
                Steps
              </h4>
              <ol className="space-y-3">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProductCard({ item }: { item: Microgreen }) {
  const [recipeOpen, setRecipeOpen] = useState(false);
  const whatsappMsg = encodeURIComponent(
    `Hi! I'd like to order ${item.name}. Please share pricing and availability.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${whatsappMsg}`;
  const recipe = item.recipes[0];

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden hover:shadow-2xl hover:shadow-green-900/10 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {item.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white bg-green-600 shadow-sm">
            {item.badge}
          </span>
        )}
        <div
          className="absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-white/40"
          style={{ backgroundColor: item.color }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 truncate">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">
          {item.flavor}
        </p>

        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500 mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>Ready in {item.harvest}</span>
        </div>

        {/* Uses */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {item.uses.slice(0, 3).map((use) => (
            <span
              key={use}
              className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/30"
            >
              {use}
            </span>
          ))}
          {item.uses.length > 3 && (
            <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-500">
              +{item.uses.length - 3}
            </span>
          )}
        </div>

        {/* Recipe preview */}
        {recipe && (
          <button
            onClick={() => setRecipeOpen(true)}
            className="flex items-center gap-2 w-full mb-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 hover:bg-amber-100 dark:hover:bg-amber-900/20 border border-amber-100 dark:border-amber-900/20 text-left transition-all duration-200 group/recipe"
          >
            <ChefHat className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Recipe
              </p>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">
                {recipe.name}
              </p>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 group-hover/recipe:translate-x-0.5 transition-transform flex-shrink-0" />
          </button>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-600 dark:hover:bg-green-600 text-green-700 dark:text-green-400 hover:text-white text-sm font-semibold transition-all duration-200 group/btn"
        >
          <MessageCircle className="w-4 h-4" />
          Order via WhatsApp
          <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {recipe && (
        <RecipeModal
          recipe={recipe}
          microgreenName={item.name}
          open={recipeOpen}
          onOpenChange={setRecipeOpen}
        />
      )}
    </motion.div>
  );
}

const FILTERS = ["All", "Mild", "Peppery", "Sweet", "Earthy", "Spicy"];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeFilter === "All"
      ? MICROGREENS
      : MICROGREENS.filter((m) =>
          m.flavor.toLowerCase().includes(activeFilter.toLowerCase())
        );

  const displayed = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="microgreens" className="py-28 bg-white dark:bg-[#0a140a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold tracking-widest uppercase mb-5">
            Our Varieties
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Fresh. Diverse. Delicious.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Explore our selection of 16+ premium microgreens — each harvested
            fresh and packed with flavour.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActiveFilter(f);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? "bg-green-600 text-white shadow-md shadow-green-600/20"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {displayed.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* Show more */}
        {filtered.length > 8 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-500 font-semibold text-base hover:bg-green-600 hover:text-white dark:hover:bg-green-600 dark:hover:text-white transition-all duration-200"
            >
              View All {filtered.length} Varieties
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
