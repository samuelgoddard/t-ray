import { useEffect, useLayoutEffect, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";
import classNames from "classnames";

export default function CursorMotion() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [musicVideoLinkHovered, setMusicVideoLinkHovered] = useState(false);
  const [articleHovered, setArticleHovered] = useState(false);
  const [musicReleaseHovered, setMusicReleaseHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useLayoutEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  })

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };
  
  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
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
    document.querySelectorAll(".article").forEach((el) => {
      el.addEventListener("mouseover", () => setArticleHovered(true));
      el.addEventListener("mouseout", () => setArticleHovered(false));
    });
    document.querySelectorAll(".music-release").forEach((el) => {
      el.addEventListener("mouseover", () => setMusicReleaseHovered(true));
      el.addEventListener("mouseout", () => setMusicReleaseHovered(false));
    });
  };

  const cursorClasses = classNames("cursor-motion", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
    "cursor--link-hovered-music-video": musicVideoLinkHovered,
    "cursor--link-hovered-article": articleHovered,
    "cursor--link-hovered-music-release": musicReleaseHovered,
  });
  
  const cursorInnerClasses = classNames("cursor-inner", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
    "cursor--link-hovered-music-video": musicVideoLinkHovered,
    "cursor--link-hovered-article": articleHovered,
    "cursor--link-hovered-music-release": musicReleaseHovered,
  });

  return (
    <>
      <m.div
        className={cursorClasses}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <div
        className={cursorInnerClasses}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}