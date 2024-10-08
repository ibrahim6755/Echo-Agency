interface ProjectCard {
    id: number;
    image: string;
    title: string;
    description: string;
    link:string;
  }

interface ServiceCard{
  id: number;
  image: string;
  title: string;
  description: string;
}
  
interface TestimonialCard{
  id: number;
  image: string;
  name: string;
  job:string;
  description: string;
}
  export const projectCardData: ProjectCard[] = [
    {
      id: 1,
      image: "/images/iyzil.png",
      title: "Iyzil Fearless Companion",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      link:"https://iyzil.com/",
    },
    {
      id: 2,
      image: "/images/iylus.png",
      title: "Discover Iylus",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
        link:"https://iylus.com/",
    },
    {
      id: 3,
      image: "/images/zigron.png",
      title: "Zigron",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
        link:"https://zigron.com/",
    },
  ];

  export const serviceCardData:ServiceCard[]= [
      {
        id: 1,
        image: "/images/service-1.jpg",
        title: "Internet Marketing",
        description:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      },
      {
        id: 2,
        image: "/images/service-2.jpg",
        title: "BackLinks Marketing",
        description:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      },
      {
        id: 3,
        image: "/images/service-3.jpg",
        title: "Social Marketing",
        description:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      },
      // {
      //   id: 4,
      //   image: "/images/design-marketing.jpg",
      //   title: " Design Marketing",
      //   description:
      //     "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      // },
      // {
      //   id: 5,
      //   image: "/images/social-marketing.jpg",
      //   title: "SEO Marketing",
      //   description:
      //     "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      // },
      // {
      //   id: 6,
      //   image: "/images/seo-optimization.jpg",
      //   title: "Marketing Analysis",
      //   description:
      //     "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      // },
    
  ]

  export const testimonialCardData:TestimonialCard[]=[{
    
      id: 1,
      image: "/images/avatar.jpg",
      name: "Drew Wood",
      job:"Director at Google",
      description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
      id: 2,
      image: "/images/avatar.jpg",
      name: "Michelle Alisson",
      job:"Director at Google",
      description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
      id: 3,
      image: "/images/avatar.jpg",
      name: "Carl Anderson",
      job:"Director at Google",
      description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
      id: 4,
      image: "/images/avatar.jpg",
      name: "Drew Wood",
      job:"Director at Google",
      description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
      id: 5,
      image: "/images/avatar.jpg",
      name: "Michelle Alisson",
      job:"Director at Google",
      description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
      id: 6,
      image: "/images/avatar.jpg",
      name: "Carl Anderson",
      job:"Director at Google",
      description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
  ]