import { Container } from '@/components/Container';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Open-source AI projects and public work.',
};

const projects = [
  {
    name: 'Animeverse Gamming',
    description: 'A simple platform for playing leasure games online built with only base tech stack HTML, CSS, and JavaScript.',
    link: 'https://animeversegamming.vercel.app/',
  },
  {
    name: 'Semantic Search API',
    description: 'Vector-based search engine using pgvector and Next.js for high-performance content discovery.',
    link: '#',
  },
  {
    name: 'Vision Transformer Demo',
    description: 'An interactive visualization of self-attention mechanisms in computer vision.',
    link: '#',
  },
];

export default function ProjectsPage() {
  return (
    <Container>
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Things I&apos;ve made trying to put my dent in the universe.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.name} className="group relative flex flex-col items-start">
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                <a href={project.link}>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{project.name}</span>
                </a>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
