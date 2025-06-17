'use client';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import Entrance from '../Entrance';
import { PhotoFrameMain } from '../PhotoFrame';

export default function MainSection() {
  const t = useTranslations('');
  const targetRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Entrance
        targetRef={targetRef}
        videoSrc="/videos/ocarameloaventureiro.mp4"
        videoType="video/mp4"
        topTitle={t('Main.topTitle')}
        bottomText={t('Main.bottomText')}
      />
      <PhotoFrameMain photoFrameRef={targetRef} />
    </>
  );
}
