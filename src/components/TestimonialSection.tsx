import React from "react";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

function TestimonialSection() {
  return (
    <section className="flex flex-col items-center justify-center my-4">
      <Badge className="custom_yellow text-xs bg-yellow-100 my-3">
        Testimonials
      </Badge>
      <h1 className="custom_blue text-4xl md:text-5xl font-bold mb-3">
        Testimonials
      </h1>
      <p className="text-xs custom_grey w-2/3 text-center">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-4/5 my-14"
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3 ">
              <div className="p-1">
                {/* <div>
                <div className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div> */}
                <TestimonialCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default TestimonialSection;
