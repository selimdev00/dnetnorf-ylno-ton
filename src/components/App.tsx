import React from "react";
import styled from "styled-components";

import Container from "@/components/Container";
import Circle from "@/components/Circle";
import EventSlider from "@/components/EventSlider";
import SectionSlider from "@/components/SectionSlider";
import Years from "@/components/Years";
import Title from "@/components/Title";
import breakpoints from "@/utils/breakpoints";
import useWindowSize from "@/utils/useWindowSize";

const BottomWrapper = styled.div`
  position: relative;
  top: 400px;

  @media (max-width: ${breakpoints.sm}px) {
    top: 0;
  }
`;

const SeparatorWrapper = styled.div`
  padding: 0 26px;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: var(--line-color);
  margin-top: 14px;
  margin-bottom: 18px;
`;

const App: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <Container>
      <Title />

      <Years />

      <Circle />

      <BottomWrapper>
        {width > breakpoints.sm && <SectionSlider />}

        {width < breakpoints.sm && (
          <SeparatorWrapper>
            <Separator />
          </SeparatorWrapper>
        )}

        <EventSlider />
      </BottomWrapper>
    </Container>
  );
};

export default App;
