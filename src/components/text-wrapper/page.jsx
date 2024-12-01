// MaskText.js
'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './page.module.css';

// กำหนดค่าเริ่มต้นให้กับ phrases
const defaultPhrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout."
];

export default function MaskText({ phrases = defaultPhrases }) {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
    })
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => (
        <div key={index} className={styles.lineMask}>
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
