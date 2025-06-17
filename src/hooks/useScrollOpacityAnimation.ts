import type { RefObject } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export function useScrollOpacityAnimation(
  target: RefObject<HTMLElement | null>,
  inputRange: [number, number] = [0, 0.2],
  outputRange: [number, number] = [0, 1],
) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, inputRange, outputRange);
  return opacity;
}
