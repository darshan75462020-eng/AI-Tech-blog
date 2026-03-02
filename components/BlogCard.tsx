import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { type Post } from '@/lib/mdx';

export function BlogCard({ post }: { post: Post }) {
  const { title, description, date, slug, readingTime, tags } = post.metadata;
  return (
    <article className="group relative flex flex-col items-start justify-between rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900">
      <div className="flex items-center gap-x-4 text-xs text-zinc-500 dark:text-zinc-400">
        <time dateTime={date}>
          {format(parseISO(date), 'MMMM d, yyyy')}
        </time>
        <span className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          {readingTime}
        </span>
      </div>
      <div className="group relative mt-3 max-w-xl">
        <h3 className="text-lg font-semibold leading-6 text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
          <Link href={`/blog/${slug}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
