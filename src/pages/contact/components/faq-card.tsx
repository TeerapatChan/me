import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { cn } from '@/lib/utils';

interface FaqCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function FaqCard({
  title,
  description,
  className,
}: FaqCardProps) {
  return (
    <Card className={cn('h-[180px]', className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
