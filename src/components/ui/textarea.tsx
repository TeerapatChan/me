import * as React from 'react';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';
import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  );
}

interface FormTextareaProps {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

function FormTextarea({
  control,
  name,
  label,
  placeholder,
  description,
  rows = 4,
  disabled,
  required,
  className,
}: FormTextareaProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col h-full gap-2">
          {label && <FormLabel>{label}</FormLabel>}
          <FormItem className="h-full">
            <FormControl>
              <Textarea
                {...field}
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                required={required}
                className={className}
              />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        </div>
      )}
    />
  );
}

export { Textarea, FormTextarea };
