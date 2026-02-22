'use client';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import type { Achievement } from '@/lib/achievements';
import { getRarityColor } from '@/lib/achievements';
import { ImagePaths } from '@/utils/cdn';

// ============================================================================
// Animations
// ============================================================================

const badgeUnlock = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`;

// ============================================================================
// Types
// ============================================================================

export interface AchievementBadgeProps {
  achievement: Achievement;
  animate?: boolean;
}

// ============================================================================
// Achievement image mapping
// ============================================================================

const achievementImageMap: Record<string, string> = {
  first_server: ImagePaths.achievements.firstWatch,
  five_servers: ImagePaths.achievements.squadLeader,
  ten_servers: ImagePaths.achievements.networkGuardian,
  twenty_servers: ImagePaths.achievements.livingLegend,
  first_config: ImagePaths.achievements.speedrunner,
  five_configs: ImagePaths.achievements.perfectionist,
  customizer: ImagePaths.achievements.socialButterfly,
  veteran: ImagePaths.achievements.dedication,
};

// ============================================================================
// Component
// ============================================================================

/**
 * AchievementBadge Component
 * ==========================
 * Displays an achievement with its rarity styling and optional unlock animation.
 * Ported from Hono+Tailwind source to React+Chakra UI.
 */
export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  achievement,
  animate = false,
}) => {
  const rarityColors = getRarityColor(achievement.rarity);
  const imageSrc = achievementImageMap[achievement.id];

  return (
    <Flex
      align="center"
      gap={3}
      px={4}
      py={3}
      bg={rarityColors.bg}
      borderWidth="2px"
      borderColor={rarityColors.border}
      borderRadius="xl"
      backdropFilter="blur(4px)"
      opacity={achievement.unlocked ? 1 : 0.6}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
      css={
        animate
          ? { animation: `${badgeUnlock} 0.5s ease-out forwards` }
          : undefined
      }
    >
      {/* Achievement icon */}
      <Box flexShrink={0}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={achievement.name}
            boxSize="10"
            borderRadius="md"
            objectFit="cover"
            loading="lazy"
            css={{ imageRendering: 'pixelated' }}
          />
        ) : (
          <Flex
            boxSize="10"
            align="center"
            justify="center"
            borderRadius="md"
            bg="night.steel"
            fontSize="xl"
          >
            <Text>{achievement.icon}</Text>
          </Flex>
        )}
      </Box>

      {/* Achievement info */}
      <Box flex="1" minW="0">
        <Text
          fontWeight="bold"
          fontSize="sm"
          color={rarityColors.text}
          lineClamp={1}
        >
          {achievement.name}
        </Text>
        <Text fontSize="xs" color="slate.400" lineClamp={2}>
          {achievement.description}
        </Text>
        <Text
          fontSize="xs"
          textTransform="uppercase"
          letterSpacing="wider"
          color={rarityColors.text}
          mt={1}
          opacity={0.8}
        >
          {achievement.rarity}
        </Text>
      </Box>
    </Flex>
  );
};
