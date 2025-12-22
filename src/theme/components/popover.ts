import { defineSlotRecipe } from '@chakra-ui/react';

export const popoverSlotRecipe = defineSlotRecipe({
  className: 'chakra-popover',
  slots: [
    'trigger',
    'positioner',
    'content',
    'header',
    'body',
    'footer',
    'closeTrigger',
    'arrow',
    'arrowTip',
  ],
  base: {
    content: {
      bg: 'secondaryGray.300',
      rounded: 'xl',
      boxShadow: 'normal',
      _dark: {
        bg: 'navy.900',
      },
    },
  },
});
