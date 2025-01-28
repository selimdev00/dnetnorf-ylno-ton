import React, { forwardRef } from "react";
import SectionSliderButton from "@/components/SectionSlider/SectionSliderButton";

const SectionSliderButtonPrev: React.FC = (
  props: React.ComponentPropsWithoutRef<"button">,
  ref: React.Ref<HTMLButtonElement>,
) => {
  return (
    <SectionSliderButton {...props} ref={ref}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="25"
          cy="25"
          r="24.5"
          transform="matrix(-1 0 0 1 50 0)"
          stroke="#42567A"
          strokeOpacity="0.5"
        />
        <path
          d="M27.4999 18.75L21.2499 25L27.4999 31.25"
          stroke="#42567A"
          strokeWidth="2"
        />
      </svg>
    </SectionSliderButton>
  );
};

export default forwardRef<HTMLButtonElement>(SectionSliderButtonPrev);
