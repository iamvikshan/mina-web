import { defineSlotRecipe } from '@chakra-ui/react';

export const menuSlotRecipe = defineSlotRecipe({
  className: 'chakra-menu',
  slots: [
    'content',
    'item',
    'trigger',
    'indicator',
    'separator',
    'itemGroup',
    'itemGroupLabel',
  ],
  base: {
    item: {
      bg: 'transparent',
      _hover: {
        bg: 'CardBackground',
      },
    },
    content: {
      bg: 'MainBackground',
    },
  },
});
