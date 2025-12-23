'use client';

import { useState, useEffect, useCallback } from 'react';
import { Box, HStack, Text, Link, IconButton } from '@chakra-ui/react';
import { LuExternalLink, LuX } from 'react-icons/lu';

const STATUS_PAGE_URL = 'https://mina.instatus.com';
const STORAGE_KEY = 'status-pill-dismissed';
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

interface StatusConfig {
  level: string;
  color: string;
  bgColor: string;
  glowColor: string;
  dotColor: string;
  message: string;
}

const STATUS_CONFIGS: Record<string, StatusConfig> = {
  operational: {
    level: 'operational',
    color: '#22c55e',
    bgColor: 'rgba(34, 197, 94, 0.1)',
    glowColor: 'rgba(34, 197, 94, 0.3)',
    dotColor: '#22c55e',
    message: 'Operational',
  },
  degraded: {
    level: 'degraded',
    color: '#eab308',
    bgColor: 'rgba(234, 179, 8, 0.1)',
    glowColor: 'rgba(234, 179, 8, 0.3)',
    dotColor: '#eab308',
    message: 'Degraded',
  },
  partial: {
    level: 'partial',
    color: '#f97316',
    bgColor: 'rgba(249, 115, 22, 0.1)',
    glowColor: 'rgba(249, 115, 22, 0.3)',
    dotColor: '#f97316',
    message: 'Issues',
  },
  major: {
    level: 'major',
    color: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
    glowColor: 'rgba(239, 68, 68, 0.3)',
    dotColor: '#ef4444',
    message: 'Outage',
  },
  loading: {
    level: 'loading',
    color: '#94a3b8',
    bgColor: 'rgba(148, 163, 184, 0.12)',
    glowColor: 'rgba(148, 163, 184, 0.35)',
    dotColor: '#94a3b8',
    message: 'Checking',
  },
};

const fadeInAnimation = 'statusPillFadeIn';
const pingAnimation = 'statusPillPing';

// Add keyframes via style tag on mount
const injectKeyframes = () => {
  if (typeof document === 'undefined') return;
  if (document.getElementById('status-pill-keyframes')) return;

  const style = document.createElement('style');
  style.id = 'status-pill-keyframes';
  style.textContent = `
    @keyframes statusPillFadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      20% {
        opacity: 1;
        transform: translateY(0);
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0.3;
      }
    }
    @keyframes statusPillPing {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
};

/**
 * StatusPill Component
 * ====================
 * Floating system status indicator showing real-time health
 * Fetches from /api/status every 5 minutes
 */
export const StatusPill = () => {
  const [isDismissed, setIsDismissed] = useState(true); // Start hidden until we check localStorage
  const [isHovered, setIsHovered] = useState(false);
  const [config, setConfig] = useState<StatusConfig>(STATUS_CONFIGS.loading);
  const [statusTitle, setStatusTitle] = useState(
    'Click to view detailed status'
  );

  // Check localStorage on mount
  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY) === 'true';
    setIsDismissed(dismissed);
  }, []);

  const getStatusConfig = useCallback(
    (payload: {
      uptime: number;
      downMonitors: number;
      totalMonitors: number;
    }) => {
      const { uptime, downMonitors, totalMonitors } = payload;

      if (downMonitors === 0 && uptime >= 95) {
        return STATUS_CONFIGS.operational;
      }

      if (
        downMonitors === 1 ||
        (downMonitors === 0 && uptime >= 90 && uptime < 95)
      ) {
        return STATUS_CONFIGS.degraded;
      }

      if (
        (downMonitors >= 2 && downMonitors < totalMonitors / 2) ||
        (downMonitors === 0 && uptime >= 80 && uptime < 90)
      ) {
        return STATUS_CONFIGS.partial;
      }

      return STATUS_CONFIGS.major;
    },
    []
  );

  const refreshStatus = useCallback(async () => {
    try {
      const response = await fetch('/api/status', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Status API returned ${response.status}`);
      }

      const payload = await response.json();
      const newConfig = getStatusConfig(payload);
      setConfig(newConfig);

      const downText = payload.downMonitors ?? 0;
      const totalText = payload.totalMonitors ?? 0;
      const operationalText = totalText - downText;
      setStatusTitle(
        `${operationalText}/${totalText} services operational • Click for details${payload.cached ? ' • cached' : ''}`
      );
    } catch (error) {
      console.error('[StatusPill] Failed to fetch status data', error);
      setConfig(STATUS_CONFIGS.degraded);
    }
  }, [getStatusConfig]);

  useEffect(() => {
    if (isDismissed) return;

    injectKeyframes();
    refreshStatus();
    const interval = setInterval(refreshStatus, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [isDismissed, refreshStatus]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <Box
      position="fixed"
      bottom="6"
      right="6"
      zIndex="50"
      transition="all 0.5s"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status Pill */}
      <Link
        href={STATUS_PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        display="flex"
        alignItems="center"
        gap={{ base: '1', md: '1.5' }}
        px={{ base: '1.5', md: '2' }}
        py={{ base: '1', md: '1.5' }}
        rounded="full"
        backdropFilter="blur(12px)"
        borderWidth="1px"
        transition="all 0.3s"
        _hover={{ transform: 'scale(1.05)' }}
        shadow="lg"
        fontSize="xs"
        bg={config.bgColor}
        borderColor={config.color}
        color={config.color}
        title={statusTitle}
        animation={
          isHovered ? 'none' : `${fadeInAnimation} 4s ease-out forwards`
        }
        opacity={isHovered ? 1 : undefined}
        textDecoration="none"
      >
        {/* Pulsing Dot */}
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Outer pulse ring */}
          <Box
            position="absolute"
            w={{ base: '1.5', md: '2' }}
            h={{ base: '1.5', md: '2' }}
            rounded="full"
            opacity={0.75}
            bg={config.dotColor}
            animation={`${pingAnimation} 1s cubic-bezier(0, 0, 0.2, 1) infinite`}
          />
          {/* Inner solid dot */}
          <Box
            position="relative"
            w={{ base: '1', md: '1.5' }}
            h={{ base: '1', md: '1.5' }}
            rounded="full"
            bg={config.dotColor}
            boxShadow={`0 0 6px ${config.glowColor}`}
          />
        </Box>

        {/* Status Text */}
        <Text
          display={{ base: 'none', md: 'inline-block' }}
          fontSize="xs"
          fontFamily="mono"
          fontWeight="medium"
        >
          {config.message}
        </Text>
        <Text
          display={{ base: 'inline-block', md: 'none' }}
          fontSize="10px"
          fontFamily="mono"
          fontWeight="medium"
        >
          {config.message}
        </Text>

        {/* External link icon */}
        <LuExternalLink
          style={{
            width: '10px',
            height: '10px',
            opacity: isHovered ? 1 : 0.5,
            transition: 'opacity 0.2s',
          }}
        />
      </Link>

      {/* Dismiss Button */}
      <IconButton
        aria-label="Dismiss status indicator"
        size="xs"
        position="absolute"
        top="-1"
        right="-1"
        rounded="full"
        bg="night.steel"
        borderWidth="1px"
        borderColor="gray.600"
        color="gray.400"
        _hover={{
          bg: 'gray.700',
          color: 'white',
          borderColor: 'gray.500',
        }}
        transition="all 0.2s"
        opacity={isHovered ? 1 : 0}
        shadow="lg"
        onClick={handleDismiss}
      >
        <LuX />
      </IconButton>
    </Box>
  );
};
