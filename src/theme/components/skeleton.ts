import { defineRecipe } from '@chakra-ui/react';

export const skeletonStyles = defineRecipe({
  className: 'skeleton',
  base: {
    background: 'navy.600',
    opacity: 0.7,
    animation: '0.8s linear infinite alternate skeleton-pulse',
    _light: {
      background: 'gray.200',
    },
  },
});
