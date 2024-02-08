import React from "react";
import { Badge } from "./ui/badge";
import { featureCardData } from "@/data";
import FeatureCard from "./FeatureCard";

interface FeatureSectionProps {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
}

function FeatureSection() {
  return (
    <section className="flex flex-col items-center justify-center my-4">
      <Badge className="custom_yellow text-xs bg-yellow-100 my-3">
        Features
      </Badge>
      <h1 className="custom_blue text-4xl md:text-5xl font-bold mb-3">Our Features</h1>
      <h5 className="custom_grey text-center text-sm md:w-1/2 p-4">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </h5>
      <div className="card-row">
        <FeatureCard data={featureCardData} />
      </div>
    </section>
  );
}

export default FeatureSection;
