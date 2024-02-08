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
    <section className="flex flex-col items-center justify-center my-4">
      <Badge className="custom_yellow text-xs bg-yellow-100 my-3">
        services
      </Badge>
      <h1 className="custom_blue text-4xl md:text-5xl font-bold mb-3">Our Services</h1>
      <div className="cards-row">
        <ServiceCard data={serviceCardData} />
      </div>
    </section>
  );
}

export default ServicesSection;
