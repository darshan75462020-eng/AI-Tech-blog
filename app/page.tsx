import { Container } from '@/components/Container';
import { getAllPosts } from '@/lib/mdx';
import { BlogCard } from '@/components/BlogCard';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Full Stack Developer, AI & Tech Enthusiast, and Continuous Learner.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m a prefinal year computer science student building intelligent systems and documenting my journey. Here, I share my thoughts on Artificial Intelligence, machine learning, and Technology.
          </p>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {posts.length > 0 ? (
              posts.map((post) => (
                <BlogCard key={post.metadata.slug} post={post} />
              ))
            ) : (
              <p className="text-zinc-500 dark:text-zinc-400">No posts found.</p>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
