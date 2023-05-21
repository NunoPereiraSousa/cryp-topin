import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import React from "react";

const Footer = ({ footer }) => {
  return (
    <footer className="footer">
      <div className="footer_wrapper max-width">
        <div className="footer_top">
          <div className="footer_top_info">
            <img
              src={footer?.logo.url}
              alt={footer?.logo.alt}
              className="footer_logo"
            />
            <div className="footer_description">
              <PrismicRichText field={footer?.description} />
            </div>
          </div>

          <div className="footer_socials">
            <div className="footer_socials_description">
              <PrismicRichText field={footer?.socials_label} />
            </div>
            {footer?.socials?.map((item, index) => (
              <PrismicLink key={index} href={item.link}>
                <img
                  src={item.icon.url}
                  alt={item.icon.alt}
                  className="footer_social_icon"
                />
              </PrismicLink>
            ))}
          </div>
        </div>

        <div className="footer_bottom">
          {footer?.slices?.map((item, index) => (
            <div key={index} className="footer_links_wrapper">
              <div className="footer_links_headline">
                <PrismicRichText field={item.primary.headline} />
              </div>
              <div className="footer_links_container">
                {item.items.map((link, i) => (
                  <PrismicLink key={i} href={link.link} className="footer_link">
                    <PrismicText field={link.link_label} />
                  </PrismicLink>
                ))}
              </div>
            </div>
          ))}

          <div className="footer_links_wrapper">
            <div className="footer_links_headline">
              <PrismicRichText field={footer?.terms[0]?.headline} />
            </div>
            <div className="footer_links_description">
              <PrismicRichText field={footer?.terms[0]?.description} />
            </div>
            <div className="footer_links_description">
              <PrismicRichText field={footer?.terms[0]?.description_2} />
            </div>
            <div className="footer_links_disclaimer">
              <PrismicRichText field={footer?.terms[0]?.disclaimer} />
            </div>
          </div>
        </div>

        <div className="footer_copyright">
          <div className="footer_copyright_description">
            <PrismicRichText field={footer?.copyright} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
