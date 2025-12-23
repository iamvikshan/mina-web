'use client';

import { Button, Icon, Link as ChakraLink } from '@chakra-ui/react';
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

type SecondaryIconName =
  | 'file-text'
  | 'layout-dashboard'
  | 'book-open'
  | 'book'
  | 'chart-bar'
  | 'house-plug'
  | 'settings';

type AnchorTarget = '_blank' | '_self' | '_parent' | '_top';

interface SecondaryBtnProps {
  text?: string;
  url?: string;
  icon?: SecondaryIconName;
  className?: string;
  target?: AnchorTarget;
}

const iconMap: Record<SecondaryIconName, IconType> = {
  'file-text': LuFileText,
  'layout-dashboard': LuLayoutDashboard,
  'book-open': LuBookOpen,
  book: LuBook,
  'chart-bar': LuChartBar,
  'house-plug': LuHousePlug,
  settings: LuSettings,
};

const fallbackIcon: IconType = LuFileText;

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
  target = '_blank',
}: SecondaryBtnProps) => {
  const IconComponent = iconMap[icon] ?? fallbackIcon;

  if (!iconMap[icon]) {
    console.warn('SecondaryBtn: unknown icon, falling back to file-text', icon);
  }

  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
  const ariaLabel = target === '_blank' ? `${text} - opens in a new tab` : text;

  return (
    <ChakraLink
      href={url}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      display="inline-flex"
      _hover={{ textDecoration: 'none' }}
      _focusVisible={{
        ring: '4',
        ringColor: 'cyber.400/50',
      }}
    >
      <Button
        as="span"
        size="lg"
        variant="outline"
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
        transition="all 0.3s"
      >
        <Icon as={IconComponent} boxSize="6" />
        <span>{text}</span>
      </Button>
    </ChakraLink>
  );
};
