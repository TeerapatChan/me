import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

interface ApproachCardProps {
  className?: string;
}

export default function ApproachCard({ className }: ApproachCardProps) {
  return (
    <Card className={`mt-8 ${className || ''}`.trim()}>
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
          When I'm not coding, I enjoy learning new technologies to improve my
          skills and knowledge. I also enjoy reading books and listening to
          podcasts to learn about new trends and technologies (Almost 9Arm). I
          also enjoy playing video games and watching movies in my free time.
        </p>
      </CardContent>
    </Card>
  );
}
