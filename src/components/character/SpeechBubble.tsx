'use client';

import { Box, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

// ============================================================================
// Animations
// ============================================================================

const appear = keyframes`
  0% { opacity: 0; transform: translateY(8px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const pulseBorder = keyframes`
  0%, 100% { border-color: currentColor; }
  50% { border-color: transparent; }
`;

// ============================================================================
// Types
// ============================================================================

type BubbleMood = 'neutral' | 'happy' | 'serious' | 'determined';
type BubbleDirection = 'left' | 'right' | 'top' | 'bottom';

export interface SpeechBubbleProps {
  children: React.ReactNode;
  mood?: BubbleMood;
  direction?: BubbleDirection;
  animate?: boolean;
  pulsing?: boolean;
  maxW?: string;
}

// ============================================================================
// Mood color mapping
// ============================================================================

const moodColorMap: Record<BubbleMood, string> = {
  neutral: 'cyber.400',
  happy: 'discord.green',
  serious: 'imperial.500',
  determined: 'amina.500',
};

// ============================================================================
// Tail positioning helpers
// ============================================================================

interface TailStyle {
  position: 'absolute';
  w: string;
  h: string;
  [key: string]: string | number | undefined;
}

function getTailStyles(
  direction: BubbleDirection,
  moodColor: string
): { outer: TailStyle; inner: TailStyle } {
  const base = { position: 'absolute' as const, w: '0', h: '0' };

  switch (direction) {
    case 'left':
      return {
        outer: {
          ...base,
          top: '50%',
          left: '-10px',
          transform: 'translateY(-50%)',
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderRight: `10px solid`,
          borderRightColor: moodColor,
        },
        inner: {
          ...base,
          top: '50%',
          left: '-7px',
          transform: 'translateY(-50%)',
          borderTop: '6px solid transparent',
          borderBottom: '6px solid transparent',
          borderRight: '8px solid',
          borderRightColor: 'night.shadow',
        },
      };
    case 'right':
      return {
        outer: {
          ...base,
          top: '50%',
          right: '-10px',
          transform: 'translateY(-50%)',
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderLeft: `10px solid`,
          borderLeftColor: moodColor,
        },
        inner: {
          ...base,
          top: '50%',
          right: '-7px',
          transform: 'translateY(-50%)',
          borderTop: '6px solid transparent',
          borderBottom: '6px solid transparent',
          borderLeft: '8px solid',
          borderLeftColor: 'night.shadow',
        },
      };
    case 'top':
      return {
        outer: {
          ...base,
          left: '50%',
          top: '-10px',
          transform: 'translateX(-50%)',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderBottom: `10px solid`,
          borderBottomColor: moodColor,
        },
        inner: {
          ...base,
          left: '50%',
          top: '-7px',
          transform: 'translateX(-50%)',
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderBottom: '8px solid',
          borderBottomColor: 'night.shadow',
        },
      };
    case 'bottom':
    default:
      return {
        outer: {
          ...base,
          left: '50%',
          bottom: '-10px',
          transform: 'translateX(-50%)',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: `10px solid`,
          borderTopColor: moodColor,
        },
        inner: {
          ...base,
          left: '50%',
          bottom: '-7px',
          transform: 'translateX(-50%)',
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderTop: '8px solid',
          borderTopColor: 'night.shadow',
        },
      };
  }
}

// ============================================================================
// Component
// ============================================================================

/**
 * SpeechBubble Component
 * ======================
 * Speech bubble with directional tail and mood-based accent colors.
 * Ported from Hono+Tailwind source to React+Chakra UI.
 */
export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  children,
  mood = 'neutral',
  direction = 'bottom',
  animate = false,
  pulsing = false,
  maxW = 'xs',
}) => {
  const moodColor = moodColorMap[mood];
  const tail = getTailStyles(direction, moodColor);

  return (
    <Box
      position="relative"
      display="inline-block"
      bg="night.shadow"
      borderWidth="2px"
      borderColor={moodColor}
      borderRadius="xl"
      px={4}
      py={3}
      maxW={maxW}
      boxShadow="lg"
      color={moodColor}
      css={
        animate && pulsing
          ? {
              animation: `${appear} 0.4s ease-out forwards, ${pulseBorder} 2s ease-in-out infinite`,
            }
          : animate
            ? { animation: `${appear} 0.4s ease-out forwards` }
            : pulsing
              ? { animation: `${pulseBorder} 2s ease-in-out infinite` }
              : undefined
      }
    >
      <Text fontSize="sm" lineHeight="relaxed" color={moodColor}>
        {children}
      </Text>

      {/* Tail - outer (border color) */}
      <Box {...tail.outer} />
      {/* Tail - inner (background fill) */}
      <Box {...tail.inner} />
    </Box>
  );
};
