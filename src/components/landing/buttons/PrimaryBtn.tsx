'use client';

import { Button, Icon } from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';
import { LuArrowRight, LuShield, LuStar, LuArrowLeft } from 'react-icons/lu';
import type { IconType } from 'react-icons';

interface PrimaryBtnProps {
  url?: string;
  text?: string;
  icon?: 'discord' | 'arrow-right' | 'shield' | 'star' | 'arrow-left';
  className?: string;
}

const iconMap: Record<string, IconType> = {
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
  const IconComponent = iconMap[icon];

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
        <Icon boxSize="6">
          <IconComponent />
        </Icon>
        <span>{text}</span>
        <Icon
          boxSize="5"
          transition="transform 0.3s"
          css={{
            '.group:hover &': { transform: 'translateX(4px)' },
          }}
        >
          <LuArrowRight />
        </Icon>
      </a>
    </Button>
  );
};
