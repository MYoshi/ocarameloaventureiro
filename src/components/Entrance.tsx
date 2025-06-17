'use client';
import { motion, useAnimate } from 'framer-motion';
import { type RefObject, useCallback, useEffect } from 'react';
import BottomButton from './BottomButton';

type EntranceProps = {
  targetRef: RefObject<HTMLDivElement | null>;
  videoSrc?: string;
  videoType?: string;
  topTitle?: any; // This can be a string or a React node
  bottomText?: any;
};

const Entrance = ({ targetRef, videoSrc, videoType, topTitle, bottomText }: EntranceProps) => {
  const [scope, animate] = useAnimate();

  const myAnimation = useCallback(async () => {
    await animate(scope.current, { top: 'calc(50% - 100px)' }, { duration: 3, ease: 'easeOut' });

    await animate(scope.current, {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
      top: 0,
    }, { duration: 2, ease: 'easeOut' });
  }, [animate, scope]);

  useEffect(() => {
    myAnimation();
  }, [myAnimation]);

  const handleClick = () => {
    // Handle button click logic here
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex w-full relative sm:h-[calc(100vh-28px)] h-[calc(100vh-12px)]">
      <div className="flex absolute top-0 bottom-0 w-full h-full">
        <motion.div
          ref={scope}
          initial={{
            top: '-200px',
            width: 200,
            height: 200,
            borderRadius: 9999,
          }}
          transition={{ duration: 2, ease: 'easeOut', delay: 2 }}

          className="relative max-w-none mx-auto overflow-hidden"
        >
          <video className="w-full h-full object-center object-cover" autoPlay loop muted playsInline>
            <source src={videoSrc} type={videoType} />
          </video>
        </motion.div>
      </div>
      <motion.div
        initial={
          { opacity: 0, top: '-200px' }
        }
        animate={{ opacity: 1, top: '50px' }}
        transition={{ duration: 2, ease: 'easeOut', delay: 5 }}
        className="flex absolute w-full z-10 justify-center items-start text-orange-50 font-extrabold text-outline text-4xl md:text-6xl lg:text-8xl"
      >
        {topTitle}
      </motion.div>
      <motion.div
        initial={
          { opacity: 0 }
        }
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 5 }}
        className="flex absolute w-full z-10 justify-center text-orange-50 text-2xl md:text-5xl lg:text-7xl bottom-7 sm:bottom-28 items-center flex-col gap-3"
      >
        {bottomText}
        <div className="order-1">
          <BottomButton
            href="#"
            iconSrc="/images/icons/dog-paws.svg"
            alt="Paw Button"
            label=""
            external={false}
            onClick={handleClick}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Entrance;
