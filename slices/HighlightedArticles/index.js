import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
import { useRef } from "react";

// register();

/**
 * @typedef {import("@prismicio/client").Content.HighlightedArticlesSlice} HighlightedArticlesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HighlightedArticlesSlice>} HighlightedArticlesProps
 * @param {HighlightedArticlesProps}
 */
const HighlightedArticles = ({ slice }) => {
  const swiper = useSwiper();
  const slider = useRef(null);

  const formatDate = (date) => {
    let splitDate = date.split("-");
    let year = splitDate[0];
    let month = splitDate[1];
    let day = splitDate[2];

    switch (month) {
      case "01":
        return `January ${day}, ${year}`;
      case "02":
        return `February ${day}, ${year}`;
      case "03":
        return `March ${day}, ${year}`;
      case "04":
        return `April ${day}, ${year}`;
      case "05":
        return `May ${day}, ${year}`;
      case "06":
        return `June ${day}, ${year}`;
      case "07":
        return `July ${day}, ${year}`;
      case "08":
        return `August ${day}, ${year}`;
      case "09":
        return `September ${day}, ${year}`;
      case "10":
        return `October ${day}, ${year}`;
      case "11":
        return `November ${day}, ${year}`;
      case "12":
        return `December ${day}, ${year}`;
      default:
        break;
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="highlighted_blogs"
    >
      <div className="highlighted_blogs_wrapper max-width">
        <div className="highlighted_blogs_headline">
          <PrismicRichText field={slice?.primary?.headline} />
        </div>

        <div className="blog_slider">
          <button
            className="blog_slider_prev"
            onClick={() => slider.current?.slidePrev()}
          >
            <svg
              width="17"
              height="28"
              viewBox="0 0 17 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 3L3 14L14 25"
                stroke="white"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
            </svg>
          </button>
          <button
            className="blog_slider_next"
            onClick={() => slider.current?.slideNext()}
          >
            <svg
              width="17"
              height="28"
              viewBox="0 0 17 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 25L14 14L3 3"
                stroke="white"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
            </svg>
          </button>
          <Swiper
            slidesPerView={2}
            spaceBetween={36}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            onBeforeInit={(swiper) => {
              slider.current = swiper;
            }}
            breakpoints={{
              1025: {
                slidesPerView: 2,
              },
              765: {
                slidesPerView: 1,
              },
              1: {
                slidesPerView: 1,
              },
            }}
          >
            {slice.items.map((item, index) => (
              <SwiperSlide key={index} className="blog_slider_item">
                <PrismicLink href="">
                  <figure className="blog_slider_item_figure">
                    <img
                      src={item.blogs.data?.image.url}
                      alt={item.blogs.data?.image.alt}
                      className="blog_slider_item_image"
                    />
                  </figure>

                  <div className="blog_slider_item_info">
                    <div className="blog_slider_item_date">
                      <p>{formatDate(item.blogs.data?.date)}</p>
                    </div>
                    <div className="blog_slider_item_headline">
                      <PrismicRichText
                        field={item.blogs.data?.headline}
                        components={{
                          heading1: ({ children }) => <h4>{children}</h4>,
                        }}
                      />
                    </div>
                    <div className="blog_slider_item_description">
                      <PrismicRichText field={item.blogs.data?.description} />
                    </div>
                  </div>
                </PrismicLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HighlightedArticles;
