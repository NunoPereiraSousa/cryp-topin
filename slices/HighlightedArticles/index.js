/**
 * @typedef {import("@prismicio/client").Content.HighlightedArticlesSlice} HighlightedArticlesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HighlightedArticlesSlice>} HighlightedArticlesProps
 * @param {HighlightedArticlesProps}
 */
const HighlightedArticles = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for highlighted_articles (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default HighlightedArticles;
