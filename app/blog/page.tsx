import { Container } from '@/components/Container';
import { getAllPosts } from '@/lib/mdx';
import { BlogCard } from '@/components/BlogCard';

export const metadata = {
  title: 'Blog | AI Journal',
  description: 'Essays on software engineering, AI, and continuous learning.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container>
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Writing on AI and software design.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-200 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {posts.map((post) => (
              <BlogCard key={post.metadata.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
