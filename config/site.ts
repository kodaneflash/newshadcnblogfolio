export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
  contacts: {
    email: string;
    phone: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "James Archer | Founder | Solo Entrepreneur",
  title: "James Archer | Solo Entrepreneur | Founder",
  description:
    "I teach solo entrepreneurs how to build and scale successful online businesses.",
  url: "",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/kaganmert/next-shadcn-sanity-blog",
  },
  contacts: {
    email: "contact@example.com",
    phone: "08000 000 000",
  },
};
