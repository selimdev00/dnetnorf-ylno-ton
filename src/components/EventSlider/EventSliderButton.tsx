import React from "react";
import styled from "styled-components";

const EventSliderButton = styled.button<{
  $type: "prev" | "next";
  ref: React.Ref<HTMLButtonElement>;
}>`
  width: 40px;
  height: 40px;
  background: white;
  box-shadow: 0px 0px 15px 0px #3877ee1a;
  border-radius: 50%;
  border: 0;
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 100;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  ${(props) => {
    switch (props.$type) {
      case "prev":
        return `
          left: 40px;
          transform: translate(-50%, -50%);
        `;
      case "next":
        return `
          right: 40px;
          transform: translate(50%, -50%);
        `;
    }
  }}
`;

export default EventSliderButton;
