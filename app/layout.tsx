import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | AI Journal',
    default: 'AI Journal - Artificial Intelligence & Tech Insights',
  },
  description: 'A professional technical journal exploring Artificial Intelligence, Machine Learning, and software architecture.',
  openGraph: {
    title: 'AI Journal - Artificial Intelligence Insights',
    description: 'Technical deep-dives into AI, Machine Learning, and software architecture.',
    url: 'https://ai-journal-demo.vercel.app',
    siteName: 'AI Journal',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'AI Journal',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen border-t-4 border-zinc-900 bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-950`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-auto pt-10 pb-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
