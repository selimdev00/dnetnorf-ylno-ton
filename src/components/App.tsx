import React, { useEffect } from "react";
import Circle from "./Circle";
import styled from "styled-components";
import Swiper from "swiper";
import EventSlider from "./EventSlider";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const ContainerLine = styled.div<{
  $position: "left" | "right" | "center-horizontal" | "center-vertical";
}>`
  position: absolute;
  background-color: var(--black-blue);
  opacity: 0.1;

  ${(props) => {
    const weight = "1px";
    switch (props.$position) {
      case "left":
        return `
          top: 0;
          left: 0;
          width: ${weight};
          height: 100%;
        `;
      case "right":
        return `
          top: 0;
          right: 0;
          width: ${weight};
          height: 100%;
        `;
      case "center-horizontal":
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: ${weight};
        `;
      case "center-vertical":
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${weight};
          height: 100%;
        `;
    }
  }}
`;

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

const App = () => {
  return (
    <Container>
      <ContainerLine $position="left" />
      <ContainerLine $position="right" />
      <ContainerLine $position="center-horizontal" />
      <ContainerLine $position="center-vertical" />

      <TitleWrapper>
        <TitleLine />
        <Title>Исторические даты</Title>
      </TitleWrapper>

      <YearsWrapper>
        <YearItem $color="iris-100">2015</YearItem>
        <YearItem $color="fuschia-100">2022</YearItem>
      </YearsWrapper>

      <Circle />

      <EventSlider />
    </Container>
  );
};

export default App;
