import { motion } from 'framer-motion';
import { ContactForm, ContactInformation, FaqCard } from './components';
import { faqs } from './data';

const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: 'easeInOut' },
};

function ContactPage() {
  return (
    <motion.div
      className="py-12 px-4 md:px-6 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        className="space-y-2 text-center mb-16"
        {...sectionAnimation}
        transition={{ ...sectionAnimation.transition, delay: 0.1 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get In Touch
        </h1>
        <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>
      </motion.div>
      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        {...sectionAnimation}
        transition={{ ...sectionAnimation.transition, delay: 0.2 }}
      >
        <ContactInformation />
        <ContactForm />
      </motion.div>
      <motion.div
        className="mt-20"
        {...sectionAnimation}
        transition={{ ...sectionAnimation.transition, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              {...sectionAnimation}
              transition={{
                ...sectionAnimation.transition,
                delay: 0.4 + index * 0.1,
              }}
            >
              <FaqCard title={faq.title} description={faq.description} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ContactPage;
