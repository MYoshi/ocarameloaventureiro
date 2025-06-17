'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollOpacityAnimation } from '@/hooks/useScrollOpacityAnimation';
import PhotoFrameImage from './PhotoFrameImage';

type PhotoFrameGridProps = {
  imageNumbers: number[];
};

export default function PhotoFrameGrid({ imageNumbers }: PhotoFrameGridProps) {
  const animationRef = useRef<HTMLDivElement>(null);

  const opacity = useScrollOpacityAnimation(animationRef);
  let imageNumber = 0;
  return (
    <section
      ref={animationRef}
      className="bg-wood w-full h-auto relative flex justify-center items-center"
      aria-label="Photo frame gallery of O Caramelo Aventureiro"
    >
      <motion.div
        style={{ opacity }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <figure className="grid grid-rows[2fr_2fr]">
          <div className="grid grid-cols-[2fr_3fr_2fr] w-full">
            <PhotoFrameImage position={imageNumber} imageNumber={imageNumbers[imageNumber++] ?? 1} />
            <PhotoFrameImage position={imageNumber} imageNumber={imageNumbers[imageNumber++] ?? 1} />
            <PhotoFrameImage position={imageNumber} imageNumber={imageNumbers[imageNumber++] ?? 1} />
          </div>
          <div className="grid grid-cols-[1fr_3fr_3fr] w-full">
            <div className="grid grid-rows-[3fr_4fr]">
              <PhotoFrameImage position={imageNumber} imageNumber={imageNumbers[imageNumber++] ?? 1} />
              <PhotoFrameImage position={imageNumber} imageNumber={imageNumbers[imageNumber++] ?? 1} />
            </div>
            <div className="grid grid-rows-[4fr_4fr]">
              <PhotoFrameImage position={imageNumber} imageNumber={imageNumbers[imageNumber++] ?? 1} />
              <PhotoFrameImage position={imageNumber} imageNumber={imageNumbers[imageNumber++] ?? 1} />
            </div>
            <div className="grid grid-rows-[1fr_2fr]">
              <div className="grid grid-cols-[1fr_2fr]">
                <div>
                  <PhotoFrameImage position={imageNumber} imageNumber={imageNumbers[imageNumber++] ?? 1} />
                </div>
                <PhotoFrameImage position={imageNumber} imageNumber={imageNumbers[imageNumber++] ?? 1} />
              </div>
              <PhotoFrameImage position={imageNumber} imageNumber={imageNumbers[imageNumber++] ?? 1} />
            </div>
          </div>
        </figure>
      </motion.div>
    </section>
  );
}
