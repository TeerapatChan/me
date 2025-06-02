import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Hero } from '@/components/sections';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex-1">
        <div className="relative h-screen">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <Hero />
      {/* Add more sections here as needed */}
    </div>
  );
}
