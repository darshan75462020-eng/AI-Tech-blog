import { Container } from './Container';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 py-10 dark:border-zinc-800">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} AI Journal. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Twitter
            </a>
            <a href="/feed.xml" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              RSS
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
