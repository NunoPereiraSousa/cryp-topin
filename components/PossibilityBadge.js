import { PrismicRichText } from "@prismicio/react";
import React from "react";

const PossibilityBadge = ({
  icon,
  text,
  backgroundColor = "inherit",
  color = "inherit",
}) => {
  return (
    <div
      className="possibility_badge"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <img src={icon.url} alt={icon.alt} className="possibility_badge_icon" />

      <div
        className="possibility_badge_description"
        style={{
          color: color,
        }}
      >
        <PrismicRichText field={text} />
      </div>
    </div>
  );
};

export default PossibilityBadge;
