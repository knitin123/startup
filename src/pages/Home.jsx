import HeroSection from "../components/HeroSection";
import TrustSection from "../components/TrustSection";
import ProductHighlight from "../components/ProductHighlight";
import BrandStory from "../components/BrandStory";
import CTAStrip from "../components/CTAStrip";
import WhyUs from "../components/WhyUs";
import HowItWorks from "../components/HowItWorks";


export default function Home() {
  return (
    <div>
      {/* 1️⃣ First impression */}
      <HeroSection />

      {/* 2️⃣ Trust & credibility */}
      <TrustSection />

      {/* 3️⃣ Why choose us (core value proposition) */}
      <WhyUs />

      {/* 4️⃣ What we sell */}
      <ProductHighlight />

      {/* 5️⃣ Brand emotion / story */}
      <BrandStory />

      {/* 6️⃣ Final push to action */}
      <CTAStrip />

      {/* 7️⃣ How it works */}
      <HowItWorks />
    </div>
  );
}
