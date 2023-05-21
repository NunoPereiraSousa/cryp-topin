import React from "react";
import { PrismicRichText } from "@prismicio/react";

const TestimonialCard = ({ profileImage, name, role, rating, quote }) => {
  return (
    <div className="testimonial_card">
      <div className="testimonial_card_details">
        <div className="testimonial_card_details_info">
          <figure className="testimonial_card_figure">
            <img
              src={profileImage.url}
              alt={profileImage.alt}
              className="testimonial_card_image"
            />
          </figure>

          <div className="testimonial_card_details_person">
            <div className="testimonial_card_details_person_name">
              <PrismicRichText field={name} />
            </div>
            <div className="testimonial_card_details_person_role">
              <PrismicRichText field={role} />
            </div>
          </div>
        </div>

        <div className="testimonial_card_details_rating">
          {[...new Array(rating)].map((i) => (
            <svg
              key={i}
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8609 1.94773C12.4596 0.10511 15.0664 0.105107 15.6652 1.94773L17.3236 7.05175C17.5913 7.87579 18.3592 8.43372 19.2257 8.43372H24.5923C26.5298 8.43372 27.3353 10.9129 25.7679 12.0517L21.4262 15.2062C20.7252 15.7155 20.4319 16.6182 20.6996 17.4423L22.358 22.5463C22.9567 24.3889 20.8478 25.9212 19.2804 24.7824L14.9386 21.6279C14.2376 21.1186 13.2884 21.1186 12.5875 21.6279L8.24573 24.7824C6.67831 25.9212 4.56934 24.3889 5.16805 22.5463L6.82644 17.4423C7.09419 16.6182 6.80088 15.7155 6.0999 15.2062L1.75816 12.0518C0.190737 10.9129 0.996285 8.43372 2.93373 8.43372H8.30042C9.16687 8.43372 9.93478 7.8758 10.2025 7.05175L11.8609 1.94773Z"
                fill="#FFB04E"
              />
            </svg>
          ))}
        </div>
      </div>

      <div className="testimonial_card_quote">
        <PrismicRichText field={quote} />
      </div>
    </div>
  );
};

export default TestimonialCard;
