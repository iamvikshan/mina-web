'use client';

import { Box, Image, useToken } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { ImagePaths } from '@/utils/cdn';

// ============================================================================
// Animations
// ============================================================================

const breathe = keyframes`
  0%, 100% { box-shadow: 0 0 8px currentColor; }
  50% { box-shadow: 0 0 20px currentColor; }
`;

const successPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

// ============================================================================
// Types
// ============================================================================

type PortraitSize = 'sm' | 'md' | 'lg' | 'xl';
type PresenceStatus = 'online' | 'idle' | 'dnd' | 'offline';
type PortraitVariant = 'idle' | 'alert' | 'success' | 'error';

export interface AminaPortraitProps {
  size?: PortraitSize;
  presence?: PresenceStatus;
  variant?: PortraitVariant;
  showPresence?: boolean;
  glowColor?: string;
}

// ============================================================================
// Constants
// ============================================================================

const sizeMap: Record<PortraitSize, string> = {
  sm: '12',
  md: '20',
  lg: '32',
  xl: '40',
};

const presenceDotSizeMap: Record<PortraitSize, string> = {
  sm: '3',
  md: '4',
  lg: '5',
  xl: '6',
};

const presenceColorMap: Record<PresenceStatus, string> = {
  online: 'discord.green',
  idle: 'imperial.500',
  dnd: 'amina.500',
  offline: 'slate.500',
};

const portraitSrcMap: Record<PortraitVariant, string> = {
  idle: ImagePaths.portraits.idle,
  alert: ImagePaths.portraits.alert,
  success: ImagePaths.portraits.success,
  error: ImagePaths.portraits.error,
};

// ============================================================================
// Component
// ============================================================================

/**
 * AminaPortrait Component
 * =======================
 * Displays Amina&apos;s portrait with optional presence indicator and glow effect.
 * Ported from Hono+Tailwind source to React+Chakra UI.
 */
export const AminaPortrait: React.FC<AminaPortraitProps> = ({
  size = 'md',
  presence = 'online',
  variant = 'idle',
  showPresence = true,
  glowColor,
}) => {
  const boxSize = sizeMap[size];
  const dotSize = presenceDotSizeMap[size];
  const presenceColor = presenceColorMap[presence];
  const [resolvedPresenceColor] = useToken('colors', [presenceColor]);
  const resolvedGlow = glowColor ?? presenceColor;
  const isSuccess = variant === 'success';

  return (
    <Box position="relative" display="inline-block">
      {/* Portrait container */}
      <Box
        boxSize={boxSize}
        borderRadius="full"
        border="3px solid"
        borderColor="amina.500"
        overflow="hidden"
        position="relative"
        color={resolvedGlow}
        css={{
          animation: isSuccess
            ? `${successPulse} 0.6s ease-in-out`
            : `${breathe} 3s ease-in-out infinite`,
        }}
      >
        <Image
          src={portraitSrcMap[variant]}
          alt="Amina Portrait"
          w="full"
          h="full"
          objectFit="cover"
          loading="lazy"
          css={{ imageRendering: 'pixelated' }}
        />
      </Box>

      {/* Presence indicator */}
      {showPresence && (
        <Box
          position="absolute"
          bottom="0"
          right="0"
          boxSize={dotSize}
          borderRadius="full"
          bg={presenceColor}
          border="2px solid"
          borderColor="night.shadow"
          boxShadow={`0 0 6px ${resolvedPresenceColor}`}
        />
      )}
    </Box>
  );
};
