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
      guardian: {
        root: {
          rounded: '2xl',
          border: '1px solid',
          borderColor: 'cyber.500/30',
          backdropFilter: 'blur(12px)',
          _light: {
            bg: 'white/80',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          },
          _dark: {
            bg: 'night.800/80',
            boxShadow: '0 4px 20px rgba(0, 200, 255, 0.08)',
          },
        },
      },
    },
  },
});
