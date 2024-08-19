import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

function AboutUsSection() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center">
      <div className="image-div md:w-2/3">
        <Image
          src="/images/about-mockup.jpg"
          width={700}
          height={100}
          alt="about-us-image"
        />
      </div>
      <div className="text-div md:w-1/3 my-8">
        <div className="flex flex-col  items-center md:items-start">
          <Badge className="light-gray-bg dark-gray-text text-xs  my-3">
            About Me
          </Badge>
          <h1 className=" text-center text-2xl main-color md:text-4xl font-bold mb-3">
            Why Me ?
          </h1>
        </div>
        <h3 className="text-sm dark-gray-text  leading-normal">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </h3>
        <h3 className="my-2 text-sm dark-gray-text  leading-normal">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.{" "}
        </h3>
        <br />
        <ul className="m-0 p-0">
          <li className="flex items-center m-2 text-sm dark-gray-text  leading-normal">
            {" "}
            <Check className="me-2 main-color" /> Behind the word mountains
          </li>
          <li className="flex items-center m-2 text-sm dark-gray-text  leading-normal">
            {" "}
            <Check className="me-2 main-color" /> Bookmarksgrove right at the coast
          </li>
          <li className="flex items-center m-2 text-sm dark-gray-text leading-normal">
            {" "}
            <Check className="me-2 main-color" /> Semantics, a large language
          </li>
        </ul>
        <div className="flex justify-center md:justify-start">
          <Button
            variant="ghost"
            className="m-6 p-6 custom_bg_blue text-white rounded-full transition duration-300 border border-transparent  hover:border-gray-200 "
          >
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
