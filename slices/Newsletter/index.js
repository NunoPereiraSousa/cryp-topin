import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.NewsletterSlice} NewsletterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsletterSlice>} NewsletterProps
 * @param {NewsletterProps}
 */
const Newsletter = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="newsletter"
    >
      <div
        className="newsletter_wrapper"
        style={{
          backgroundImage: `url(${slice?.primary.image.url})`,
        }}
      >
        <div className="newsletter_headline">
          <PrismicRichText field={slice?.primary?.headline} />
        </div>

        <div className="newsletter_input_wrapper">
          <input
            type="text"
            className="newsletter_input"
            placeholder={slice?.primary?.input_label}
          />
          <button className="newsletter_button">
            {slice?.primary?.button_label[0].text}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
