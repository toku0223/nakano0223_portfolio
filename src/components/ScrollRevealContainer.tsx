// スクロール時動作、表示の制御コンポーネント
import { FC, useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealContainerProps {
  children: any;
  move?: string;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
  children,
  move
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 400,
        opacity: 0,
        origin:
          move === "left"
            ? "left"
            : move === "right"
            ? "right"
            : move === "top"
            ? "top"
            : "bottom",
        distance: "40px"
      });
  }, [sectionRef]);

  return <section ref={sectionRef}>{children}</section>;
};
export default ScrollRevealContainer;
