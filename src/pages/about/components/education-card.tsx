import { GraduationCap } from 'lucide-react';
import { education } from '@/common';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export default function EducationCard() {
  return (
    <Card className="h-full">
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
              {edu.institution}, {edu.year}
            </p>
            <p className="text-sm text-muted-foreground">GPAX: {edu.gpax}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
