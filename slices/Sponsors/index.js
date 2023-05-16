import SponsorImage from "@/components/SponsorImage";

/**
 * @typedef {import("@prismicio/client").Content.SponsorsSlice} SponsorsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SponsorsSlice>} SponsorsProps
 * @param {SponsorsProps}
 */
const Sponsors = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="sponsors"
    >
      <div className="sponsors_wrapper max-width">
        <div className="sponsors_grid">
          {slice?.items?.map((item, index) => (
            <SponsorImage key={index} image={item.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
