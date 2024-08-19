import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Badge className="text-xs light-gray-bg dark-gray-text my-7">
              WELCOME TO MY PORTFOLIO
            </Badge>

            <h1 className="title-font text-4xl md:text-6xl mb-4 font-bold main-color ">
              Expert SEO, SEM Services in London
            </h1>
            <p className="mb-8 leading-relaxed dark-gray-text text-sm dark:text-gray-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="flex items-center justify-start">
              {" "}
              <Button
                variant="ghost"
                className="me-2 p-6 custom_bg_blue main-color-bg sec-color1 rounded-full border border-transparent hover:border-gray-200 transition duration-300"
              >
                <Link href="#projects">My Work</Link>
              </Button>
              <Button
                variant="ghost"
                className="mx-2 p-6 main-color sec-color1-bg rounded-full border border-transparent hover:border-gray-300 hover:bg_blue transition duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <Image
            className="rounded-2xl"
              src="/images/carousel-image.png"
              width={600}
              height={150}
              alt="main-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
