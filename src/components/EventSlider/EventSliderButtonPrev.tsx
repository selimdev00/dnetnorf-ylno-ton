import React, { forwardRef } from "react";
import EventSliderButton from "@/components/EventSlider/EventSliderButton";

const EventSliderButtonPrev: React.FC = (
  props: React.ComponentPropsWithoutRef<"button">,
  ref: React.Ref<HTMLButtonElement>,
) => {
  return (
    <EventSliderButton {...props} ref={ref} $type="prev">
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 11L2 6L7 1" stroke="#3877EE" strokeWidth="2" />
      </svg>
    </EventSliderButton>
  );
};

export default forwardRef<HTMLButtonElement>(EventSliderButtonPrev);
