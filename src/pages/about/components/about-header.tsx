interface AboutHeaderProps {
  className?: string;
}

export default function AboutHeader({ className }: AboutHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className || ''}`.trim()}>
      <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
        I'm a passionate Full Stack Developer with 1 year of experience in
        building modern web applications. I love turning complex problems into
        simple, beautiful, and intuitive solutions.
      </p>
    </div>
  );
}
