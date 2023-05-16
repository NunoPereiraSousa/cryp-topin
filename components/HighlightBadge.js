import { PrismicRichText } from "@prismicio/react";
import React from "react";

const HighlightBadge = ({ description, icon }) => {
  return (
    <div className="highlight_badge">
      <img src={icon.url} alt={icon.alt} className="highlight_badge_image" />

      <div className="highlight_badge_description">
        <PrismicRichText field={description} />
      </div>
    </div>
  );
};

export default HighlightBadge;
