import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://urbanleafbox.com'),
  title: 'Urban LeafBox — Fresh Microgreens in Mysuru',
  description:
    'Premium microgreens grown in Mysuru. Freshly harvested and delivered to homes, restaurants, cafes, hotels and organic stores. 16+ varieties available.',
  keywords: [
    'microgreens',
    'fresh microgreens Mysuru',
    'Urban LeafBox',
    'organic microgreens',
    'microgreens delivery',
    'healthy greens',
    'wholesale microgreens',
  ],
  authors: [{ name: 'Urban LeafBox' }],
  creator: 'Urban LeafBox',
  openGraph: {
    title: 'Urban LeafBox — Fresh Microgreens Delivered',
    description:
      'Premium microgreens grown naturally in Mysuru. Harvested fresh for maximum taste and nutrition.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Urban LeafBox',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban LeafBox — Fresh Microgreens Delivered',
    description:
      'Premium microgreens grown naturally in Mysuru. Harvested fresh for maximum taste and nutrition.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
