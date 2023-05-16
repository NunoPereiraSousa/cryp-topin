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
    >
      Placeholder component for become_a_trader (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BecomeATrader;
