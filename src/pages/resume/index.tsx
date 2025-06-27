import { Download } from 'lucide-react';
import { ResumeContact } from './components';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { skills } from '@/common';

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

export default function ResumePage() {
  const handleDownload = () => {
    alert('Downloading resume...');
  };

  return (
    <div className="py-12 px-4 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Teerapat Chantaramanee
          </h1>
          <h2 className="text-2xl text-muted-foreground">
            Full Stack Developer
          </h2>
        </div>
        <Button onClick={handleDownload} className="gap-2">
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-8">
          <ResumeContact />
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Junior Full Stack Developer with a strong foundation in web
                development and a passion for learning new technologies. Eager
                to contribute to meaningful projects while continuously
                improving my skills. Committed to writing clean, maintainable
                code and learning from experienced team members. Strong
                problem-solving abilities and a growth mindset drive my work
                every day.
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
