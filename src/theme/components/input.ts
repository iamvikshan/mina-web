import { defineSlotRecipe } from '@chakra-ui/react';
import { dark, light } from '../colors';

const mainFieldStyles = {
  border: '2px solid',
  borderRadius: '16px',
  fontSize: 'sm',
  p: '20px',
  _light: {
    color: 'slate.900',
    bg: 'transparent',
    _placeholder: {
      color: 'slate.500',
    },
    _invalid: {
      borderColor: 'red.400',
    },
    borderColor: 'slate.300',
  },
  _dark: {
    color: 'white',
    bg: 'night.800',
    _placeholder: {
      color: 'slate.400',
    },
    _invalid: {
      borderColor: 'red.400',
    },
    borderColor: 'night.600',
  },
};

export const inputStyles = defineSlotRecipe({
  className: 'input',
  slots: ['root', 'field', 'element', 'addon'],
  base: {
    field: {
      fontWeight: 400,
      _light: {
        borderColor: 'slate.300',
      },
      _dark: {
        borderColor: 'night.600',
      },
      borderRadius: '8px',
    },
  },
  variants: {
    variant: {
      flushed: {
        field: {
          _focus: {
            _dark: {
              borderColor: dark.brand,
            },
            _light: {
              borderColor: light.brand,
            },
            boxShadow: 'none',
          },
          fontSize: '2xl',
          fontWeight: '600',
          _light: {
            color: light.textColorPrimary,
            borderBottomColor: 'slate.300',
          },
          _dark: {
            color: dark.textColorPrimary,
            borderBottomColor: 'night.600',
          },
        },
      },
      main: {
        field: mainFieldStyles,
      },
      focus: {
        field: {
          ...mainFieldStyles,
          _focus: {
            _light: {
              borderColor: 'amina.300',
            },
            _dark: {
              borderColor: 'amina.400',
            },
          },
        },
      },
      auth: {
        field: {
          bg: 'transparent',
          fontWeight: '500',
          _light: {
            color: 'night.700',
            borderColor: 'slate.100',
          },
          _dark: {
            color: 'white',
            borderColor: 'rgba(135, 140, 189, 0.3)',
          },
          border: '1px solid',
          borderRadius: '16px',
          _placeholder: { color: 'slate.400', fontWeight: '400' },
        },
      },
      authSecondary: {
        field: {
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'slate.100',
          borderRadius: '16px',
          _placeholder: { color: 'slate.400' },
        },
      },
      search: {
        field: {
          border: 'none',
          py: '11px',
          borderRadius: 'inherit',
          _placeholder: { color: 'slate.400' },
        },
      },
    },
  },
});
