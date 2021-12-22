import { FC } from "react";
import Head from "next/head";

export const metadata = {
  title: "",
  image: "",
  description: "",
  domain: "https://something.com",
};

export const Layout: FC = ({ children }) => {
  // Uncomment this part to switch between desktop & mobile nav
  // const [windowSize, setWindowSize] = useState<number>(0);

  // useEffect(() => {
  //   setWindowSize(window.innerWidth);
  //   const resizeHandler = () => {
  //     setWindowSize(window.innerWidth);
  //   };
  //   window.addEventListener("resize", resizeHandler);

  //   return () => {
  //     window.removeEventListener("resize", resizeHandler);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.title} />
        <meta name="keywords" content="one, two, three" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="0 days" />
        <meta name="author" content="Tim <timpersonal07@gmail.com>" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:url" content={metadata.domain} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@timthedev07" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>

      <div id="App">{children}</div>
    </>
  );
};
