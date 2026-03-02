import { Container } from '@/components/Container';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About the author building authority in Artificial Intelligence.',
};

export default function AboutPage() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I&apos;m building intelligent systems and pushing the boundaries of software.
          </h1>
          <div className="mt-6 space-y-7 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a prefinal year computer science student with a deep passion for Artificial Intelligence, machine learning, and scalable systems architecting.
            </p>
            <p>
              My focus is on understanding the fundamental mathematics and algorithms behind modern AI and turning them into practical, production-ready applications. I write to clarify my own thinking and to help others navigate the rapidly evolving landscape of technology.
            </p>
            <p>
              When I&apos;m not coding or reading research papers, I&apos;m contributing to open-source projects or building tools that simplify complex workflows.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
