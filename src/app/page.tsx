import AboutUsSection from "@/components/AboutUsSection";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="container mx-auto px-auto">
      <section>
        <Hero />
      </section>
      <section>
        <FeatureSection />
      </section>
      <section>
        <AboutUsSection/>
      </section>
    </main>
  );
}
