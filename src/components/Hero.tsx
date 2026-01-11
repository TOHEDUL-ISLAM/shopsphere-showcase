import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const floatingProducts = [
    { image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", name: "Smart Watch", delay: 0 },
    { image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", name: "Headphones", delay: 0.2 },
    { image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80", name: "Camera", delay: 0.4 },
    { image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80", name: "Skincare", delay: 0.6 },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
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
              <Sparkles className="w-4 h-4" />
              Discover Premium Products
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Everything You
              <span className="block gradient-text">Love, One Place</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              From cutting-edge electronics to lifestyle essentials—discover a 
              curated marketplace of premium products at unbeatable prices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button className="h-14 px-8 btn-primary rounded-full text-base font-medium group">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 btn-outline-hero rounded-full text-base font-medium"
              >
                <Zap className="w-5 h-5 mr-2" />
                Today's Deals
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mt-12 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-5 h-5 text-primary" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Premium Quality</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8 mt-8 justify-center lg:justify-start"
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

          {/* Product Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              {floatingProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: product.delay + 0.3 }}
                  className={`relative ${index % 2 === 1 ? 'mt-12' : ''}`}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 3 + index * 0.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.3 
                    }}
                    className="bg-background rounded-3xl p-4 shadow-xl border border-border hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <p className="font-medium text-center">{product.name}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -left-8 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-xl"
            >
              <p className="text-2xl font-display font-bold">40%</p>
              <p className="text-sm">OFF Sale</p>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -right-4 bottom-8 bg-background rounded-2xl px-5 py-3 shadow-xl border border-border"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">⭐</div>
                  <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-xs font-bold">⭐</div>
                  <div className="w-8 h-8 rounded-full bg-primary/40 flex items-center justify-center text-xs font-bold">⭐</div>
                </div>
                <div>
                  <p className="font-semibold text-sm">4.9/5</p>
                  <p className="text-xs text-muted-foreground">10K+ Reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
