import { useTranslations } from 'next-intl';

export default function AboutText() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col justify-center items-start text-white text-lg md:text-1xl lg:text-2xl gap-4 md:gap-8 lg:gap-12">
      <h1 className="text-2xl md:text-4xl lg:text-6xl">{t('About.heading')}</h1>
      <div>{t('About.journey')}</div>
      <div>{t('About.contact')}</div>
    </div>
  );
}
