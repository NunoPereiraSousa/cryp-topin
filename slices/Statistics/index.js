import StatisticsItem from "@/components/StatisticsItem";

/**
 * @typedef {import("@prismicio/client").Content.StatisticsSlice} StatisticsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StatisticsSlice>} StatisticsProps
 * @param {StatisticsProps}
 */
const Statistics = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="statistics"
    >
      <div className="statistics_wrapper max-width">
        <div className="statistics_grid">
          {slice?.items?.map((item, index) => (
            <StatisticsItem
              key={index}
              number={item.number}
              sign={item.sign}
              signColor={item.sign_color}
              description={item.description}
            />
          ))}
        </div>

        <figure className="statistics_figure">
          <img
            src={slice?.primary?.image.url}
            alt={slice?.primary?.image.alt}
            className="statistcs_image"
          />
        </figure>
      </div>
    </section>
  );
};

export default Statistics;
