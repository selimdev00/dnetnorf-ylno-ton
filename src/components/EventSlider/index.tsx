import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { EventItem } from "@/types";
import useStore from "@/store/useStore";
import EventSliderButtonNext from "@/components/EventSlider/EventSliderButtonNext";
import EventSliderButtonPrev from "@/components/EventSlider/EventSliderButtonPrev";

const Event = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: default;
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

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const container = useRef(null);

  useGSAP(() => {
    gsap.set(container.current, { opacity: 0, y: 20 });
  });

  useGSAP(
    () => {
      gsap.to(container.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => setEvents(sections[activeSection].events),
      });

      gsap.set(container.current, { opacity: 0, y: 20, delay: 0.5 });
      gsap.to(container.current, { opacity: 1, y: 0, delay: 1 });
    },
    { dependencies: [activeSection] },
  );

  const [events, setEvents] = useState(sections[activeSection].events);

  return (
    <EventSliderWrapper ref={container}>
      <EventSliderButtonPrev ref={prevRef} />
      <EventSliderButtonNext ref={nextRef} />

      <style jsx="true">{`
        .swiper-button-disabled {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>

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
        touchStartPreventDefault={false}
      >
        {events.map((item, index) => (
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
