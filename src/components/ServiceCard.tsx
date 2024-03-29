import React from "react";
import Image from "next/image";

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  data: Service[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-90 md:m-5 md:p-10 m-3">
      {data.map((service) => (
        <div key={service.id} className="rounded-md cursor-pointer shadow-sm shadow-gray-100 hover:shadow-md md:shadow-2xl transition-shadow duration-300 md:m-5">
          <div className="flex items-center flex-col justify-center p-4">
            <Image
              className="rounded mb-6 transition-all duration-700 hover:scale-105"
              src={service.image}
              alt={service.title}
              width={60}
              height={100}
            />
            <h1 className="text-center font-bold text-2xl my-2 custom_blue">{service.title}</h1>
            <h5 className="text-sm text-center custom_grey">{service.description}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
