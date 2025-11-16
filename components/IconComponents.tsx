import React from 'react';

interface IconProps {
  className?: string;
}

export const BreathIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
  </svg>
);

export const ShoulderReleaseIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
  </svg>
);

export const ThreeBreathsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const JawSoftIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 8.471a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-3-3a.75.75 0 010-1.06zM12 12.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM8.822 8.471a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l3-3a.75.75 0 000-1.06zM12 21a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" />
  </svg>
);

export const BodyScanIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

export const SoothingTouchIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15.75l-4.22-4.22a2.25 2.25 0 010-3.182l4.22-4.22a2.25 2.25 0 013.182 0l4.22 4.22a2.25 2.25 0 010 3.182l-4.22 4.22a2.25 2.25 0 01-3.182 0zM19.5 15.75l-4.22-4.22a2.25 2.25 0 010-3.182l4.22-4.22a2.25 2.25 0 013.182 0l.001.001a2.25 2.25 0 010 3.182l-4.22 4.22a2.25 2.25 0 01-3.182 0z" />
  </svg>
);

export const SoundIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.375c3.24 0 6.24 1.05 8.68 3.015M12 6.375c-3.24 0-6.24 1.05-8.68 3.015m17.36 0a10.45 10.45 0 01-2.26 1.83m-15.1 0a10.45 10.45 0 002.26 1.83M12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
  </svg>
);

export const SlowExhaleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
  </svg>
);

export const SoftenEyesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const GratitudeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export const PostureIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1.5v21m0-21h-2.25m2.25 0h2.25M12 22.5h-2.25m2.25 0h2.25M6 6v12M18 6v12" />
  </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75c0-1.48-1.2-2.68-2.67-2.68-1.12 0-2.07.69-2.45 1.66-.38-.97-1.33-1.66-2.45-1.66-1.47 0-2.67 1.2-2.67 2.68 0 3.01 4.6 6.44 7.12 8.25 2.52-1.81 7.12-5.24 7.12-8.25z" />
  </svg>
);

export const RainIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v.01M12 12.75v.01M12 18.75v.01" />
  </svg>
);

export const StopIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.95a7.5 7.5 0 109.9 9.9L12 12l-1.95-8.05z" />
  </svg>
);
