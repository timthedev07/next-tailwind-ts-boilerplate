import { FC, ReactNode } from "react";
import { DefaultSeo } from "next-seo";
import defaultConfig from "../lib/seo-config";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
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
      <DefaultSeo {...defaultConfig} />
      <div id="App">{children}</div>
    </>
  );
};
