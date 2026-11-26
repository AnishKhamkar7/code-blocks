import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Express + Next.js + Better Auth',
  description: 'A Turborepo starter with an Express API and Next.js client.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
