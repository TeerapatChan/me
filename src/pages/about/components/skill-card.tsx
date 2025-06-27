import { Code } from 'lucide-react';
import { skills } from '../../../common/data';
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui';

export default function SkillCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <CardTitle>Skills</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-2">
            <h3 className="text-sm font-medium capitalize">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
