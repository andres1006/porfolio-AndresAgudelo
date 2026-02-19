import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

export const ScrollAnimation: React.FC<{ scrollProgress: number }> = ({
  scrollProgress,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Animación base basada en el frame de Remotion para darle un toque "vivo"
  const wave = Math.sin(frame / 20) * 10;

  // Reactividad al scroll
  const opacity = interpolate(scrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = interpolate(scrollProgress, [0, 0.5, 1], [0.8, 1.2, 0.8], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const rotation = interpolate(scrollProgress, [0, 1], [0, 360]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale}) rotate(${rotation}deg) translateY(${wave}px)`,
          width: 200,
          height: 200,
          borderRadius: '20%',
          background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 50px rgba(59, 130, 246, 0.5)',
        }}
      >
        <span style={{ fontSize: 60, color: 'white', fontWeight: 'bold' }}>
          AA
        </span>
      </div>
      
      {/* Decorative particles */}
      {[...Array(5)].map((_, i) => {
        const pOpacity = interpolate(
            scrollProgress,
            [0, 0.1 + i * 0.1, 0.5 + i * 0.1, 1],
            [0, 0, 0.6, 0]
        );
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              opacity: pOpacity,
              transform: `translate(${Math.cos(frame / 30 + i) * 150}px, ${Math.sin(frame / 30 + i) * 150}px)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
