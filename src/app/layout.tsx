import type { Metadata } from 'next';
import Script from 'next/script';
import { poppins } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'O Caramelo Aventureiro',
  description: 'O caramelo aventureiro, o melhor caramelo do mundo!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0C23QGEBV4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0C23QGEBV4');
          `}
        </Script>
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
