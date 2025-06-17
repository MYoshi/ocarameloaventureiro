import type { RefObject } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export function useScrollWidthAnimation(
  target: RefObject<HTMLElement | null>,
  inputRange: [number, number] = [0, 0.2],
  outputRange: [number, number] = [80, 100],
) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
  });
  const width = useTransform(scrollYProgress, inputRange, outputRange);
  const widthPercent = useTransform(width, (w: number) => `${w}%`);
  return widthPercent;
}
