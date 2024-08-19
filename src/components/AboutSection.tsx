import React from "react";
import { Badge } from "./ui/badge";
import { projectCardData } from "@/data";
import FeatureCard from "./ProjectCard";
import ProjectCard from "./ProjectCard";

interface ProjectSectionProps {
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
      <Badge className="light-gray-bg dark-gray-text text-xs my-3">About</Badge>
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-5 uppercase tracking-wide main-color">
        Discover My Professional Journey
      </h1>
      <h5 className="dark-gray-text dark:text-gray-400 text-center text-sm md:w-1/2 p-4">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </h5>
      <h1 className="text-center mt-14 text-3xl md:text-4xl font-bold mb-5 uppercase tracking-wide main-color">
        Projects
      </h1>
      <div id="projects" className="card-row">
        <ProjectCard data={projectCardData} />
      </div>
    </section>
  );
}

export default FeatureSection;
