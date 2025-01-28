import SectionSliderButtonPrev from "@/components/SectionSlider/SectionSliderButtonPrev";
import SectionSliderButtonNext from "@/components/SectionSlider/SectionSliderButtonNext";
import React from "react";
import styled from "styled-components";
import useStore from "@/store/useStore";

import breakpoints from "@/utils/breakpoints";

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0 60px 0;

  @media (max-width: ${breakpoints.sm}px) {
    margin: 0;
    gap: 4px;
  }
`;

const SectionSliderButtons = (): React.FC => {
  const { activeSection, sections, setActiveSection } = useStore();

  return (
    <Buttons>
      <SectionSliderButtonPrev
        onClick={() => setActiveSection(activeSection - 1)}
        disabled={activeSection === 0}
      />
      <SectionSliderButtonNext
        onClick={() => setActiveSection(activeSection + 1)}
        disabled={activeSection === sections.length - 1}
      />
    </Buttons>
  );
};

export default SectionSliderButtons;
