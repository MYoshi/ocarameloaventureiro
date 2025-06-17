import AboutImage from './AboutImage';
import AboutSocialButtons from './AboutSocialButtons';
import AboutText from './AboutText';

export default function AboutSection() {
  return (
    <div className="flex-1 flex items-center justify-center bg-brand-color lg:p-36 sm:p-12 p-8">
      <div className="flex lg:flex-row-reverse flex-col lg:flex-1 max-w-[1488px] w-full gap-16">
        <AboutImage />
        <div className="w-full flex flex-col justify-center items-start text-white text-lg md:text-1xl lg:text-2xl gap-4 md:gap-8 lg:gap-12">
          <AboutText />
          <AboutSocialButtons />
        </div>
      </div>
    </div>
  );
}
