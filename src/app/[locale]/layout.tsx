import type { ReactNode } from 'react';
import { hasLocale, type Locale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { routing } from '@/i18n/routing';
import { poppins } from '../fonts';
import '../globals.css';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
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
        <title>O Caramelo Aventureiro</title>
        <meta name="description" content="O caramelo aventureiro, o melhor caramelo do mundo!" />
        <link rel="canonical" href="https://ocarameloaventureiro.com/" />
        {/* Open Graph tags */}
        <meta property="og:title" content="O Caramelo Aventureiro" />
        <meta property="og:description" content="O caramelo aventureiro, o melhor caramelo do mundo!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ocarameloaventureiro.com/" />
        <meta property="og:image" content="/images/caramelo/caramelobot.jpg" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="O Caramelo Aventureiro" />
        <meta name="twitter:description" content="O caramelo aventureiro, o melhor caramelo do mundo!" />
        <meta name="twitter:image" content="/images/caramelo/caramelobot.jpg" />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
