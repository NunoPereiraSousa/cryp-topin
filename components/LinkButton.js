import { PrismicLink, PrismicText } from "@prismicio/react";
import React from "react";
import clsx from "clsx";

const LinkButton = ({ path, text, type }) => {
  return (
    <PrismicLink
      href={path}
      className={clsx(
        "button",
        type === "gradient" && "gradient",
        type === "dark" && "dark",
        type === "grey" && "grey",
        type === "white" && "white"
      )}
    >
      <PrismicText field={text} />
    </PrismicLink>
  );
};

export default LinkButton;
