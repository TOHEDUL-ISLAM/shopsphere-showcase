import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              New Collection 2025
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Discover Your
              <span className="block gradient-text">Unique Style</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Explore our curated collection of premium fashion pieces designed
              to elevate your wardrobe with timeless elegance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button className="h-14 px-8 btn-primary rounded-full text-base font-medium group">
                Shop Collection
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 btn-outline-hero rounded-full text-base font-medium"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Story
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              <div>
                <p className="text-3xl font-display font-bold">500+</p>
                <p className="text-sm text-muted-foreground">Brands</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-display font-bold">50K+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-display font-bold">100K+</p>
                <p className="text-sm text-muted-foreground">Customers</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80"
                  alt="Fashion Model"
                  className="w-full h-[700px] object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -left-16 bottom-32 bg-background rounded-2xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&q=80"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div>
                    <p className="font-medium text-sm">Classic Leather Jacket</p>
                    <p className="text-primary font-semibold">$299</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-8 top-20 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-xl"
              >
                <p className="text-2xl font-display font-bold">40%</p>
                <p className="text-sm">OFF Sale</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
