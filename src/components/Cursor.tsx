import React, { StrictMode, useEffect, useRef, useState } from "react";

import styled from "styled-components";

const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
`;

const CursorElement = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--black-blue);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  top: 50%;
  left: 50%;
  scale: 0;
  transition: scale 0.1s ease-in-out;
  transform-origin: "50% 50%";
`;

const Cursor = ({ children }: { children: React.ReactNode }): React.FC => {
  const cursorElement = useRef<HTMLDivElement | null>(null);

  const showCursorElement = (): void => {
    cursorElement.current.style.scale = "1";
  };

  const hideCursorElement = (): void => {
    cursorElement.current.style.scale = "0";
  };

  const onMouseMove = (e: React.MouseEvent): void => {
    if (cursorElement.current) {
      cursorElement.current.style.top = `${e.clientY}px`;
      cursorElement.current.style.left = `${e.clientX}px`;
    }
  };

  const onMousedown = (e: React.MouseEvent): void => {
    if (cursorElement.current) {
      showCursorElement();
      cursorElement.current.style.top = `${e.clientY}px`;
      cursorElement.current.style.left = `${e.clientX}px`;
    }
  };

  const onMouseUp = (): void => {
    hideCursorElement();
  };

  useEffect(() => {
    document.addEventListener("mousedown", onMousedown, true);
    document.addEventListener("mouseup", onMouseUp, true);
    document.addEventListener("mousemove", onMouseMove, true);

    const slider = document.querySelector(".swiper") as HTMLDivElement;

    if (slider) {
      slider.addEventListener("mousedown", onMousedown, true);
      slider.addEventListener("mousemove", onMousedown, true);
      slider.addEventListener("mouseleave", onMouseUp, true);
    }

    return () => {
      document.removeEventListener("mousedown", onMousedown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);

      if (slider) {
        slider.removeEventListener("mousedown", onMousedown);
        slider.removeEventListener("mousemove", onMousedown);
        slider.removeEventListener("mouseleave", onMouseUp);
      }
    };
  }, []);

  return (
    <>
      {children}

      <CursorWrapper>
        <CursorElement ref={cursorElement} />
      </CursorWrapper>
    </>
  );
};

export default Cursor;
