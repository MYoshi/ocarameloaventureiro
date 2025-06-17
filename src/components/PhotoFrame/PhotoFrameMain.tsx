'use client';

import type { RefObject } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getShuffledImageNumbers } from '@/utils/photoFrame';
import { useScrollWidthAnimation } from '@/utils/useScrollWidthAnimation';
import PhotoFrameGrid from './PhotoFrameGrid';
import PhotoFrameMobileList from './PhotoFrameMobileList';

const MOBILE_IMAGE_COUNT = 8;
const DESKTOP_IMAGE_COUNT = 9;
const TOTAL_IMAGES = 18;

type PhotoFrameProps = {
  photoFrameRef: RefObject<HTMLDivElement | null>;
};

const PhotoFrameMain = ({ photoFrameRef }: PhotoFrameProps) => {
  const [imageNumbers, setImageNumbers] = useState<number[]>([]);
  const widthPercent = useScrollWidthAnimation(photoFrameRef);

  useEffect(() => {
    setImageNumbers(getShuffledImageNumbers(Math.max(DESKTOP_IMAGE_COUNT, MOBILE_IMAGE_COUNT), TOTAL_IMAGES));
  }, []);

  return (
    <div ref={photoFrameRef}>
      {/* Desktop */}
      <section className="hidden sm:flex w-full">
        <motion.div
          style={{ width: widthPercent }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="max-w-[1920px] mx-auto z-10"
        >
          <PhotoFrameGrid imageNumbers={imageNumbers} />
        </motion.div>
      </section>
      {/* Mobile */}
      <section className="flex sm:hidden w-full">
        <motion.div
          style={{ width: widthPercent }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="max-w-[1920px] mx-auto z-10"
        >
          <PhotoFrameMobileList imageNumbers={imageNumbers.slice(0, MOBILE_IMAGE_COUNT)} />
        </motion.div>
      </section>
    </div>
  );
};

export default PhotoFrameMain;
