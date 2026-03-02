import { MDXRemote } from 'next-mdx-remote/rsc';
import { type ComponentProps } from 'react';

const components = {
  h1: (props: ComponentProps<'h1'>) => (
    <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl" {...props} />
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="mt-10 mb-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50" {...props} />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3 className="mt-8 mb-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className="mb-6 leading-7 text-zinc-700 dark:text-zinc-300" {...props} />
  ),
  a: (props: ComponentProps<'a'>) => (
    <a className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="mb-6 ml-6 list-disc text-zinc-700 dark:text-zinc-300 [&>li]:mt-2" {...props} />
  ),
  ol: (props: ComponentProps<'ol'>) => (
    <ol className="mb-6 ml-6 list-decimal text-zinc-700 dark:text-zinc-300 [&>li]:mt-2" {...props} />
  ),
  strong: (props: ComponentProps<'strong'>) => (
    <strong className="font-semibold text-zinc-900 dark:text-zinc-50" {...props} />
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className="mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-600 dark:border-zinc-700 dark:text-zinc-400" {...props} />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </article>
  );
}
