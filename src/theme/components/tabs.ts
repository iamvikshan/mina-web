import { defineSlotRecipe } from '@chakra-ui/react';

export const tabsSlotRecipe = defineSlotRecipe({
  className: 'chakra-tabs',
  slots: ['root', 'list', 'trigger', 'content', 'contentGroup', 'indicator'],
  base: {
    content: {
      px: 0,
      pb: 0,
    },
  },
});
