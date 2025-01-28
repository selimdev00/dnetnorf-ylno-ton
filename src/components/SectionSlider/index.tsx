import React from "react";

import styled from "styled-components";
import useStore from "@/store/useStore";
import SectionSliderButtons from "@/components/SectionSlider/SectionSliderButtons";

import breakpoints from "@/utils/breakpoints";

const SectionPage = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18.13px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 80px;

  @media (max-width: ${breakpoints.sm}px) {
    padding: 0;
    margin-top: 10px;
    position: absolute;
    bottom: -25px;
  }
`;

const displayNumber = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

const SectionSlider: React.FC = () => {
  const { activeSection, sections } = useStore();

  return (
    <SectionWrapper>
      <SectionPage>
        {displayNumber(activeSection + 1)}/{displayNumber(sections.length)}
      </SectionPage>

      <SectionSliderButtons />
    </SectionWrapper>
  );
};

export default SectionSlider;
