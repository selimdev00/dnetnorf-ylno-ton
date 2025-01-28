import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  z-index: 20;
`;

const Circle = styled.div`
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid var(--black-blue);
  background-color: var(--black-blue);
  z-index: 20;
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 30;
  margin: 0;
  opacity: 0;
  font-size: 20px;
  color: var(--black-blue);
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  right: -120px;
  transform: translateY(-50%) scale(0);
  transform-origin: left;
  margin: 0;
  width: 100px;
  color: var(--black-blue);
  text-align: start;
`;

const Dot = ({ children, topic, onClick, isActive = false }): React.FC => {
  const container = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  useGSAP(
    () => {
      if (!container.current) return;

      if (isHovered || isActive) {
        gsap.to(".circle", {
          width: 60,
          height: 60,
          backgroundColor: "#f5f6fa",
        });

        gsap.to(".text", {
          opacity: 1,
        });
      }

      if (!isHovered && !isActive) {
        gsap.to(".circle", {
          width: 6,
          height: 6,
          backgroundColor: "#42567A",
        });

        gsap.to(".text", {
          opacity: 0,
        });
      }
    },
    { dependencies: [isHovered, isActive], scope: container },
  );

  useGSAP(
    () => {
      if (!container.current) return;

      if (isActive) {
        gsap.to(".title", {
          scale: 1,
          opacity: 1,
          delay: 0.5,
        });
      }
    },
    { dependencies: [isActive], scope: container, revertOnUpdate: true },
  );

  return (
    <Wrapper
      ref={container}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Circle className={`circle`}></Circle>
      <Text className={`text`}>{children}</Text>
      <Title className={`title`}>{topic}</Title>
    </Wrapper>
  );
};

export default Dot;
