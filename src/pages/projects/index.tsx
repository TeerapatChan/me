import { Link } from '@tanstack/react-router';
import { ExternalLink, Github } from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';

// Sample project data - in a real application, this would likely come from an API or CMS
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
    image: '/projects/taskapp.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    liveUrl: 'https://example-taskapp.com',
    githubUrl: 'https://github.com/yourusername/task-management-app',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that displays current conditions and forecasts for multiple locations with interactive maps.',
    image: '/projects/weather.jpg',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website built with modern web technologies, featuring responsive design and animations.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    liveUrl: 'https://yourportfolio.com',
    githubUrl: 'https://github.com/yourusername/portfolio-website',
    featured: false,
  },
  {
    id: 5,
    title: 'Recipe Sharing Platform',
    description:
      'A community-driven recipe sharing platform with search, filtering, and user-generated content.',
    image: '/projects/recipe.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
    liveUrl: 'https://example-recipes.com',
    githubUrl: 'https://github.com/yourusername/recipe-platform',
    featured: false,
  },
  {
    id: 6,
    title: 'Budget Tracker',
    description:
      'A personal finance application for tracking expenses, setting budgets, and visualizing spending patterns.',
    image: '/projects/budget.jpg',
    technologies: ['React', 'TypeScript', 'D3.js', 'Firebase'],
    liveUrl: 'https://example-budget.com',
    githubUrl: 'https://github.com/yourusername/budget-tracker',
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <div className="py-12 px-4 md:px-6 mx-auto">
      <div className="space-y-2 text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Projects
        </h1>
        <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
          Explore my featured projects and other work I've built using modern
          technologies and best practices.
        </p>
      </div>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden flex flex-col h-full group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Regular Projects Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regularProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col h-full group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-20 py-10 border-t">
        <h2 className="text-2xl font-bold mb-4">
          Interested in working together?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Get In Touch</Link>
        </Button>
      </div>
    </div>
  );
}
