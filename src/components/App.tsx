import React from "react";
import styled from "styled-components";

import Container from "@/components/Container";
import Circle from "@/components/Circle";
import EventSlider from "@/components/EventSlider";
import SectionSlider from "@/components/SectionSlider";
import Years from "@/components/Years";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 80px;
  padding-top: 100px;
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

const BottomWrapper = styled.div`
  position: relative;
  top: 400px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <TitleWrapper>
        <TitleLine />
        <Title>Исторические даты</Title>
      </TitleWrapper>

      <Years />

      <Circle />

      <BottomWrapper>
        <SectionSlider />

        <EventSlider />
      </BottomWrapper>
    </Container>
  );
};

export default App;
