import { useTranslations } from 'next-intl';

import BottomButton from '../BottomButton';

export default function AboutSocialButtons() {
  const t = useTranslations();
  return (
    <div className="flex lg:flex-col flex-row gap-4">
      <BottomButton
        href="https://instagram.com/ocarameloaventureiro"
        iconSrc="/images/icons/instagram.svg"
        alt="Instagram"
        label={t('About.instagram')}
        external
      />
      <BottomButton
        href="mailto:contato@ocarameloaventureiro.com"
        iconSrc="/images/icons/email.svg"
        alt="Email"
        label={t('About.email')}
      />
    </div>
  );
}
