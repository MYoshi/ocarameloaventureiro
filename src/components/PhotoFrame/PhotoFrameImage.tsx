'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { useScrollOpacityAnimation } from '@/utils/useScrollOpacityAnimation';

type PhotoFrameImageProps = {
  imageSrc: string;
  imageAlt: string;
};

export default function PhotoFrameImage({ imageSrc, imageAlt }: PhotoFrameImageProps) {
  const animationRef = useRef<HTMLDivElement>(null);

  const opacity = useScrollOpacityAnimation(animationRef);

  return (
    <motion.div
      ref={animationRef}
      style={{ opacity }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="p-2"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1024}
        height={1024}
        className="rounded-xl object-cover w-full h-full"
      />
    </motion.div>
  );
}
