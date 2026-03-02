import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { MDXContent } from '@/components/mdx/MDXContent';
import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { format, parseISO } from 'date-fns';
import { type Metadata } from 'next';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: 'article',
      publishedTime: post.metadata.date,
      url: `https://ai-journal-demo.vercel.app/blog/${post.metadata.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.title,
      description: post.metadata.description,
    },
  };
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {post.metadata.title}
              </h1>
              <time
                dateTime={post.metadata.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{format(parseISO(post.metadata.date), 'MMMM d, yyyy')}</span>
                <span className="mx-2 flex items-center gap-1">• {post.metadata.readingTime}</span>
              </time>
            </header>
            <div className="mt-8">
              <MDXContent source={post.content} />
            </div>
          </article>
        </div>
      </div>
    </Container>
  );
}
