import { motion } from 'framer-motion';
import {
  AboutHeader,
  // ApproachCard,
  EducationCard,
  ExperienceCard,
  SkillCard,
} from './components';

const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: 'easeInOut' },
};

export default function AboutPage() {
  return (
    <motion.div
      className="py-12 px-4 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        {...sectionAnimation}
        transition={{ ...sectionAnimation.transition, delay: 0.1 }}
      >
        <AboutHeader />
      </motion.div>
      <motion.div
        className="grid gap-8 md:grid-cols-10"
        {...sectionAnimation}
        transition={{ ...sectionAnimation.transition, delay: 0.2 }}
      >
        <ExperienceCard />
        <div className="flex flex-col gap-6 md:col-span-4">
          <EducationCard />
          <SkillCard />
        </div>
      </motion.div>
      {/* <motion.div
        {...sectionAnimation}
        transition={{ ...sectionAnimation.transition, delay: 0.3 }}
      >
        <ApproachCard />
      </motion.div> */}
    </motion.div>
  );
}
