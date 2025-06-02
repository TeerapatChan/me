import { Briefcase, Code, GraduationCap, Lightbulb } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui'

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  const skills: Array<string> = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'Docker',
    'AWS',
    'Git',
    'CI/CD',
    'RESTful APIs',
  ]

  const experiences: Array<{
    role: string
    company: string
    period: string
    description: string
  }> = [
    {
      role: 'Senior Full Stack Developer',
      company: 'TechCorp',
      period: '2021 - Present',
      description:
        'Led a team of developers in building scalable web applications using modern JavaScript frameworks and cloud services.',
    },
    {
      role: 'Frontend Developer',
      company: 'WebSolutions Inc.',
      period: '2018 - 2021',
      description:
        'Developed responsive user interfaces and collaborated with UX designers to implement modern web designs.',
    },
  ]

  const education = [
    {
      degree: 'MSc in Computer Science',
      institution: 'Tech University',
      year: '2018',
    },
    {
      degree: 'BSc in Software Engineering',
      institution: 'State University',
      year: '2016',
    },
  ]

  if (isLoading) {
    return (
      <div className="container py-12 px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-2 text-center">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-8 w-32" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-8 w-24" />
              ))}
            </div>
          </div>


          {/* Experience Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-8 w-40" />
            </div>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-5 w-36" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


          {/* Education Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-8 w-32" />
            </div>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-5 w-36" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


          {/* Philosophy Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-8 w-40" />
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          I'm a passionate Full Stack Developer with over 6 years of experience
          in building modern web applications. I love turning complex problems
          into simple, beautiful, and intuitive solutions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <CardTitle>Experience</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 pb-6 border-l-2 border-border last:border-0 last:pb-0"
              >
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 top-1" />
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-muted-foreground">
                  {exp.company} • {exp.period}
                </p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="font-medium">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <CardTitle>Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <CardTitle>My Approach</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            I believe in writing clean, maintainable code and following best
            practices. I'm a strong advocate for test-driven development and
            continuous integration to ensure high-quality software delivery.
          </p>
          <p>
            When I'm not coding, I enjoy contributing to open-source projects,
            learning new technologies, and sharing my knowledge with the
            developer community through blog posts and talks.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
