import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 240px;
  min-height: 100vh;
`;

const ContainerLine = styled.div<{
  $position: "left" | "right" | "center-horizontal" | "center-vertical";
}>`
  position: absolute;
  background-color: var(--line-color);

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

export default ({ children }) => {
  return (
    <Container>
      <ContainerLine $position="left" />
      <ContainerLine $position="right" />
      <ContainerLine $position="center-horizontal" />
      <ContainerLine $position="center-vertical" />

      {children}
    </Container>
  );
};
