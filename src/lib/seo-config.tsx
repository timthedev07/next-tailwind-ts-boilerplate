import { DefaultSeoProps } from "next-seo";

const defaultConfig: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: "",
  },
  twitter: {
    site: "@timthedev07",
    cardType: "summary",
  },
  defaultTitle: "",
  titleTemplate: "%s | ",
  description: "",
  additionalMetaTags: [
    {
      httpEquiv: "content-type",
      content: "text/html; charset=utf-8",
    },
    {
      name: "revisit-after",
      content: "0 days",
    },
    {
      name: "author",
      content: "Tim <timpersonal07@gmail.com>",
    },
    {
      name: "google-site-verification",
      content: "",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "keywords",
      content: "",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/logo192.png",
    },
  ],
};

export default defaultConfig;
