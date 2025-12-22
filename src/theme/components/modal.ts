import { defineSlotRecipe } from '@chakra-ui/react';

export const dialogSlotRecipe = defineSlotRecipe({
  className: 'chakra-dialog',
  slots: [
    'trigger',
    'backdrop',
    'positioner',
    'content',
    'header',
    'body',
    'footer',
    'closeTrigger',
    'title',
    'description',
  ],
  base: {
    backdrop: {
      backdropFilter: 'auto',
      backdropBlur: 'lg',
    },
    closeTrigger: {
      _hover: {},
      _focus: {
        boxShadow: 'none',
      },
    },
    content: {
      _light: {
        bg: 'secondaryGray.300',
      },
      _dark: {
        bg: 'navy.900',
      },
    },
  },
});
