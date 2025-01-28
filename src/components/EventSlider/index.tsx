import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import breakpoints from "@/utils/breakpoints";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { EventItem, SectionItem } from "@/types";
import useStore from "@/store/useStore";
import EventSliderButtonNext from "@/components/EventSlider/EventSliderButtonNext";
import EventSliderButtonPrev from "@/components/EventSlider/EventSliderButtonPrev";
import SectionSlider from "@/components/SectionSlider";
import useWindowSize from "@/utils/useWindowSize";

const Event = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: default;

  @media (max-width: ${breakpoints.sm}px) {
    gap: 10px;
  }
`;

const EventYear = styled.div`
  color: var(--iris-100);
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(18px, 2vw, 30px);
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const EventDescription = styled.div`
  color: var(--black-blue);
  font-size: clamp(14px, 2vw, 20px);
  font-weight: 400;
  line-height: clamp(20px, 2vw, 30px);
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const EventSliderWrapper = styled.div`
  position: relative;
  padding: 0 80px;

  @media (max-width: ${breakpoints.sm}px) {
    padding: 0 20px;
    margin-top: 56px;
  }
`;

const EventSlider: React.FC = () => {
  const { sections, activeSection }: { events: EventItem[] } = useStore();

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const container = useRef<HTMLDivElement>(null);

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

  const [events, setEvents] = useState<SectionItem>(
    sections[activeSection].events,
  );

  const { width } = useWindowSize();

  return (
    <EventSliderWrapper ref={container}>
      {width > breakpoints.sm && <EventSliderButtonPrev ref={prevRef} />}
      {width > breakpoints.sm && <EventSliderButtonNext ref={nextRef} />}

      <style jsx="true">{`
        .swiper-button-disabled {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .swiper-slide {
          width: 340px;
        }

        .swiper-pagination {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
        }

        .swiper-pagination-bullet {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--line-color);
          transition: opacity 0.3s ease-in-out;
        }

        .swiper-pagination-bullet-active {
          background-color: var(--black-blue);
        }

        @media (max-width: ${breakpoints.sm}px) {
          .swiper-slide {
            width: 165px;
          }
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
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
        breakpoints={{
          [breakpoints.sm]: {
            spaceBetween: 70,
          },
        }}
        pagination={
          width < breakpoints.sm
            ? {
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                renderBullet: (index, className) => {
                  return `<span class="${className}"></span>`;
                },
              }
            : false
        }
      >
        {events.map((item, index) => (
          <SwiperSlide key={index}>
            <Event>
              <EventYear>{item.year}</EventYear>
              <EventDescription>{item.description}</EventDescription>
            </Event>
          </SwiperSlide>
        ))}
      </Swiper>

      {width < breakpoints.sm && <SectionSlider />}
    </EventSliderWrapper>
  );
};

export default EventSlider;
