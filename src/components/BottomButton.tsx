import Image from 'next/image';

type BottomButtonProps = {
  href: string;
  iconSrc: string;
  alt: string;
  label: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

export default function BottomButton({
  href,
  iconSrc,
  alt,
  label,
  external = false,
  onClick,
}: BottomButtonProps) {
  return (
    <div>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-2 hover:underline"
        onClick={onClick}
      >
        <span className="flex items-center justify-center w-[84px] h-[84px] rounded-full bg-light-brand-color shadow-lg transition-transform duration-200 ease-in-out group-hover:scale-110 hover:scale-110">
          <Image
            src={iconSrc}
            alt={alt}
            width={52}
            height={52}
            className="inline-block"
            style={{
              filter:
                'invert(41%) sepia(8%) saturate(1052%) hue-rotate(61deg) brightness(92%) contrast(86%)',
            }}
          />
        </span>
        <span className="hidden xl:block ml-2">{label}</span>
      </a>
    </div>
  );
}
