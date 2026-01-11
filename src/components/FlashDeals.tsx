import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const FlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashProducts = products.filter((p) => p.isFlashDeal).slice(0, 4);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Zap className="w-6 h-6 text-destructive fill-destructive" />
              <span className="text-destructive font-semibold uppercase tracking-wider text-sm">
                Limited Time Offer
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Today's Flash Deals
            </motion.h2>
          </div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <Clock className="w-5 h-5 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <TimeBlock value={timeLeft.hours} label="HRS" />
              <span className="text-2xl font-bold">:</span>
              <TimeBlock value={timeLeft.minutes} label="MIN" />
              <span className="text-2xl font-bold">:</span>
              <TimeBlock value={timeLeft.seconds} label="SEC" />
            </div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-foreground text-background rounded-lg px-4 py-2 min-w-[70px] text-center">
    <p className="text-2xl font-bold font-display">{value.toString().padStart(2, "0")}</p>
    <p className="text-xs opacity-70">{label}</p>
  </div>
);

export default FlashDeals;
