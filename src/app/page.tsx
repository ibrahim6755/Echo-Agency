import AboutUsSection from "@/components/AboutUsSection";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="md:container md:mx-auto md:px-auto px-10">
      <section>
        <Hero />
      </section>
      <section>
        <FeatureSection />
      </section>
      <section>
        <AboutUsSection />
      </section>
      <section>
        <ServicesSection />
      </section>
    </main>
  );
}
