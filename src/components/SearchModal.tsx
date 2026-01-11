import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const trendingSearches = [
  "Leather jacket",
  "Summer dress",
  "Sneakers",
  "Watch",
  "Cashmere",
];

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  const filteredProducts = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for products, brands, categories..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-12 pr-4 h-14 text-lg input-search rounded-full"
                    autoFocus
                  />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-accent rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Trending Searches */}
              {!query && (
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <TrendingUp className="w-4 h-4" />
                    <span>Trending Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trendingSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => setQuery(search)}
                        className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-accent transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Results */}
              {query && (
                <div className="mt-6 max-h-[60vh] overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {filteredProducts.slice(0, 8).map((product) => (
                        <motion.a
                          key={product.id}
                          href="#"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {product.brand}
                            </p>
                            <p className="text-sm font-semibold mt-1">
                              ${product.price}
                            </p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-8">
                      No products found for "{query}"
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
