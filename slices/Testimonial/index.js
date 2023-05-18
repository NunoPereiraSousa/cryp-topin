import TestimonialCard from "@/components/TestimonialCard";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialSlice} TestimonialSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSlice>} TestimonialProps
 * @param {TestimonialProps}
 */
const Testimonial = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="testimonial"
    >
      <div className="testimonial_wrapper max-width">
        <div className="testimonial_info">
          <div className="testimonial_headline">
            <PrismicRichText field={slice?.primary?.headline} />
          </div>
          <div className="testimonial_description">
            <PrismicRichText field={slice?.primary?.description} />
          </div>
        </div>

        <div className="testimonial_list">
          {slice?.items?.map((item, index) => (
            <TestimonialCard
              key={index}
              profileImage={item.profile_image}
              name={item.name}
              rating={item.rating}
              role={item.role}
              quote={item.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
