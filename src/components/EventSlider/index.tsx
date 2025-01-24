import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

import EventSliderButtonPrev from "@/components/EventSlider/EventSliderButtonPrev";
import EventSliderButtonNext from "@/components/EventSlider/EventSliderButtonNext";
import { EventItem } from "@/types";
import useStore from "@/store/useStore";

const EventPage = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18.13px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const EventSliderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0 60px 0;
`;

const Event = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EventYear = styled.div`
  color: var(--iris-100);
  font-family: "Bebas Neue", sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const EventDescription = styled.div`
  color: var(--black-blue);
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const EventSliderWrapper = styled.div`
  position: relative;
  padding: 0 80px;
`;

const EventSlider: React.FC = () => {
  const { sections, activeSection }: { events: EventItem[] } = useStore();

  const prevRef = useRef<SVGSVGElement | null>(null);
  const nextRef = useRef<SVGSVGElement | null>(null);

  return (
    <EventSliderWrapper>
      <EventPage>02/06</EventPage>

      <EventSliderButtons>
        <EventSliderButtonPrev ref={prevRef} />
        <EventSliderButtonNext ref={nextRef} />
      </EventSliderButtons>

      <Swiper
        modules={[Navigation]}
        spaceBetween={70}
        slidesPerView="auto"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {sections[activeSection].events.map((item, index) => (
          <SwiperSlide key={index} style={{ width: "340px" }}>
            <Event>
              <EventYear>{item.year}</EventYear>
              <EventDescription>{item.description}</EventDescription>
            </Event>
          </SwiperSlide>
        ))}
      </Swiper>
    </EventSliderWrapper>
  );
};

export default EventSlider;
