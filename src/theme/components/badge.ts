import { defineRecipe } from '@chakra-ui/react';

export const badgeStyles = defineRecipe({
  className: 'badge',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    px: 3,
    py: 1.5,
    borderRadius: '12px',
    fontFamily: 'heading',
    fontSize: 'sm',
    fontWeight: '600',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
  },
  variants: {
    variant: {
      // === GUARDIAN RANK BADGES ===
      recruit: {
        bg: 'rank.recruit',
        color: 'white',
        boxShadow: '0 2px 4px rgba(128, 128, 128, 0.3)',
      },
      scout: {
        bg: 'rank.scout',
        color: 'night.800',
        boxShadow: '0 2px 8px rgba(0, 206, 209, 0.4)',
      },
      guard: {
        bg: 'rank.guard',
        color: 'white',
        boxShadow: '0 2px 8px rgba(65, 105, 225, 0.4)',
      },
      elite: {
        bg: 'rank.elite',
        color: 'white',
        boxShadow: '0 2px 10px rgba(147, 112, 219, 0.5)',
      },
      commander: {
        bg: 'linear-gradient(135deg, var(--chakra-colors-imperial-500) 0%, var(--chakra-colors-imperial-600) 100%)',
        color: 'night.800',
        boxShadow: '0 2px 12px rgba(255, 215, 0, 0.5)',
      },
      legend: {
        bg: 'linear-gradient(135deg, var(--chakra-colors-amina-500) 0%, var(--chakra-colors-amina-700) 100%)',
        color: 'white',
        boxShadow: '0 2px 15px rgba(220, 20, 60, 0.6)',
      },

      // === STATUS BADGES ===
      success: {
        bg: 'green.500',
        color: 'white',
      },
      warning: {
        bg: 'orange.500',
        color: 'night.800',
      },
      error: {
        bg: 'red.500',
        color: 'white',
      },
      info: {
        bg: 'cyber.500',
        color: 'white',
      },

      // === FEATURE BADGES ===
      new: {
        bg: 'discord.green',
        color: 'night.800',
        fontWeight: '700',
      },
      beta: {
        bg: 'discord.blurple',
        color: 'white',
      },
      premium: {
        bg: 'linear-gradient(135deg, var(--chakra-colors-imperial-500) 0%, var(--chakra-colors-imperial-700) 100%)',
        color: 'night.800',
        fontWeight: '700',
      },

      // === SUBTLE VARIANTS ===
      subtle: {
        _light: {
          bg: 'blackAlpha.100',
          color: 'TextPrimary',
        },
        _dark: {
          bg: 'whiteAlpha.200',
          color: 'TextPrimary',
        },
      },
      outline: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'currentColor',
      },
    },

    size: {
      sm: {
        px: 2,
        py: 1,
        fontSize: 'xs',
        borderRadius: '8px',
      },
      md: {
        px: 3,
        py: 1.5,
        fontSize: 'sm',
        borderRadius: '12px',
      },
      lg: {
        px: 4,
        py: 2,
        fontSize: 'md',
        borderRadius: '14px',
      },
    },
  },

  defaultVariants: {
    variant: 'subtle',
    size: 'md',
  },
});
