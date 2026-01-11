import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchModal from "./SearchModal";
import AuthModal from "./AuthModal";

const categories = [
  {
    name: "Women",
    subcategories: ["Dresses", "Tops", "Bottoms", "Outerwear", "Knitwear"],
  },
  {
    name: "Men",
    subcategories: ["Shirts", "Trousers", "Jackets", "Knitwear", "Suits"],
  },
  {
    name: "Accessories",
    subcategories: ["Bags", "Watches", "Jewelry", "Belts", "Scarves"],
  },
  {
    name: "Footwear",
    subcategories: ["Sneakers", "Boots", "Heels", "Loafers", "Sandals"],
  },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="font-display text-2xl md:text-3xl font-bold tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              AURUM
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {categories.map((category) => (
                <DropdownMenu key={category.name}>
                  <DropdownMenuTrigger className="nav-link flex items-center gap-1 text-sm font-medium">
                    {category.name}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="w-48 bg-popover border border-border"
                  >
                    {category.subcategories.map((sub) => (
                      <DropdownMenuItem
                        key={sub}
                        className="cursor-pointer hover:bg-accent"
                      >
                        {sub}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
              <a href="#sale" className="nav-link text-sm font-medium text-destructive">
                Sale
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="hover:bg-accent"
              >
                <Search className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-accent"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex hover:bg-accent"
              >
                <Heart className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAuthOpen(true)}
                className="hover:bg-accent"
              >
                <User className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-accent"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-background"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {categories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <p className="font-medium text-foreground">{category.name}</p>
                    <div className="pl-4 space-y-2">
                      {category.subcategories.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <a href="#sale" className="block font-medium text-destructive">
                  Sale
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Navbar;
