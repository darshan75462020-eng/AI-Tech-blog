import RSS from 'rss';
import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const posts = getAllPosts();

  const feed = new RSS({
    title: 'AI Journal',
    description: 'Essays on Artificial Intelligence, Machine Learning, and software architecture.',
    site_url: 'https://ai-journal.vercel.app',
    feed_url: 'https://ai-journal.vercel.app/feed.xml',
    language: 'en',
    pubDate: new Date().toUTCString(),
  });

  posts.forEach((post) => {
    feed.item({
      title: post.metadata.title,
      description: post.metadata.description,
      url: `https://ai-journal.vercel.app/blog/${post.metadata.slug}`,
      date: post.metadata.date,
      categories: post.metadata.tags,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
