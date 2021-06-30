import React, { useRef, useState, useCallback, useLayoutEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  LazyMotion,
  domAnimation,
  m
} from "framer-motion"

const MotionScroll = ({ children }) => {
  const scrollRef = useRef(null)

  const [pageHeight, setPageHeight] = useState(0)

  const resizePageHeight = useCallback(entries => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
      resizePageHeight(entries)
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useViewportScroll()

  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 } // easing of smooth scroll
  const spring = useSpring(transform, physics)

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={scrollRef}
        style={{ y: spring }}
        className="scroll-container"
      >
        {children}
      </m.div>
    
      <div style={{ height: pageHeight }} />
    </LazyMotion>
  )
}

export default MotionScroll
