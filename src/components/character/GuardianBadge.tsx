'use client';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import type { GuardianRank } from '@/lib/ranks';
import { ImagePaths } from '@/utils/cdn';

// ============================================================================
// Animations
// ============================================================================

const badgeGlow = keyframes`
  0%, 100% { box-shadow: 0 0 8px currentColor; }
  50% { box-shadow: 0 0 24px currentColor; }
`;

// ============================================================================
// Types
// ============================================================================

export interface GuardianBadgeProps {
  rank: GuardianRank;
  serverCount?: number;
  showProgress?: boolean;
}

// ============================================================================
// Badge image mapping
// ============================================================================

const badgeImageMap: Record<string, string> = {
  recruit: ImagePaths.badges.recruit,
  scout: ImagePaths.badges.scout,
  guard: ImagePaths.badges.guard,
  elite: ImagePaths.badges.elite,
  commander: ImagePaths.badges.commander,
  legend: ImagePaths.badges.legend,
};

// ============================================================================
// Component
// ============================================================================

/**
 * GuardianBadge Component
 * =======================
 * Displays the user&apos;s guardian rank with badge image and optional progress bar.
 * Ported from Hono+Tailwind source to React+Chakra UI.
 */
export const GuardianBadge: React.FC<GuardianBadgeProps> = ({
  rank,
  serverCount,
  showProgress = false,
}) => {
  const badgeSrc = badgeImageMap[rank.name.toLowerCase()];

  // Calculate progress to next rank
  const progressPercent = (() => {
    if (
      !showProgress ||
      serverCount === undefined ||
      rank.maxServers === Infinity
    ) {
      return null;
    }
    const range = rank.maxServers - rank.minServers;
    if (range === 0) {
      return serverCount >= rank.maxServers ? 100 : 0;
    }
    return Math.min(((serverCount - rank.minServers) / range) * 100, 100);
  })();

  return (
    <Flex
      align="center"
      gap={3}
      px={4}
      py={3}
      bg="night.shadow/50"
      backdropFilter="blur(4px)"
      borderRadius="xl"
      borderWidth="2px"
      borderColor={rank.color}
      boxShadow="lg"
      color={rank.color}
      css={{
        animation: `${badgeGlow} 3s ease-in-out infinite`,
      }}
    >
      {/* Badge image */}
      {badgeSrc && (
        <Box flexShrink={0}>
          <Image
            src={badgeSrc}
            alt={`${rank.name} Badge`}
            boxSize="10"
            borderRadius="md"
            objectFit="cover"
            loading="lazy"
            css={{ imageRendering: 'pixelated' }}
          />
        </Box>
      )}

      {/* Rank info */}
      <Box flex="1" minW="0">
        <Text
          fontWeight="bold"
          fontSize="sm"
          color={rank.color}
          textTransform="uppercase"
          letterSpacing="wider"
        >
          {rank.name}
        </Text>
        <Text fontSize="xs" color="slate.400">
          Level {rank.level} &bull; {rank.badgeSymbol}
        </Text>

        {/* Progress bar */}
        {progressPercent !== null && (
          <Box mt={2}>
            <Box h="1.5" bg="night.steel" borderRadius="full" overflow="hidden">
              <Box
                h="full"
                bg={rank.color}
                borderRadius="full"
                w={`${progressPercent}%`}
                transition="width 0.5s ease"
              />
            </Box>
            <Text fontSize="xs" color="slate.400" mt={1}>
              {serverCount} / {rank.maxServers} servers
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
