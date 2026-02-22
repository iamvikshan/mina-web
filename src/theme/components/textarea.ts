import { defineRecipe } from '@chakra-ui/react';
import { light, dark } from '../colors';

export const textareaStyles = defineRecipe({
  className: 'textarea',
  base: {
    fontWeight: 400,
    borderRadius: '8px',
    fontSize: 'md',
    rounded: 'lg',
    border: 0,
    _focus: { boxShadow: 'none' },
    _light: {
      bg: light.globalBg,
    },
    _dark: {
      bg: dark.globalBg,
    },
  },
  variants: {
    variant: {
      main: {
        border: '2px solid',
        borderRadius: '16px',
        fontSize: 'sm',
        p: '20px',
        _light: {
          bg: 'transparent',
          color: 'slate.900',
          borderColor: 'slate.300',
          _placeholder: {
            color: 'slate.500',
          },
        },
        _dark: {
          bg: 'night.800',
          color: 'white',
          borderColor: 'night.600',
          _placeholder: {
            color: 'slate.400',
          },
        },
      },
      glass: {
        borderColor: 'var(--border-color)',
        border: '1px solid',
        _light: {
          bg: 'slate.200',
          borderColor: 'blackAlpha.200',
          _invalid: {
            borderColor: 'red.300',
          },
          _placeholder: {
            color: 'slate.500',
          },
        },
        _dark: {
          bg: 'blackAlpha.300',
          borderColor: 'whiteAlpha.200',
          _invalid: {
            borderColor: 'red.400',
          },
          _placeholder: {
            color: 'slate.400',
          },
        },
      },
    },
  },
});
