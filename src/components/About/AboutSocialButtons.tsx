import BottomButton from '../BottomButton';

export default function AboutSocialButtons() {
  return (
    <div className="flex lg:flex-col flex-row gap-4">
      <BottomButton
        href="https://instagram.com/ocarameloaventureiro"
        iconSrc="/images/icons/instagram.svg"
        alt="Instagram"
        label="@ocarameloaventureiro"
        external
      />
      <BottomButton
        href="mailto:contato@ocarameloaventureiro.com"
        iconSrc="/images/icons/email.svg"
        alt="Email"
        label="contato@ocarameloaventureiro.com"
      />
    </div>
  );
}
