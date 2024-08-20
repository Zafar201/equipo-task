import { ToastContainer } from "react-toastify";
import HeroSection from "../components/layouts/HeroSection";
import PricingPlans from "../components/PricingPlans";
import BusinessFeatures from "../components/sections/BusinessFeatures";
import Faq from "../components/sections/Faq";
import POSAppFeatures from "../components/sections/POSAppFeatures";
import POSHeroSection from "../components/sections/POSHeroSection";
import Brands from "../components/sections/Brands";

function HomePage() {

  return (
    <div>
     <ToastContainer />
      <HeroSection/>
      <Brands/>
      <BusinessFeatures/>
      <PricingPlans />
      <POSAppFeatures/>
      <Faq/>
      <POSHeroSection/>
    </div>
  );
}

export default HomePage;
