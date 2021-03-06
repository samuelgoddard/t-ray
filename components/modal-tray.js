
import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { m, AnimatePresence } from 'framer-motion'

export function ModalTray({ children, defaultOpened = false }, ref) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpened)
  const close = useCallback(() => setIsOpen(false), [])

  const modalTrayVariant = {
    initial: { x: '100%' },
    isOpen: { x: '0', transition: { type: "easeInOut", duration: 0.6, delay: 0.2, ease: [0.83, 0, 0.17, 1] }},
    exit: { x: '100%', transition: { type: "easeInOut", duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
  };

  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1, transition: { type: "easeInOut", duration: 0.6, ease: [0.83, 0, 0.17, 1] }},
    exit: { opacity: 0, transition: { type: "easeInOut", duration: 0.6, delay: 0.25, ease: [0.83, 0, 0.17, 1] }}
  };

  const containerVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1, transition: { type: "easeInOut", duration: 0.6, ease: [0.83, 0, 0.17, 1] }},
    exit: { opacity: 0, transition: { type: "easeInOut", duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
  };

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close])

  useEffect(() => {
    setIsBrowser(true);

    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  if (isBrowser) {
    return createPortal(
      <>
      <AnimatePresence>
        { isOpen ? (
          <m.div 
            initial={"initial"}
            animate={"isOpen"}
            exit={"exit"}
            variants={modalVariant}
            className={`fixed z-50 h-full inset-0 flex items-center justify-center w-full`}
          >
            <div className="bg-off-white dark:bg-off-black absolute inset-0 w-full h-full bg-opacity-70 dark:bg-opacity-80 z-40" onClick={close} />

            <m.div
              initial={"initial"}
              animate={"isOpen"}
              exit={"exit"}
              variants={modalTrayVariant}
              className={`absolute top-0 max-w-lg z-50 w-[82vw] md:w-[50vw] xl:w-[40vw] bg-off-black dark:bg-red text-off-white dark:text-off-white h-full right-0`}
            >
              <m.div
                initial={"initial"}

                animate={"isOpen"}
                exit={"exit"}
                variants={containerVariant}
                className="h-full overflow-y-scroll bag-inner"
              >
                {children}
              </m.div>
            </m.div>
          </m.div>
        ) : null }
      </AnimatePresence>
      </>,
      document.getElementById("modal-root")
    )
  } else {
    return null;
  }
}

export default forwardRef(ModalTray)
