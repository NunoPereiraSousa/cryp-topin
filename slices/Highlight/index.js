import LinkButton from "@/components/LinkButton";
import HighlightBadge from "@/components/HighlightBadge";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HighlightSlice} HighlightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HighlightSlice>} HighlightProps
 * @param {HighlightProps}
 */
const Highlight = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={"highlight " + slice.variation}
    >
      <div className="highlight_wrapper max-width">
        <div className="highlight_info">
          <div className="highlight_label">
            <PrismicRichText field={slice?.primary?.label} />
          </div>

          <LinkButton
            path={slice?.primary?.button_link}
            text={slice?.primary?.button_label}
            type="gradient"
          />
        </div>

        <div className="highlight_banner">
          <div className="highlight_banner_info">
            <div>
              <div className="highlight_banner_headline">
                <PrismicRichText field={slice?.primary?.headline} />
              </div>

              <div className="highlight_banner_description">
                <PrismicRichText field={slice?.primary?.description} />
              </div>
            </div>

            <div className="highlight_banner_badges">
              {slice?.items?.map((item, index) => (
                <HighlightBadge
                  key={index}
                  icon={item.icon}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          <figure className="highlight_banner_figure">
            <img
              src={slice?.primary?.image.url}
              alt={slice?.primary?.image.alt}
              className="highlight_banner_image"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
