import React from 'react';

interface IconProps {
  className?: string;
}

// By returning null, we ensure these components render nothing and cannot cause SVG-related errors,
// effectively removing them from the app while preserving the file structure.

export const BreathIcon: React.FC<IconProps> = () => null;

export const SensesIcon: React.FC<IconProps> = () => null;

export const GratitudeIcon: React.FC<IconProps> = () => null;

export const WalkIcon: React.FC<IconProps> = () => null;
