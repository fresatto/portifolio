import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import Testimonial from "../Testimonial";
import InfoSection from "../../../../components/InfoSection";

const TestimonialsSection: React.FC = () => {
  return (
    <InfoSection title="Depoimentos">
      <FormatQuoteIcon fontSize="large" color="action" />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // modules={[Autoplay, Pagination, Navigation]}
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
