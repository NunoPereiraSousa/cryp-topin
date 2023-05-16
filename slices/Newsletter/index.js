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
    >
      Placeholder component for newsletter (variation: {slice.variation}) Slices
    </section>
  );
};

export default Newsletter;
