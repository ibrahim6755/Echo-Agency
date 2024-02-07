import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:w-90 md:m-5">
      {data.map((card, index) => (
        <div className="md:px-4 md:p-0 md:m-5" key={index}>
          <div className="flex items-center flex-col justify-center">
            <Image
              className="h-30 rounded mb-6 transition-all duration-700 hover:scale-105"
              src={card.image}
              alt={card.title}
              width={60}
              height={100}
            />
            <h1 className="text-center font-bold w-full text-2xl my-2">
              {card.title}
            </h1>
            <h3 className="custom_blue text-sm text-center custom_grey">
              {card.description}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
