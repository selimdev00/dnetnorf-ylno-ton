import React from "react";
import styled from "styled-components";
import breakpoints from "@/utils/breakpoints";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 80px;
  padding-top: 100px;

  @media (max-width: ${breakpoints.sm}px) {
    padding-left: 20px;
    padding-top: 60px;
    width: 50%;
  }
`;

const TitleLine = styled.div`
  position: absolute;
  left: 0;
  width: 5px;
  height: 120px;
  background-image: linear-gradient(180deg, #3877ee -5%, #ef5da8 85%);

  @media (max-width: ${breakpoints.sm}px) {
    display: none;
  }
`;

const TitleText = styled.h1`
  width: 350px;
  line-height: 120%;
  font-size: clamp(20px, 5vw, 56px);
  font-weight: bold;
  color: var(--black-blue);
  text-align: left;
`;

const Title = (): React.FC => {
  return (
    <TitleWrapper>
      <TitleLine />
      <TitleText>Исторические даты</TitleText>
    </TitleWrapper>
  );
};

export default Title;
