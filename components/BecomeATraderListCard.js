import React from "react";
import { PrismicRichText } from "@prismicio/react";

const BecomeATraderListCard = ({ icon, headline, description }) => {
  return (
    <div className="trader_card">
      <img src={icon.url} alt={icon.alt} className="trader_card_icon" />

      <div className="trader_card_info">
        <div className="trader_card_headline">
          <PrismicRichText field={headline} />
        </div>
        <div className="trader_card_description">
          <PrismicRichText field={description} />
        </div>
      </div>
    </div>
  );
};

export default BecomeATraderListCard;
