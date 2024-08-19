import { serviceCardData } from "@/data";
import ServiceCard from "./ServiceCard";
import { Badge } from "./ui/badge";

interface ServicesSectionProps {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
}
function ServicesSection() {
  return (
    <section id="services" className="flex flex-col items-center justify-center my-4">
      <Badge className="light-gray-bg dark-gray-text text-xs my-3">
        services
      </Badge>
      <h1 className="main-color text-4xl md:text-5xl font-bold mb-3">My Services</h1>
      <div className="cards-row">
        <ServiceCard data={serviceCardData} />
      </div>
    </section>
  );
}

export default ServicesSection;
