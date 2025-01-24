import React, { forwardRef } from "react";

const EventSliderButtonPrev: React.FC = (
  props: React.ComponentPropsWithoutRef<"svg">,
  ref: React.Ref<SVGSVGElement>,
) => {
  return (
    <svg
      {...props}
      ref={ref}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="25" cy="25" r="24.5" stroke="#42567A" strokeOpacity="0.5" />
        <path
          d="M22.5001 18.75L28.7501 25L22.5001 31.25"
          stroke="#42567A"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default forwardRef<SVGSVGElement>(EventSliderButtonPrev);
