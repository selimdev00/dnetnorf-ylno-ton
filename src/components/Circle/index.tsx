import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useStore from "@/store/useStore";
import styled from "styled-components";
import Dot from "@/components/Circle/Dot";

const calculateDotPosition = (
  radius: number,
  index: number,
  total: number,
  angleOffset = 0,
): { x: number; y: number } => {
  const angle: number = ((2 * Math.PI) / total) * index + angleOffset;
  const x: number = radius + radius * Math.cos(angle);
  const y: number = radius + radius * Math.sin(angle);

  return { x, y };
};

const calculateRadToDeg = (radians: number): number =>
  (radians * 180) / Math.PI;

const CircleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 10;
`;

const CircleInner = styled.div`
  border: 1px solid var(--line-color);
  border-radius: 50%;
  position: relative;
`;

const CircleDotWrapper = styled.div`
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
`;

const Index = (): React.FC => {
  const { activeSection, sections, setActiveSection } = useStore();

  const container = useRef<HTMLDivElement | null>(null);
  const circle = useRef<HTMLDivElement | null>(null);

  const radius: number = 265;
  const startAngle: number = -Math.PI / 7;
  const totalDots: number = sections.length;

  const [dots] = useState<number[]>(sections.map(({ id }) => id));

  const { contextSafe } = useGSAP(
    () => {
      dots.forEach((_: number, index: number) => {
        const { x, y } = calculateDotPosition(
          radius,
          index,
          totalDots,
          startAngle,
        );

        gsap.set(`.dot-${index}`, { x, y });
        const clickedAngle: number = ((2 * Math.PI) / totalDots) * 0;
        const rotateBy = startAngle - clickedAngle;

        gsap.set(circle.current, {
          rotation: calculateRadToDeg(rotateBy),
        });

        dots.forEach((_, dotIndex) => {
          const angleOffset: number = -calculateRadToDeg(rotateBy);

          gsap.set(`.dot-${dotIndex}`, {
            rotation: angleOffset,
          });
        });
      });
    },
    { scope: container },
  );

  const handleDotClick = contextSafe((index: number) => {
    const clickedAngle: number = ((2 * Math.PI) / totalDots) * index;
    const rotateBy: number = startAngle - clickedAngle;
    const degrees: number = calculateRadToDeg(rotateBy);

    dots.forEach((_, dotIndex) => {
      gsap.to(`.dot-${dotIndex}`, {
        duration: 1,
        rotation: -degrees,
        ease: "power3.inOut",
      });
    });

    gsap.to(circle.current, {
      duration: 1,
      rotation: degrees,
      ease: "power2.inOut",
    });

    setActiveSection(index);
  });

  useEffect(() => {
    handleDotClick(activeSection);
  }, [activeSection]);

  return (
    <CircleWrapper ref={container}>
      <CircleInner
        ref={circle}
        style={{ height: radius * 2, width: radius * 2 }}
      >
        {dots.map((_, index) => (
          <CircleDotWrapper key={index} className={`dot-${index}`}>
            <Dot
              isActive={activeSection === index}
              topic={sections[index].topic}
              onClick={() => handleDotClick(index)}
            >
              {index + 1}
            </Dot>
          </CircleDotWrapper>
        ))}
      </CircleInner>
    </CircleWrapper>
  );
};

export default Index;
