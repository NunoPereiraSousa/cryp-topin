import LinkButton from "@/components/LinkButton";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero"
    >
      <div className="hero_wrapper">
        <div className="hero_info">
          <div className="hero_tag">
            <div
              className="hero_tag_description"
              style={{
                backgroundColor: slice?.primary?.tag_color,
                color: slice?.primary?.tag_text_color,
              }}
            >
              <PrismicRichText field={slice?.primary?.tag} />
            </div>
          </div>

          <div className="hero_headline">
            <PrismicRichText field={slice?.primary?.headline} />
          </div>

          <div className="hero_description">
            <PrismicRichText field={slice?.primary?.description} />
          </div>

          <LinkButton
            path={slice?.primary?.button_link.url}
            text={slice?.primary?.button_label}
            type="grey"
          />

          <div className="hero_stickers">
            {slice?.items?.map((image, index) => (
              <figure className="hero_sticker_figure" key={index}>
                <img
                  src={image.image.url}
                  alt={image.image.alt}
                  className="hero_sticker"
                />
              </figure>
            ))}
          </div>
        </div>

        <figure className="hero_figure">
          <img
            src={slice?.primary?.hero_image.url}
            alt={slice?.primary?.hero_image.alt}
            className="hero_image"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
