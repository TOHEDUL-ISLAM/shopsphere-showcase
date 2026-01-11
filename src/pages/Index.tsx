import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlashDeals from "@/components/FlashDeals";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import Trending from "@/components/Trending";
import Recommended from "@/components/Recommended";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FlashDeals />
      <Categories />
      <NewArrivals />
      <Trending />
      <Recommended />
      <Footer />
    </div>
  );
};

export default Index;
