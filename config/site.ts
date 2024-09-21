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
  title: "I'm a solopreneur, builder and founder.",
  description:
    "I've founded 6 online software companies, with 2 being acquired. I teach solo entrepreneurs how to build and scale successful online businesses.",
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
