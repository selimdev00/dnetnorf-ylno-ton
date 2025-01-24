import React from "react";
import styled from "styled-components";

import Container from "@/components/Container";
import Circle from "@/components/Circle";
import EventSlider from "@/components/EventSlider";
import useStore from "@/store/useStore";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 80px;
  padding-top: 184px;
`;

const TitleLine = styled.div`
  position: absolute;
  left: 0;
  width: 5px;
  height: 120px;
  background-image: linear-gradient(180deg, #3877ee -5%, #ef5da8 85%);
`;

const Title = styled.h1`
  width: 350px;
  line-height: 120%;
  font-size: 56px;
  font-weight: bold;
  color: var(--black-blue);
  text-align: left;
`;

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

const App: React.FC = () => {
  const { sections, activeSection } = useStore();

  return (
    <Container>
      <TitleWrapper>
        <TitleLine />
        <Title>Исторические даты</Title>
      </TitleWrapper>

      <YearsWrapper>
        <YearItem $color="iris-100">
          {sections[activeSection].startYear}
        </YearItem>
        <YearItem $color="fuschia-100">
          {sections[activeSection].endYear}
        </YearItem>
      </YearsWrapper>

      <Circle />

      <EventSlider />
    </Container>
  );
};

export default App;
