import { defineSlotRecipe } from '@chakra-ui/react';

export const switchSlotRecipe = defineSlotRecipe({
  className: 'chakra-switch',
  slots: ['root', 'label', 'control', 'thumb', 'indicator'],
  base: {
    thumb: {
      fontWeight: 400,
      borderRadius: '50%',
      w: '16px',
      h: '16px',
      _checked: { transform: 'translate(20px, 0px)' },
    },
    control: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      w: '40px',
      h: '20px',
      p: '2px',
      ps: '2px',
      _focus: {
        boxShadow: 'none',
      },
      _light: {
        bg: 'gray.300',
      },
      _dark: {
        bg: 'navy.700',
      },
      _checked: {
        _light: {
          bg: 'brand.500',
        },
        _dark: {
          bg: 'brand.400',
        },
      },
    },
  },
});
