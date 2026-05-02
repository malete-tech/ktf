import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <Section className="bg-surface relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-3xl text-center px-4">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-primary mb-12 leading-tight">
          Don’t Just Attend Tech. <br />
          <span className="text-secondary italic">Experience It.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/register" className="w-full sm:w-auto">
            <Button size="lg" className="px-10 w-full sm:w-auto uppercase tracking-widest font-bold">Register Interest</Button>
          </Link>
          <Link to="/experience" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="px-10 w-full sm:w-auto uppercase tracking-widest font-bold">The Experience</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
