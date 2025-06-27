import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const commonTransition = { duration: 0.5, ease: [0.3, 0, 0.1, 0.8] };

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: commonTransition,
};

const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: commonTransition,
};

export default function Hero() {
  return (
    <motion.section
      className="relative overflow-hidden px-4 md:px-6 min-h-[calc(100vh-64px)] flex items-center justify-center"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <motion.div
        className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_550px] gap-8 lg:gap-12 border border-border p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl shadow-md bg-white"
        variants={slideUp}
        transition={{ ...commonTransition, delay: 0.2 }}
      >
        <div className="flex flex-col justify-center space-y-5 text-center lg:text-left">
          <div className="space-y-2">
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              variants={fadeIn}
              transition={{ ...commonTransition, delay: 0.4 }}
            >
              Hi, I'm{' '}
              <span className="text-primary">Teerapat Chantaramanee</span>
            </motion.h1>
            <motion.h2
              className="text-xl font-medium text-muted-foreground md:text-2xl"
              variants={fadeIn}
              transition={{ ...commonTransition, delay: 0.6 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              className="max-w-[700px] mx-auto lg:mx-0 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              variants={fadeIn}
              transition={{ ...commonTransition, delay: 0.8 }}
            >
              I build modern web applications with React, Node.js, and
              cutting-edge technologies. Passionate about creating elegant
              solutions to complex problems.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start"
            variants={fadeIn}
            transition={{ ...commonTransition, delay: 1.0 }}
          >
            <Button size="lg" asChild>
              <Link to="/contact">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="teerapat-resume.pdf" download="teerapat-resume.pdf">
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 pt-2 justify-center lg:justify-start"
            variants={fadeIn}
            transition={{ ...commonTransition, delay: 1.2 }}
          >
            <a
              href="https://github.com/teerapatchan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/teerapatchan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:teerapat.chtrmn@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center"
          variants={fadeIn}
          transition={{ ...commonTransition, delay: 0.8 }}
        >
          <div className="relative mx-auto h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px] lg:h-[350px] lg:w-[350px] xl:h-[450px] xl:w-[450px] rounded-full overflow-hidden border-4 border-background shadow-xl">
            <img
              src="/me.jpeg"
              alt="Teerapat Chantaramanee - Full Stack Developer"
              className="absolute inset-0 object-cover w-full h-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
