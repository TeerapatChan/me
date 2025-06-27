import { motion } from 'framer-motion';
import { Hero } from './components';
import { useDevice } from '@/hooks';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.4;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function HomePage() {
  const { isDesktop } = useDevice();

  return (
    <>
      {isDesktop ? (
        <motion.svg
          viewBox="0 0 1440 800"
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 w-screen h-screen"
        >
          {/* Circle 1 */}
          <motion.circle
            cx="30"
            cy="60"
            r="160"
            variants={draw}
            custom={1}
            style={{
              strokeWidth: 12,
              strokeLinecap: 'round',
              fill: 'transparent',
            }}
            className="stroke-primary"
          />
          {/* Circle 2 */}
          <motion.circle
            cx="200"
            cy="150"
            r="80"
            variants={draw}
            custom={1.5}
            style={{
              strokeWidth: 8,
              strokeLinecap: 'round',
              fill: 'transparent',
            }}
            className="stroke-primary/70"
          />
          {/* Circle 3 */}
          <motion.circle
            cx="100"
            cy="300"
            r="120"
            variants={draw}
            custom={2}
            style={{
              strokeWidth: 10,
              strokeLinecap: 'round',
              fill: 'transparent',
            }}
            className="stroke-secondary"
          />
          {/* Circle 6
        <motion.circle
          cx="1440"
          cy="800"
          r="300"
          variants={draw}
          custom={3.5}
          style={{
            strokeWidth: 12,
            strokeLinecap: 'round',
            fill: 'transparent',
          }}
          className="stroke-accent/80"
        /> */}
          Circle 7
          <motion.circle
            cx="1440"
            cy="0"
            r="600"
            variants={draw}
            custom={3.5}
            style={{
              strokeWidth: 12,
              strokeLinecap: 'round',
              fill: 'transparent',
            }}
            className="stroke-primary/80"
          />
        </motion.svg>
      ) : null}

      <Hero />
    </>
  );
}
