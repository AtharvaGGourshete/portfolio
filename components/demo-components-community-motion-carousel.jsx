'use client';

import React from 'react';
import { MotionCarousel } from '@/components/animate-ui/components/community/motion-carousel';

export const MotionCarouselDemo = ({ SLIDES = [] }) => {
  const OPTIONS = { loop: true };

  return <MotionCarousel slides={SLIDES} options={OPTIONS} />;
};
