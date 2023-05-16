import { PrismicRichText } from "@prismicio/react";
import StepByStepCard from "@/components/StepByStepCard";

/**
 * @typedef {import("@prismicio/client").Content.StepByStepSlice} StepByStepSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StepByStepSlice>} StepByStepProps
 * @param {StepByStepProps}
 */
const StepByStep = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="step"
    >
      <div className="step_wrapper max-width">
        <div className="step_headline">
          <PrismicRichText field={slice?.primary?.headline} />
        </div>

        <div className="step_grid">
          {slice?.items?.map((item, index) => (
            <StepByStepCard
              key={index}
              text={item.headline}
              description={item.description}
              image={item.image}
              url={item.button_link}
              linkText={item.button_label}
              order={item.order}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
