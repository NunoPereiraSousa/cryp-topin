import BecomeATraderListCard from "@/components/BecomeATraderListCard";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.BecomeATraderSlice} BecomeATraderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BecomeATraderSlice>} BecomeATraderProps
 * @param {BecomeATraderProps}
 */
const BecomeATrader = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="trader"
    >
      <div className="trader_wrapper max-width">
        <div className="trader_headline">
          <PrismicRichText field={slice?.primary?.headline} />
        </div>

        <div className="trader_info">
          <figure className="trader_figure">
            <img
              src={slice?.primary?.image.url}
              alt={slice?.primary?.image.alt}
              className="trader_image"
            />
          </figure>

          <div className="trader_list">
            {slice?.items?.map((item, index) => (
              <BecomeATraderListCard
                key={index}
                icon={item.icon}
                headline={item.headline}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeATrader;
