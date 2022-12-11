import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { totalPetals } from "src/utils/constant"

export default function HomePageComponents() {
  const [start, setStart] = useState(false)
  const [total, setTotal] = useState(9)
  const [tempTotal, setTemTotal] = useState(0)

  useEffect(() => {
    if (!start) {
      setTimeout(() => {
        setStart(true)
      }, 200 * (tempTotal + 2))
    }
  }, [start])

  const handleChangeTotal = (val: number) => {
    setTemTotal(total)
    setTotal(val)
    setStart(false)
  }
  return (
    <section className="sc-home">
      <div className="options-wrapper">
        {totalPetals.map((val, i) => (
          <button
            className="btn"
            key={i}
            onClick={() => handleChangeTotal(val)}
          >
            {val}
          </button>
        ))}
      </div>
      <AnimatePresence initial={false} mode="wait">
        {start ? (
          <motion.div
            className="flower-wrapper"
            whileHover={{ scale: 1.2 }}
            animate={{ opacity: 1, y: [0, 10, 20, 10, 0] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...Array(total)].map((_, i) => (
              <motion.div
                className="petals"
                key={`petals-${i}`}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: (360 / (total * 2)) * i,
                  zIndex: i % 2,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.2 * (i + 2) }}
              />
            ))}
            <motion.div
              className="outer"
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, zIndex: total + 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
            ></motion.div>
            <motion.div
              className="inner"
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, zIndex: total + 2 }}
              exit={{ opacity: 0, scale: 0 }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
