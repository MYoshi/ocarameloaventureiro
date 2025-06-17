import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="h-28 bg-light-brand-color">
      <div className="flex items-center justify-center h-full">
        <p className="font-brand-color text-lg font-bold justify-center text-center">
          {t('Footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
