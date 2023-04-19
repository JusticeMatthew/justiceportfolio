import { type FC } from 'react';
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

interface WavyTextProps extends HTMLMotionProps<'p'> {
  text: string;
  delay?: number;
  duration?: number;
}

const WavyText: FC<WavyTextProps> = ({
  text,
  delay = 0,
  duration = 0.05,
  ...props
}: WavyTextProps) => {
  const letters = Array.from(text);
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-flex"
      {...props}
    >
      {letters.map((letter, idx) => (
        <motion.span key={idx} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default WavyText;
