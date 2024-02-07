interface FeatureCard {
    id: number;
    image: string;
    title: string;
    description: string;
  }
  
  export const featureCardData: FeatureCard[] = [
    {
      id: 1,
      image: "/images/seo-optimization.jpg",
      title: "Marketing Analysis",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      image: "/images/backlinks-marketing.jpg",
      title: "Digital Marketing",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 3,
      image: "/images/seo-backlinks.jpg",
      title: "SEO and Backlinks",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];