'use client';

import { useState, useEffect, useCallback } from 'react';
import { Box, HStack, VStack, Text, Image } from '@chakra-ui/react';
import { ImagePaths } from '@/utils/cdn';
import { injectLandingKeyframes, animations } from './keyframes';

const METRICS_API = '/api/metrics';

const statusPortraitMap: Record<string, string> = {
  online: ImagePaths.portraits.idle,
  idle: ImagePaths.portraits.success,
  dnd: ImagePaths.portraits.alert,
  invisible: ImagePaths.portraits.error,
};

const statusConfig: Record<
  string,
  { label: string; dotColor: string; kaomoji: string }
> = {
  online: { label: 'On Patrol', dotColor: 'discord.green', kaomoji: '[>]' },
  idle: { label: 'Idle', dotColor: 'yellow.500', kaomoji: '[~]' },
  dnd: { label: 'In Battle', dotColor: 'red.500', kaomoji: '[!]' },
  invisible: { label: 'Offline', dotColor: 'gray.500', kaomoji: '[x]' },
};

interface MetricsData {
  status: 'online' | 'idle' | 'dnd' | 'invisible';
  presence?: {
    message: string;
  };
}

/**
 * AminaStatusCard Component
 * =========================
 * Shows Amina's current status with portrait and presence message
 * Fetches from /api/metrics on mount
 */
export const AminaStatusCard = () => {
  const [data, setData] = useState<MetricsData | null>(null);
  const status = data?.status ?? 'online';
  const cfg = statusConfig[status] ?? statusConfig.online;
  const portrait = statusPortraitMap[status] ?? statusPortraitMap.online;
  const message = data?.presence?.message ?? '"Night Guard Protocol active."';

  const fetchMetrics = useCallback(async () => {
    try {
      const res = await fetch(METRICS_API, {
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) return;
      const json = await res.json();
      setData(json);
    } catch {
      // Silently fail, will use defaults
    }
  }, []);

  useEffect(() => {
    injectLandingKeyframes();
    fetchMetrics();
  }, [fetchMetrics]);

  return (
    <Box
      position="relative"
      bg="linear-gradient(to bottom right, rgba(45, 45, 45, 0.7), rgba(26, 26, 26, 0.7))"
      backdropFilter="blur(12px)"
      borderWidth="2px"
      borderColor="cyber.blue/30"
      rounded="xl"
      p="4"
      transition="all 0.5s"
      _hover={{
        borderColor: 'cyber.blue/60',
        transform: 'scale(1.02)',
        boxShadow: '0 0 20px rgba(0,206,209,0.3)',
      }}
      role="group"
    >
      {/* Top glow line */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="1"
        bgGradient="linear(to-r, transparent, cyber.blue, transparent)"
        opacity="0"
        _groupHover={{ opacity: 1 }}
        transition="opacity 0.5s"
      />

      <HStack gap="4" align="center">
        {/* Portrait with status dot */}
        <Box position="relative" flexShrink={0}>
          <Box
            position="relative"
            w="16"
            h="16"
            rounded="full"
            borderWidth="2px"
            borderColor="cyber.blue"
            boxShadow="0 0 12px rgba(0, 206, 209, 0.4)"
            transition="all 0.5s"
            css={{ animation: animations.breath }}
          >
            <Image
              src={portrait}
              alt="Amina Portrait"
              w="full"
              h="full"
              rounded="full"
              objectFit="cover"
              loading="lazy"
              css={{
                imageRendering: 'pixelated',
              }}
            />
          </Box>

          {/* Status dot */}
          <Box
            position="absolute"
            top="-0.5"
            right="-0.5"
            w="5"
            h="5"
            rounded="full"
            borderWidth="2px"
            borderColor="night.shadow"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="night.shadow"
          >
            <Box
              w="2.5"
              h="2.5"
              rounded="full"
              bg={cfg.dotColor}
              css={{ animation: animations.pulse }}
            />
          </Box>
        </Box>

        {/* Status info */}
        <VStack flex="1" minW="0" align="start" gap="2">
          <Text
            fontSize="xs"
            fontFamily="mono"
            textTransform="uppercase"
            letterSpacing="wider"
            color="cyber.blue"
            display="flex"
            alignItems="center"
            gap="2"
          >
            <Text as="span">{cfg.kaomoji}</Text>
            <Text as="span">{cfg.label}</Text>
          </Text>

          <Text
            fontSize="xs"
            color="neutral.400"
            fontStyle="italic"
            lineHeight="snug"
            fontFamily="dialogue"
            css={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {message}
          </Text>
        </VStack>
      </HStack>

      {/* Corner decoration */}
      <Box
        position="absolute"
        bottom="2"
        right="2"
        w="6"
        h="6"
        borderRightWidth="2px"
        borderBottomWidth="2px"
        borderColor="amina.crimson/30"
        _groupHover={{ borderColor: 'amina.crimson/60' }}
        transition="colors 0.3s"
      />
    </Box>
  );
};
