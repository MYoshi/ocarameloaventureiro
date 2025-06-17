import Image from 'next/image';

export default function AboutImage() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="rounded-4xl border-8 border-white overflow-auto shadow-xl">
        <Image
          className="overflow-hidden object-cover h-96 sm:h-[540px] lg:h-[702px] drop-shadow-lg"
          height={1024}
          width={1024}
          src="/images/caramelo/caramelobot.jpg"
          alt="O Caramelo Aventureiro"
        />
      </div>
    </div>
  );
}
