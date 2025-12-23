import { defineRecipe } from '@chakra-ui/react';

export const buttonStyles = defineRecipe({
  className: 'button',
  base: {
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
    fontFamily: 'heading',
    fontWeight: '600',
    letterSpacing: '0.02em',
    _focus: {
      boxShadow: 'none',
    },
    _active: {
      boxShadow: 'none',
    },
  },
  variants: {
    variant: {
      // Existing variants (kept for dashboard compatibility)
      danger: {
        color: 'white',
        bg: 'red.500',
        _hover: { bg: 'red.400' },
        _active: { bg: 'red.300' },
      },
      action: {
        fontWeight: '600',
        borderRadius: '50px',
        color: 'white',
        rounded: 'xl',
        _light: {
          bg: 'linear-gradient(to right bottom, var(--chakra-colors-brand-500), var(--chakra-colors-brand-400))',
          boxShadow: '1px 2px 5px var(--chakra-colors-brand-400)',
        },
        _dark: {
          bg: 'linear-gradient(to right bottom, var(--chakra-colors-brand-400), var(--chakra-colors-brand-500))',
          boxShadow: '1px 2px 15px var(--chakra-colors-brand-400)',
        },
      },
      secondary: {
        _light: {
          bg: 'white',
          shadow: 'normal',
        },
        _dark: {
          bg: 'whiteAlpha.200',
          _hover: {
            bg: 'whiteAlpha.300',
          },
          _active: {
            bg: 'whiteAlpha.300',
          },
        },
      },

      // === AMINA VARIANTS (Landing Page) ===
      'amina-primary': {
        bg: 'linear-gradient(135deg, var(--chakra-colors-amina-500) 0%, var(--chakra-colors-amina-700) 100%)',
        color: 'white',
        border: '2px solid transparent',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 0 20px rgba(220, 20, 60, 0.6)',
        _hover: {
          transform: 'translateY(-2px)',
          bg: 'linear-gradient(135deg, var(--chakra-colors-amina-400) 0%, var(--chakra-colors-amina-500) 100%)',
          boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 0 25px rgba(220, 20, 60, 0.7)',
        },
        _active: {
          transform: 'translateY(0)',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        },
        _disabled: {
          opacity: 0.6,
          cursor: 'not-allowed',
          _hover: {
            transform: 'none',
            boxShadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 0 20px rgba(220, 20, 60, 0.6)',
          },
        },
      },

      'amina-secondary': {
        bg: 'transparent',
        color: 'cyber.500',
        border: '2px solid',
        borderColor: 'cyber.500',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        _hover: {
          bg: 'cyber.500',
          color: 'night.800',
          boxShadow: '0 0 20px rgba(30, 144, 255, 0.6)',
        },
        _active: {
          bg: 'cyber.600',
          color: 'white',
        },
      },

      'amina-ghost': {
        bg: 'transparent',
        color: 'whiteAlpha.900',
        border: '2px solid',
        borderColor: 'whiteAlpha.300',
        _hover: {
          borderColor: 'amina.500',
          color: 'amina.400',
          bg: 'whiteAlpha.100',
        },
        _active: {
          bg: 'whiteAlpha.200',
        },
      },

      // Discord-styled button
      discord: {
        bg: 'discord.blurple',
        color: 'white',
        fontWeight: '600',
        _hover: {
          bg: '#4752c4',
          transform: 'translateY(-1px)',
        },
        _active: {
          bg: '#3c45a5',
          transform: 'translateY(0)',
        },
      },

      // Gold/Imperial accent button
      imperial: {
        bg: 'linear-gradient(135deg, var(--chakra-colors-imperial-500) 0%, var(--chakra-colors-imperial-600) 100%)',
        color: 'night.800',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 215, 0, 0.5)',
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 215, 0, 0.7)',
        },
        _active: {
          transform: 'translateY(0)',
        },
      },
    },

    size: {
      sm: {
        px: 3,
        py: 1.5,
        fontSize: 'sm',
      },
      md: {
        px: 4,
        py: 2,
        fontSize: 'md',
      },
      lg: {
        px: 6,
        py: 3,
        fontSize: 'lg',
      },
      xl: {
        px: 8,
        py: 4,
        fontSize: 'xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
