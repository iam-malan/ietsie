import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ietsie - South African Marketplace',
  description: 'Discover unique handmade and vintage items from South African artisans',
  keywords: 'marketplace, handmade, South Africa, artisans, crafts, vintage',
  authors: [{ name: 'Ietsie Team' }],
  openGraph: {
    title: 'Ietsie - South African Marketplace',
    description: 'Discover unique handmade and vintage items from South African artisans',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Ietsie',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}