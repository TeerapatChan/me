import { cn } from '@/lib/utils';

interface ContactDetailProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  size?: 'sm' | 'lg';
  href?: string;
}
export default function ContactDetail({
  icon,
  title,
  value,
  size = 'lg',
  href,
}: ContactDetailProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2',
        size === 'lg' ? 'text-base' : 'text-sm',
      )}
    >
      <div
        className={cn(
          'bg-primary/10 rounded-full',
          size === 'lg' ? 'p-3' : 'p-2',
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <h3
          className={cn('font-medium', size === 'lg' ? 'text-base' : 'text-sm')}
        >
          {title}
        </h3>
        <a
          href={href}
          className={cn(
            'text-muted-foreground hover:text-primary transition-colors hover:underline',
            size === 'lg' ? 'text-sm' : 'text-xs',
          )}
        >
          {value}
        </a>
      </div>
    </div>
  );
}
