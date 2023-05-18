import React from "react";
import { PrismicRichText } from "@prismicio/react";

const FeatureCard = ({ icon, headline, description }) => {
  return (
    <div className="feature_card">
      <img src={icon.url} alt={icon.alt} className="feature_card_icon" />

      <div className="feature_card_headline">
        <PrismicRichText field={headline} />
      </div>

      <div className="feature_card_description">
        <PrismicRichText field={description} />
      </div>
    </div>
  );
};

export default FeatureCard;
