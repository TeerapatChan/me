import { Link } from '@tanstack/react-router'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50" />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          {/* Text content */}
          <div className="flex flex-col justify-center space-y-5">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <h2 className="text-xl font-medium text-muted-foreground md:text-2xl">
                Full Stack Developer
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I build modern web applications with React, Node.js, and
                cutting-edge technologies. Passionate about creating elegant
                solutions to complex problems.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-full overflow-hidden border-4 border-background shadow-xl">
              <img
                src="/profile.jpg"
                alt="John Doe - Full Stack Developer"
                className="absolute inset-0 object-cover w-full h-full"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
