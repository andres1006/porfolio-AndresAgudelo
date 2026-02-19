"use client";

import React, { useEffect, useState } from 'react';
import { Player } from '@remotion/player';
import { ScrollAnimation } from './remotion-scroll-animation';

export const RemotionScrollHero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = scrollTop / (docHeight - winHeight);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-[400px] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/10 dark:bg-slate-100/5 backdrop-blur-sm border border-primary/10 shadow-inner my-12">
      <Player
        component={ScrollAnimation}
        durationInFrames={120}
        compositionWidth={800}
        compositionHeight={400}
        fps={30}
        controls={false}
        loop
        autoPlay
        style={{
          width: '100%',
          height: '100%',
        }}
        inputProps={{
          scrollProgress: scrollProgress,
        }}
      />
    </div>
  );
};
