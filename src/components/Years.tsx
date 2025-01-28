import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import useStore from "@/store/useStore";
import styled from "styled-components";

const YearsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 90px;
`;

const YearItem = styled.div<{ $color: string }>`
  color: var(--${(props) => props.$color});
  font-size: 200px;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -0.02em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const Years = () => {
  const { sections, activeSection } = useStore();

  const container = useRef<HTMLDivElement | null>(null);

  const { startYear, endYear } = sections[activeSection];

  const startYearMemo = useRef(startYear);
  const endYearMemo = useRef(endYear);

  useGSAP(
    () => {
      const { current: start } = startYearMemo;
      const { current: end } = endYearMemo;

      if (startYear === start || endYear === end) return;

      gsap.from(".begin", {
        innerText: start,
        duration: 1,
        snap: {
          innerText: 1,
        },
      });

      gsap.from(".end", {
        innerText: end,
        duration: 1,
        snap: {
          innerText: 1,
        },
      });

      if (start !== startYear) {
        startYearMemo.current = startYear;
      }

      if (end !== endYear) {
        endYearMemo.current = endYear;
      }
    },
    {
      dependencies: [activeSection],
      scope: container,
    },
  );

  return (
    <YearsWrapper ref={container}>
      <YearItem $color="iris-100" className="begin">
        {startYear}
      </YearItem>
      <YearItem $color="fuschia-100" className="end">
        {endYear}
      </YearItem>
    </YearsWrapper>
  );
};

export default Years;
