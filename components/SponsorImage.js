import React from "react";

const SponsorImage = ({ image }) => {
  return (
    <>
      <img src={image.url} alt={image.alt} className="sponsors_image" />
    </>
  );
};

export default SponsorImage;
