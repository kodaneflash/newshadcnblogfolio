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
  title: " enim nulla aliqua duis",
  description:
    "Deserunt esse qui exedipisicing eu sunt nostrud.",
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
