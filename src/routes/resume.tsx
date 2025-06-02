import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui';

type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: Array<string>;
  skills: Array<string>;
};

type Education = {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
};

const experiences: Array<Experience> = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    duration: '2020 - Present',
    description: [
      'Led a team of 5 developers to build and maintain a large-scale e-commerce platform',
      'Implemented microservices architecture using Node.js, Express, and Docker',
      'Optimized database queries resulting in 40% performance improvement',
      'Mentored junior developers and conducted code reviews',
    ],
    skills: ['Node.js', 'React', 'TypeScript', 'AWS', 'Docker', 'MongoDB'],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    duration: '2018 - 2020',
    description: [
      'Developed and maintained RESTful APIs using Express and MongoDB',
      'Built responsive UIs with React and Redux',
      'Collaborated with cross-functional teams to deliver features on time',
      'Improved application performance by implementing code splitting and lazy loading',
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Redux'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'WebCraft Studios',
    duration: '2016 - 2018',
    description: [
      'Converted design mockups into responsive web applications',
      'Implemented state management using Redux',
      'Worked closely with designers to ensure pixel-perfect implementation',
      'Wrote unit and integration tests',
    ],
    skills: ['JavaScript', 'React', 'Redux', 'HTML/CSS', 'Jest'],
  },
];

const education: Array<Education> = [
  {
    id: 1,
    degree: 'Master of Computer Science',
    institution: 'Tech University',
    duration: '2014 - 2016',
    description: 'Specialized in Web Technologies and Distributed Systems',
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'State University',
    duration: '2010 - 2014',
    description: 'Minor in Mathematics',
  },
];

const skills: Record<string, Array<string>> = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'SQL'],
  frameworks: ['React', 'Node.js', 'Express', 'Next.js', 'Django'],
  databases: ['MongoDB', 'PostgreSQL', 'Redis'],
  tools: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Jest', 'Cypress'],
};

export default function ResumePage() {
  const handleDownload = () => {
    alert('Downloading resume...');
  };

  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">John Doe</h1>
          <h2 className="text-2xl text-muted-foreground">
            Senior Full Stack Developer
          </h2>
        </div>
        <Button onClick={handleDownload} className="gap-2">
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/yourusername
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/yourusername
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-sm">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.duration}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Results-driven Full Stack Developer with 6+ years of experience
                in designing and implementing web applications. Proven track
                record of delivering high-quality software solutions that meet
                business requirements. Passionate about clean code, performance
                optimization, and mentoring junior developers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Work Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-sm">{exp.description}</p>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {/* {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))} */}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.skills.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">
                  AWS Certified Solutions Architect - Associate
                </h3>
                <p className="text-sm text-muted-foreground">
                  Amazon Web Services • 2022
                </p>
              </div>
              <div>
                <h3 className="font-medium">Professional Scrum Master I</h3>
                <p className="text-sm text-muted-foreground">
                  Scrum.org • 2021
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
