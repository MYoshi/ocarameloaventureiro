'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { useRef, useState } from 'react';
import { useScrollOpacityAnimation } from '@/hooks/useScrollOpacityAnimation';

type PhotoFrameImageProps = {
  imageNumber: number;
  position?: number;
};

const skipTextList = [3, 4, 7];
export default function PhotoFrameImage({ imageNumber, position }: PhotoFrameImageProps) {
  const animationRef = useRef<HTMLDivElement>(null);
  const opacity = useScrollOpacityAnimation(animationRef);
  const t = useTranslations('CarameloGallery');
  const [isHovered, setIsHovered] = useState(false);

  const imageSrc = `/images/caramelo/caramelo${imageNumber}.jpg`;
  const imageAlt = `O Caramelo Aventureiro - Foto ${imageNumber}`;
  const letters = t(imageNumber.toString()).split('');

  let showText = true;
  if (skipTextList.includes(position ?? 0)) {
    showText = false;
  }

  return (
    <motion.div
      ref={animationRef}
      style={{ opacity }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="p-2"
    >
      <div className="flex w-full rounded-lg relative m-h-[540px] justify-center items-center h-full cursor-pointer shadow-custom-3xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1024}
          height={1024}
          className="object-cover w-full h-full"
        />
        <div
          role="button"
          tabIndex={0}
          aria-pressed={isHovered}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsHovered(prev => !prev);
            }
          }}
          className={`absolute inset-0 bg-brand-color-50 ${isHovered ? 'opacity-100' : 'opacity-0'} `}
        >
          {showText
            ? (
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div
                    className="sm:max-w-full w-screen"// ensure wrapping
                  >
                    {letters.map((char, i) =>
                      char === '\n'
                        ? (
                            <br key={i} />
                          )
                        : (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                              transition={{ delay: isHovered ? i * 0.05 : 0, duration: 0.3 }}
                              className="text-white text-3xl md:text-md lg:text-4xl font-bold text-center display-block display"
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                          ),
                    )}
                  </div>

                </div>
              )
            : null}
        </div>

      </div>

    </motion.div>
  );
}
