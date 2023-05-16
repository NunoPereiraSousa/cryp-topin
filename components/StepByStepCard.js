import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import React from "react";

const StepByStepCard = ({ text, description, url, linkText, image, order }) => {
  return (
    <div className="step_card">
      <div
        className="step_card_info"
        style={{
          order: order === false ? 1 : 3,
        }}
      >
        <div className="step_card_headline">
          <PrismicRichText field={text} />
        </div>

        <div className="step_card_description">
          <PrismicRichText field={description} />
        </div>

        <PrismicLink href={url} className="step_link">
          <PrismicText field={linkText} />
        </PrismicLink>
      </div>

      <span className="step_card_border"></span>

      <img
        src={image.url}
        alt={image.alt}
        className="step_image"
        style={{
          order: order === false ? 3 : 1,
        }}
      />
    </div>
  );
};

export default StepByStepCard;
