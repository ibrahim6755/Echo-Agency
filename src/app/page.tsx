import AboutUsSection from "@/components/AboutUsSection";
import FeatureSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";

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
      <section>
        <TestimonialSection/>
      </section>
    </main>
  );
}
