import Link from "next/link";
import React from "react";
import Image from "next/image";

interface FeatureCard {
  id: number;
  image: string;
  title: string;
  description: string;
}
interface featureCardProps {
  data: FeatureCard[];
}
function FeatureCard({ data }: featureCardProps) {
  return (
    <div className="flex items-center justify-center w-90 m-5">
      {data.map((card, index) => {
        return (
          <div className="px-4 md:p-0 m-5" key={index}>
            <div className="flex items-center flex-col justify-center ">
              <Image
                className="h-30 rounded  mb-6 transition-all duration-700 hover:scale-105"
                src={card.image}
                alt="content"
                width={60}
                height={100}
              />
              <h1 className="text-center font-bold text-2xl my-2">
                {card.title}
              </h1>
              <h3 className=" custom_blue text-sm text-center custom_grey ">
                {card.description}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeatureCard;
