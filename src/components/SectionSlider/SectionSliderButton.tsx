import styled from "styled-components";
import breakpoints from "@/utils/breakpoints";

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

  svg {
    width: 50px;
    height: 50px;

    @media (max-width: ${breakpoints.sm}px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export default SectionSliderButton;
