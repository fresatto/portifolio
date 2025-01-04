import React from "react";
import { Swiper as SwiperBase, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import Testimonial from "../Testimonial";
import InfoSection from "../../../../components/InfoSection";

const Swiper: React.FC<SwiperProps> = (props) => {
  return <SwiperBase {...props} />;
};

const TestimonialsSection: React.FC = () => {
  return (
    <InfoSection title="Depoimentos">
      <FormatQuoteIcon fontSize="large" color="action" />
      {/* <Testimonial /> */}

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={
          {
            // delay: 2500,
            // disableOnInteraction: false,
          }
        }
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
      </Swiper>
    </InfoSection>
  );
};

export default TestimonialsSection;
