interface FooterLinks {
  id: number;
  href: string;
  title: string;
}

interface Clients {
  src: string;
  id: number;
  alt: string;
  mobileOnly?: boolean;
}

interface HeaderLinks extends FooterLinks {
  subLinks?: Array<FooterLinks>;
}

export const SITE_NAME: string = "Hourglass";

export const FOOTER_LINKS: FooterLinks[] = [
  {
    id: 1,
    href: "/overview",
    title: "Overview",
  },
  {
    id: 2,
    href: "/features",
    title: "Features",
  },
  {
    id: 3,
    href: "/pricing",
    title: "Pricing",
  },
  {
    id: 4,
    href: "/careers",
    title: "Careers",
  },
  {
    id: 5,
    href: "/help",
    title: "Help",
  },
  {
    id: 6,
    href: "/privacy",
    title: "Privacy",
  },
];

export const FOOTER_LINKS_EXTRA: FooterLinks[] = [
  {
    id: 1,
    href: "/terms",
    title: "Terms",
  },
  {
    id: 2,
    href: "/privacy",
    title: "Privacy",
  },
  {
    id: 3,
    href: "/cookies",
    title: "Cookies",
  },
];

export const EMAIL_SUB_TITLE: string = "Stay up to date";
export const EMAIL_PLACEHOLDER: string = "Enter your email";

export const HEADER_LINKS: HeaderLinks[] = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "/products",
    title: "Products",
    subLinks: [
      {
        id: 1,
        href: "/",
        title: "",
      },
    ],
  },
  {
    id: 3,
    href: "/resources",
    title: "Resources",
    subLinks: [...FOOTER_LINKS_EXTRA],
  },
];

export const BANNER_HEADING: string =
  "We design physical <u>experiences</u> that create more happy in the world";

export const BANNER_SUBHEADING: string =
  "— We’re a full-service interior design agency who specialise in simple, useful and beautiful solutions for any space.";

export const CLIENTS_TAGLINE: string = "We’ve worked with some great startups";

export const CLIENTS: Clients[] = [
  {
    id: 1,
    alt: "Layers",
    src: "/images/company-logo-layer.png",
  },
  {
    id: 2,
    alt: "Layers",
    src: "/images/company-logo-sisyphus.png",
  },
  {
    id: 3,
    alt: "Layers",
    src: "/images/company-logo-circooles.png",
  },
  {
    id: 4,
    alt: "Layers",
    src: "/images/company-logo-catalog.png",
  },
  {
    id: 5,
    alt: "Layers",
    src: "/images/company-logo-quotient.png",
  },
  {
    id: 6,
    alt: "Hourglass",
    src: "/images/company-logo-hourglass.png",
    mobileOnly: true,
  },
];
