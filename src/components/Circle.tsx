import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useStore from "@/store/useStore";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Circle: React.FC = () => {
  const { sections, activeSection } = useStore();

  let activeDotIndex: number = -1;
  let numDots: number = sections.length;

  const svg = useRef<SVGSVGElement | null>(null);

  const svgNS = "http://www.w3.org/2000/svg";
  const circleCenterX = 265;
  const circleCenterY = 265;
  const dotRadius = 3;
  const radius = 265;
  const padding = 20;
  const viewBox = `${0 - padding} ${0 - padding} ${radius * 2 + padding * 2} ${radius * 2 + padding * 2}`;

  useEffect(() => {
    drawDots();
    setActiveDot(0);
  }, []);

  function drawDots() {
    clearDots();
    for (let i = 0; i < numDots; i++) {
      const angle = i * (360 / numDots) * (Math.PI / 180); // Convert degrees to radians
      const x = circleCenterX + radius * Math.cos(angle);
      const y = circleCenterY + radius * Math.sin(angle);

      const dot = document.createElementNS(svgNS, "circle");
      dot.setAttribute("cx", x.toString());
      dot.setAttribute("cy", y.toString());
      dot.setAttribute("r", dotRadius.toString());
      dot.setAttribute("fill", i === activeDotIndex ? "none" : "#42567A");
      dot.setAttribute("stroke", i === activeDotIndex ? "#42567A" : "none");
      dot.setAttribute("stroke-width", i === activeDotIndex ? "1" : "0");
      dot.setAttribute("class", "dot");
      svg.current?.appendChild(dot);

      // Add index inside active dot
      if (i === activeDotIndex) {
        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", x.toString());
        text.setAttribute("y", (y + 4).toString()); // Adjust for centering
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "14");
        dot.setAttribute("r", (dotRadius * 4).toString());
        text.setAttribute("fill", "#42567A");
        text.textContent = (i + 1).toString();
        svg.current?.appendChild(text);
      }

      gsap.fromTo(
        dot,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5 },
      );
    }
  }

  function clearDots() {
    document
      .querySelectorAll(".dot, text")
      .forEach((element) => element.remove());
  }

  function addDot() {
    if (numDots < 20) {
      numDots++;
      drawDots();
    }
  }

  function removeDot() {
    if (numDots > 1) {
      numDots--;
      if (activeDotIndex >= numDots) activeDotIndex = -1;
      drawDots();
    }
  }

  function setActiveDot(index: number) {
    activeDotIndex = index;
    drawDots();
  }

  return (
    <Wrapper>
      <svg
        ref={svg}
        width={radius * 2}
        height={radius * 2}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.2" cx="265" cy="265" r="264.5" stroke="#42567A" />
      </svg>
    </Wrapper>
  );
};

export default Circle;
