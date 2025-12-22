import { defineSlotRecipe } from '@chakra-ui/react';

export const cardSlotRecipe = defineSlotRecipe({
  className: 'chakra-card',
  slots: ['root', 'header', 'body', 'footer'],
  base: {
    root: {
      color: 'TextPrimary',
      bg: 'CardBackground',
      p: 'var(--card-padding)',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      fontSize: { base: '16px', md: 'lg' },
      fontWeight: 'medium',
      p: 4,
    },
    body: {
      fontSize: { base: 'sm', md: 'md' },
      p: 4,
    },
    footer: {
      p: 0,
      mt: 4,
    },
  },
  variants: {
    variant: {
      primary: {
        root: {
          rounded: '2xl',
          _light: {
            boxShadow: '14px 17px 30px 4px rgb(112 144 176 / 10%)',
          },
        },
      },
      elevated: {
        root: {
          rounded: '2xl',
          boxShadow: 'normal',
        },
      },
    },
  },
});
