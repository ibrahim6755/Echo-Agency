import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    // <div className="flex flex-col md:flex-row items-center justify-center md:w-90 md:m-5">
    //   {data.map((card, index) => (
    //     <div className="md:px-4 md:p-0 md:m-5" key={index}>
    //       <div className="flex items-center flex-col justify-center">
    //         <Image
    //           className="h-30 rounded mb-6 transition-all duration-700 hover:scale-105"
    //           src={card.image}
    //           alt={card.title}
    //           width={60}
    //           height={100}
    //         />
    //         <h1 className="text-center font-bold w-full text-2xl my-2">
    //           {card.title}
    //         </h1>
    //         <h3 className="custom_blue text-sm text-center custom_grey">
    //           {card.description}
    //         </h3>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((card, index) => (
            <div className="p-4 md:w-1/3" key={card.id}>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={card.image}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {card.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{card.description}</p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href={card.link}
                      target="_blank"
                      className="main-color  inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Explore the site
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
