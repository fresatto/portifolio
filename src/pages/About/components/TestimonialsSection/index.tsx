import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import Testimonial from "../Testimonial";
import InfoSection from "../../../../components/InfoSection";

const TestimonialsSection: React.FC = () => {
  const [blockContainerAnimation, setBlockContainerAnimation] = useState(false);

  return (
    <InfoSection title="Depoimentos">
      <FormatQuoteIcon fontSize="large" color="action" />
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <Testimonial
            blockContainerAnimation={blockContainerAnimation}
            onFirstContainerAnimationCompleted={() => {
              setBlockContainerAnimation(true);
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial blockContainerAnimation />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial blockContainerAnimation />
        </SwiperSlide>
      </Swiper>
    </InfoSection>
  );
};

export default TestimonialsSection;
