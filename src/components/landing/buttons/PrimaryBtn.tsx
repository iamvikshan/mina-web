'use client';

import { Button, Icon } from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';
import { LuArrowRight, LuShield, LuStar, LuArrowLeft } from 'react-icons/lu';
import type { IconType } from 'react-icons';

type IconName = 'discord' | 'arrow-right' | 'arrow-left' | 'shield' | 'star';

const fallbackIcon: IconType = LuArrowRight;

interface PrimaryBtnProps {
  url?: string;
  text?: string;
  icon?: IconName;
  className?: string;
}

const iconMap: Record<IconName, IconType> = {
  discord: FaDiscord,
  'arrow-right': LuArrowRight,
  'arrow-left': LuArrowLeft,
  shield: LuShield,
  star: LuStar,
};

/**
 * PrimaryBtn Component
 * ====================
 * Primary CTA button with gradient crimson background
 * Amina Style: Bold, energetic, main action button
 * Perfect for: Discord invites, main CTAs, important actions
 *
 * Gradient: from-amina-crimson (#dc143c) to-rose-red (#e63946)
 */
export const PrimaryBtn = ({
  url = '#',
  text = 'Get Started',
  icon = 'arrow-right',
  className = '',
}: PrimaryBtnProps) => {
  const IconComponent = iconMap[icon] ?? fallbackIcon;

  if (!iconMap[icon]) {
    console.warn('PrimaryBtn: unknown icon, falling back to arrow-right', icon);
  }

  return (
    <Button
      asChild
      size="lg"
      className={`group ${className}`}
      display="inline-flex"
      alignItems="center"
      gap="2"
      px="8"
      py="4"
      bgGradient="to-r"
      gradientFrom="amina.500"
      gradientTo="rose.500"
      color="white"
      rounded="xl"
      fontFamily="heading"
      fontWeight="bold"
      fontSize="lg"
      _hover={{
        transform: 'scale(1.05)',
        shadow: 'glowRed',
      }}
      transition="all 0.3s"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {IconComponent && <Icon as={IconComponent} boxSize="6" />}
        <span>{text}</span>
        <Icon
          as={LuArrowRight}
          boxSize="5"
          transition="transform 0.3s"
          css={{
            '.group:hover &': { transform: 'translateX(4px)' },
          }}
        />
      </a>
    </Button>
  );
};
