import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialCardData } from "@/data";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface TestimonialCardProps {
  id: number;
  image: string;
  name: string;
  job: string;
  description: string;
}

function TestimonialSection() {
  const testimonialData: TestimonialCardProps[] = testimonialCardData;

  return (
    <section className="flex flex-col items-center justify-center my-4">
      <Badge className="light-gray-bg dark-gray-text text-xs my-3">
        Testimonials
      </Badge>
      <h1 className="main-color text-4xl md:text-5xl font-bold mb-3">
        Testimonials
      </h1>
      <p className="text-xs dark-gray-text  w-2/3 text-center dark:text-gray-400">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      <Carousel opts={{ align: "start" }} className="w-4/5 my-14">
        <CarouselContent>
          {testimonialData.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="light-gray-bg p-5 rounded-md">
                <h2 className="dark-gray-text text-sm">
                  “{testimonial.description}”
                </h2>
                <div className="person light-gray-bg m-3">
                  <div className="image flex justify-center items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="info ms-3">
                      <h1 className="text-xs main-color">
                        {testimonial.name}
                      </h1>
                      <h1 className="text-xs main-color">{testimonial.job}</h1>
                    </div>
                  </div>
                </div>
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
