import React, { forwardRef } from "react";
import EventSliderButton from "@/components/EventSlider/EventSliderButton";

const SectionSliderButtonPrev: React.FC = (
  props: React.ComponentPropsWithoutRef<"button">,
  ref: React.Ref<HTMLButtonElement>,
) => {
  return (
    <EventSliderButton {...props} ref={ref} $type="next">
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
      </svg>
    </EventSliderButton>
  );
};

export default forwardRef<HTMLButtonElement>(SectionSliderButtonPrev);
