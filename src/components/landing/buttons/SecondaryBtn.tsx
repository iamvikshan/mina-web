'use client';

import { Button, Icon } from '@chakra-ui/react';
import {
  LuFileText,
  LuLayoutDashboard,
  LuBookOpen,
  LuBook,
  LuChartBar,
  LuHousePlug,
  LuSettings,
} from 'react-icons/lu';
import type { IconType } from 'react-icons';

interface SecondaryBtnProps {
  text?: string;
  url?: string;
  icon?:
    | 'file-text'
    | 'layout-dashboard'
    | 'book-open'
    | 'book'
    | 'chart-bar'
    | 'house-plug'
    | 'settings';
  className?: string;
}

const iconMap: Record<string, IconType> = {
  'file-text': LuFileText,
  'layout-dashboard': LuLayoutDashboard,
  'book-open': LuBookOpen,
  book: LuBook,
  'chart-bar': LuChartBar,
  'house-plug': LuHousePlug,
  settings: LuSettings,
};

/**
 * SecondaryBtn Component
 * ======================
 * Secondary CTA button with electric blue outline
 * Amina Style: Tactical, informative, support actions
 * Perfect for: Documentation, secondary CTAs, info links
 *
 * Color: cyber-blue (#00ced1 - cyber.400)
 */
export const SecondaryBtn = ({
  text = 'Learn More',
  url = '#',
  icon = 'file-text',
  className = '',
}: SecondaryBtnProps) => {
  const IconComponent = iconMap[icon];

  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className={className}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      gap="2"
      px="8"
      py="4"
      fontSize="lg"
      fontFamily="heading"
      fontWeight="bold"
      color="cyber.400"
      bg="transparent"
      borderWidth="2px"
      borderColor="cyber.400"
      rounded="xl"
      _hover={{
        bg: 'cyber.400/10',
        transform: 'scale(1.05)',
        shadow: 'glowCyan',
      }}
      _focusVisible={{
        ring: '4',
        ringColor: 'cyber.400/50',
      }}
      transition="all 0.3s"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Icon boxSize="6">
          <IconComponent />
        </Icon>
        <span>{text}</span>
      </a>
    </Button>
  );
};
