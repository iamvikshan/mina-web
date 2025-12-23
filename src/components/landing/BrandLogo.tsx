'use client';

import { Image, type ImageProps } from '@chakra-ui/react';
import { ImagePaths } from '@/utils/cdn';

interface BrandLogoProps extends Omit<ImageProps, 'src' | 'alt'> {
  alt?: string;
}

/**
 * BrandLogo Component
 * ===================
 * Amina's iconic headshot emoji logo
 */
export const BrandLogo = ({ alt = 'Amina Logo', ...props }: BrandLogoProps) => {
  return (
    <Image
      src={ImagePaths.logo.headshotEmoji}
      alt={alt}
      loading="lazy"
      {...props}
    />
  );
};
