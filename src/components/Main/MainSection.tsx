'use client';
import { useRef } from 'react';
import Entrance from '../Entrance';
import { PhotoFrameMain } from '../PhotoFrame';

export default function MainSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Entrance
        targetRef={targetRef}
        videoSrc="/videos/ocarameloaventureiro.mp4"
        videoType="video/mp4"
        topTitle={(
          <>
            O Caramelo
            <br />
            Aventureiro
          </>
        )}
        bottomText="Conheça a minha história!"
      />
      <PhotoFrameMain photoFrameRef={targetRef} />
    </>
  );
}
