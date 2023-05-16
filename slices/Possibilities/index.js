import LinkButton from "@/components/LinkButton";
import PossibilityBadge from "@/components/PossibilityBadge";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.PossibilitiesSlice} PossibilitiesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PossibilitiesSlice>} PossibilitiesProps
 * @param {PossibilitiesProps}
 */
const Possibilities = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="possibilities"
    >
      <div className="possibilities_wrapper max-width">
        <div className="possibilities_info">
          <div className="possibilities_headline">
            <PrismicRichText field={slice?.primary?.headline} />
          </div>

          <div className="possibilities_description">
            <PrismicRichText field={slice?.primary?.description} />
          </div>

          <div className="possibilities_grid">
            {slice?.items?.map((item, index) => (
              <PossibilityBadge
                key={index}
                text={item.description}
                color={item.color}
                backgroundColor={item.background_color}
                icon={item.icon}
              />
            ))}
          </div>

          {/* <LinkButton
            path={slice?.primary?.button_link}
            text={slice?.primary?.button_label}
            type="white"
          /> */}
        </div>

        <figure className="possibilities_figure">
          <img
            src={slice?.primary?.image.url}
            alt={slice?.primary?.image.alt}
            className="possibilities_image"
          />
        </figure>
      </div>
    </section>
  );
};

export default Possibilities;
