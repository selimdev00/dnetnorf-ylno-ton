import styled from "styled-components";

const SectionSliderButton = styled.button`
  border: 0;
  z-index: 10;
  opacity: 100;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export default SectionSliderButton;
