import { motion } from "framer-motion";
import {
  Shirt,
  Watch,
  ShoppingBag,
  Sparkles,
  Footprints,
} from "lucide-react";

const categories = [
  {
    id: "outerwear",
    name: "Outerwear",
    count: 48,
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1544923246-77307dd628b4?w=400&q=80",
    color: "from-amber-500/20",
  },
  {
    id: "accessories",
    name: "Accessories",
    count: 167,
    icon: Watch,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    color: "from-emerald-500/20",
  },
  {
    id: "bags",
    name: "Bags",
    count: 74,
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
    color: "from-rose-500/20",
  },
  {
    id: "dresses",
    name: "Dresses",
    count: 52,
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
    color: "from-purple-500/20",
  },
  {
    id: "footwear",
    name: "Footwear",
    count: 93,
    icon: Footprints,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    color: "from-blue-500/20",
  },
];

const Categories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our diverse collection of premium fashion categories
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.a
                key={category.id}
                href={`#${category.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} via-foreground/40 to-foreground/80`}
                />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between text-background">
                  <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-80">{category.count} Items</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
