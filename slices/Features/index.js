import FeatureCard from "@/components/FeatureCard";
import LinkButton from "@/components/LinkButton";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param {FeaturesProps}
 */
const Features = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="features"
    >
      <div className="features_wrapper max-width">
        <div className="features_headline">
          <PrismicRichText field={slice?.primary?.headline} />
        </div>

        <div className="features_grid">
          {slice?.items?.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              headline={item.headline}
              description={item.description}
            />
          ))}
        </div>

        <div className="features_buttons">
          <LinkButton
            type="gradient"
            text={slice?.primary?.button_label}
            path={slice?.primary?.button_link}
          />

          <LinkButton
            type="white"
            text={slice?.primary?.button_label_2}
            path={slice?.primary?.button_link_2}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
