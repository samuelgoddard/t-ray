import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import classNames from "classnames";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

export default function CursorMotion() {
  if (typeof navigator !== "undefined" && isMobile()) return null;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [musicVideoLinkHovered, setMusicVideoLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 45, stiffness: 600 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    addEventListeners();
    handleLinkHoverEvents();

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      removeEventListeners();
    };
  }, []);

  const addEventListeners = () => {
    // document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };
  
  const removeEventListeners = () => {
    // document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
    document.querySelectorAll("button").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
    document.querySelectorAll(".music-video").forEach((el) => {
      el.addEventListener("mouseover", () => setMusicVideoLinkHovered(true));
      el.addEventListener("mouseout", () => setMusicVideoLinkHovered(false));
    });
  };

  const cursorClasses = classNames("cursor-motion", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
    "cursor--link-hovered-music-video": musicVideoLinkHovered,
  });

  return (
    <motion.div
      className={cursorClasses}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
}