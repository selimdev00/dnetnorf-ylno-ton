import React from "react";

import SectionSliderButtonPrev from "@/components/SectionSlider/SectionSliderButtonPrev";
import SectionSliderButtonNext from "@/components/SectionSlider/SectionSliderButtonNext";
import styled from "styled-components";
import useStore from "@/store/useStore";

const SectionPage = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18.13px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const SectionSliderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0 60px 0;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 80px;
`;

const displayNumber = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

const SectionSlider: React.FC = () => {
  const { activeSection, sections, setActiveSection } = useStore();

  return (
    <SectionWrapper>
      <SectionPage>
        {displayNumber(activeSection + 1)}/{displayNumber(sections.length)}
      </SectionPage>

      <SectionSliderButtons>
        <SectionSliderButtonPrev
          onClick={() => setActiveSection(activeSection - 1)}
          disabled={activeSection === 0}
        />
        <SectionSliderButtonNext
          onClick={() => setActiveSection(activeSection + 1)}
          disabled={activeSection === sections.length - 1}
        />
      </SectionSliderButtons>
    </SectionWrapper>
  );
};

export default SectionSlider;
