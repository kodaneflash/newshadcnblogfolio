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
  name: "next-shadcn-sanity-blog",
  title: "I'm a solopreneur, builder and founder.",
  description:
    "I’m a serial entrepreneur, leader, and strategist. I've founded 6 online software companies, with 2 being acquired.",
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
