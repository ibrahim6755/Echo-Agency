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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((card, index) => (
            <div className="my-4 md:p-4  md:w-1/3" key={card.id}>
              <div className="h-full  border-2 border-gray-600 dark:shadow-gray-800 shadow-gray-100 hover:shadow-md md:shadow-2xl transition-shadow duration-300 border-opacity-60 rounded-2xl p-2 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl"
                  src={card.image}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font dark-gray-text dark:text-gray-400 text-lg font-bold mb-3">
                    {card.title}
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">
                    {card.description}
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href={card.link}
                      target="_blank"
                      className="main-color inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Explore the site
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
