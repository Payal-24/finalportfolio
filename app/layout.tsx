import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Payal - B.Tech CSE Student | Software Developer',
  description:
    'Portfolio of Payal, a 2nd year B.Tech CSE student passionate about programming, DSA, and web development.',
  keywords:
    'Developer, B.Tech, CSE, Portfolio, Web Developer, DSA, Programming',
  authors: [{ name: 'Payal' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://payalportfolio.com',
    siteName: 'Payal Portfolio',
    title: 'Payal - B.Tech CSE Student | Software Developer',
    description:
      'Portfolio of Payal, a 3rd year B.Tech CSE student passionate about programming, DSA, and web development.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
