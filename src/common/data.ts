import type { EducationItem, ExperienceItem } from '../pages/about/types';

export const skills: Record<string, Array<string>> = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'Golang'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Express.js', 'Fiber'],
  databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
  tools: [
    'Git',
    'Docker',
    'RESTful APIs',
    'gRPC',
    'Jest',
    'Playwright',
    'Cypress',
    'Linux',
  ],
};

export const experiences: Array<ExperienceItem> = [
  {
    role: 'Frontend Developer',
    company: 'Skooldio Tech',
    period: 'Jan - May 2025',
    description:
      'Developed and maintained responsive user interfaces for web applications using modern JavaScript frameworks and libraries. Collaborated closely with UI/UX designers and backend developers to translate designs and requirements into high-quality, performant, and accessible code.',
  },
  {
    role: 'Software Engineer in Test',
    company: 'Lineman Wongnai',
    period: 'May - Oct 2024',
    description:
      'Responsible for designing, developing, and executing automated and manual tests to ensure software quality. Collaborated with development teams to identify, track, and resolve defects, contributing to the delivery of robust and reliable software products.',
  },
];

export const education: Array<EducationItem> = [
  {
    degree: 'Bachelor of Engineering, Computer Engineering',
    institution: 'Chulalongkorn University',
    gpax: '3.52 (2nd Class Honours)',
    year: '2024',
  },
];
