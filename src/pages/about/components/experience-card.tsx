import { Briefcase } from 'lucide-react';
import { experiences } from '@/common';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export default function ExperienceCard() {
  return (
    <Card className="md:col-span-6 h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" />
          <CardTitle>Experience</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 h-full">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 ">
            <div className="absolute w-3 h-3 bg-primary rounded-full left-0 top-2" />
            <h3 className="text-lg font-semibold">{exp.role}</h3>
            <p className="text-muted-foreground">
              {exp.company} • {exp.period}
            </p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
