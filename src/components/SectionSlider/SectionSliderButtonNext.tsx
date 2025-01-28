import React, { forwardRef } from "react";
import SectionSliderButton from "@/components/SectionSlider/SectionSliderButton";

const SectionSliderButtonPrev: React.FC = (
  props: React.ComponentPropsWithoutRef<"button">,
  ref: React.Ref<HTMLButtonElement>,
) => {
  return (
    <SectionSliderButton {...props} ref={ref}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle
            cx="25"
            cy="25"
            r="24.5"
            stroke="#42567A"
            strokeOpacity="0.5"
          />
          <path
            d="M22.5001 18.75L28.7501 25L22.5001 31.25"
            stroke="#42567A"
            strokeWidth="2"
          />
        </g>
      </svg>
    </SectionSliderButton>
  );
};

export default forwardRef<HTMLButtonElement>(SectionSliderButtonPrev);
