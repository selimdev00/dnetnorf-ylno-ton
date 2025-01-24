import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const items = [
  {
    year: 2015,
    description:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
  {
    year: 2015,
    description:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
  {
    year: 2015,
    description:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
  {
    year: 2015,
    description:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
  {
    year: 2015,
    description:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
  {
    year: 2015,
    description:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
];

const EventSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  `;

  const PaginationPage = styled.div``;

  const PaginationButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  `;

  const Event = styled.div`
    display: flex;
    flex-direction: column;
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

  return (
    <EventSliderWrapper>
      <PaginationWrapper>
        <PaginationPage>02/06</PaginationPage>
        <PaginationButtons></PaginationButtons>
      </PaginationWrapper>

      {/* Кастомные кнопки */}
      <PaginationButtons>
        <svg
          ref={prevRef}
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="24.5"
            transform="matrix(-1 0 0 1 50 0)"
            stroke="#42567A"
            stroke-opacity="0.5"
          />
          <path
            d="M27.4999 18.75L21.2499 25L27.4999 31.25"
            stroke="#42567A"
            stroke-width="2"
          />
        </svg>
        <svg
          ref={nextRef}
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <circle
              cx="25"
              cy="25"
              r="24.5"
              stroke="#42567A"
              stroke-opacity="0.5"
            />
            <path
              d="M22.5001 18.75L28.7501 25L22.5001 31.25"
              stroke="#42567A"
              stroke-width="2"
            />
          </g>
        </svg>
      </PaginationButtons>

      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView="auto"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          // Привязка кнопок после инициализации Swiper
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {items.map((item, index) => (
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
