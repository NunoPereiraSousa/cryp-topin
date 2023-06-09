import clsx from "clsx";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

// gsap.registerPlugin(ScrollTrigger);

export const Paragraph = ({ children }) => {
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
  //       },
  //     }
  //   );
  // }, []);

  return (
    <p ref={element} className="paragraph">
      {children}
    </p>
  );
};
