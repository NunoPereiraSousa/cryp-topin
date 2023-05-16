import clsx from "clsx";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

// gsap.registerPlugin(ScrollTrigger);

export const Heading = ({ as: Comp = "h1", size = "xxl", children }) => {
  const element = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     element.current,
  //     {
  //       autoAlpha: 0,
  //       yPercent: 40,
  //     },
  //     {
  //       autoAlpha: 1,
  //       yPercent: 0,
  //       duration: 1,
  //       ease: "expo.out",
  //       delay: 0.2,
  //       scrollTrigger: {
  //         trigger: element.current,
  //         // markers: true,
  //         start: "top bottom",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <Comp
      ref={element}
      className={clsx(
        "heading",
        size === "xxl" && "xxl",
        size === "xl" && "xl",
        size === "lg" && "lg",
        size === "md" && "md",
        size === "sm" && "sm",
        size === "xsm" && "xsm"
      )}
    >
      {children}
    </Comp>
  );
};
