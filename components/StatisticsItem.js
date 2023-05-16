import { PrismicRichText } from "@prismicio/react";
import React from "react";

const StatisticsItem = ({ number, signColor, sign, description }) => {
  return (
    <div className="statistics_item">
      <div className="statistics_number">
        <div className="statistics_number_text">
          <PrismicRichText field={number} />
        </div>

        <div
          className="statistics_number_sign"
          style={{
            color: signColor,
          }}
        >
          <PrismicRichText field={sign} />
        </div>
      </div>

      <div className="statistics_description">
        <PrismicRichText field={description} />
      </div>
    </div>
  );
};

export default StatisticsItem;
