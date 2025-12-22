import { defineSlotRecipe } from '@chakra-ui/react';

export const sliderSlotRecipe = defineSlotRecipe({
  className: 'chakra-slider',
  slots: [
    'root',
    'label',
    'thumb',
    'valueText',
    'track',
    'range',
    'control',
    'markerGroup',
    'marker',
    'markerIndicator',
  ],
  base: {},
  variants: {
    variant: {
      main: {
        thumb: {
          _light: {
            bg: 'brand.500',
          },
          _dark: {
            bg: 'brand.400',
          },
        },
      },
    },
  },
});
