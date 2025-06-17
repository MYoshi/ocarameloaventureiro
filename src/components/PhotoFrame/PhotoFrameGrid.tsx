'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollOpacityAnimation } from '@/utils/useScrollOpacityAnimation';
import PhotoFrameImage from './PhotoFrameImage';

type PhotoFrameGridProps = {
  imageNumbers: number[];
};

export default function PhotoFrameGrid({ imageNumbers }: PhotoFrameGridProps) {
  const animationRef = useRef<HTMLDivElement>(null);

  const opacity = useScrollOpacityAnimation(animationRef);
  let imageNumber = 0;
  return (

    <div ref={animationRef} className="bg-wood w-full h-auto relative flex justify-center items-center">
      <motion.div
        style={{ opacity }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <div className="grid grid-rows[2fr_2fr]">
          <div className="grid grid-cols-[2fr_3fr_2fr] w-full">
            <PhotoFrameImage imageSrc={`/images/caramelo${imageNumbers[imageNumber++] ?? 1}.jpg`} imageAlt="O Caramelo Aventureiro" />
            <PhotoFrameImage imageSrc={`/images/caramelo${imageNumbers[imageNumber++] ?? 1}.jpg`} imageAlt="O Caramelo Aventureiro" />
            <PhotoFrameImage imageSrc={`/images/caramelo${imageNumbers[imageNumber++] ?? 1}.jpg`} imageAlt="O Caramelo Aventureiro" />
          </div>
          <div className="grid grid-cols-[1fr_3fr_3fr] w-full">
            <div className="grid grid-rows-[3fr_4fr]">
              <PhotoFrameImage imageSrc={`/images/caramelo${imageNumbers[imageNumber++] ?? 1}.jpg`} imageAlt="O Caramelo Aventureiro" />
              <PhotoFrameImage imageSrc={`/images/caramelo${imageNumbers[imageNumber++] ?? 1}.jpg`} imageAlt="O Caramelo Aventureiro" />
            </div>
            <div className="grid grid-rows-[4fr_4fr]">
              <PhotoFrameImage imageSrc={`/images/caramelo${imageNumbers[imageNumber++] ?? 1}.jpg`} imageAlt="O Caramelo Aventureiro" />
              <PhotoFrameImage imageSrc={`/images/caramelo${imageNumbers[imageNumber++] ?? 1}.jpg`} imageAlt="O Caramelo Aventureiro" />
            </div>
            <div className="grid grid-rows-[1fr_2fr]">
              <div className="grid grid-cols-[1fr_2fr]">
                <div>
                  <PhotoFrameImage imageSrc={`/images/caramelo${imageNumbers[imageNumber++] ?? 1}.jpg`} imageAlt="O Caramelo Aventureiro" />
                </div>
                <PhotoFrameImage imageSrc={`/images/caramelo${imageNumbers[imageNumber++] ?? 1}.jpg`} imageAlt="O Caramelo Aventureiro" />
              </div>
              <PhotoFrameImage imageSrc={`/images/caramelo${imageNumbers[imageNumber++] ?? 1}.jpg`} imageAlt="O Caramelo Aventureiro" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>

  );
}
