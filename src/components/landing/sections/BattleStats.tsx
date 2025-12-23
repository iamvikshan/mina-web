'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, VStack, Text, Icon } from '@chakra-ui/react';
import { LuShield, LuHammer, LuUsers, LuClock } from 'react-icons/lu';
import type { IconType } from 'react-icons';
import {
  injectLandingKeyframes,
  animations,
  staggeredFadeIn,
} from '../keyframes';

interface Stat {
  id: string;
  icon: IconType;
  kaomoji: string;
  value: number;
  formattedValue: string;
  suffix: string;
  label: string;
  color: string;
  description: string;
}

interface BattleStatsProps {
  guildCount: number;
  memberCount: number;
  actionCount: number;
  uptime: string;
}

/**
 * AnimatedCounter Component
 * =========================
 * Animated number counter that counts up from 0
 */
function AnimatedCounter({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = Date.now();

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = Math.floor(value * easeOutQuart);
              setDisplayValue(currentValue);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(value);
              }
            };

            animate();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={counterRef}>{displayValue.toLocaleString()}</span>;
}

/**
 * BattleStats Section
 * ===================
 * Animated statistics grid
 */
export const BattleStats = ({
  guildCount,
  memberCount,
  actionCount,
  uptime,
}: BattleStatsProps) => {
  // Parse uptime percentage
  const uptimeValue = parseFloat(uptime) || 99.9;

  const stats: Stat[] = [
    {
      id: 'realms',
      icon: LuShield,
      kaomoji: '(⌐■_■)',
      value: guildCount,
      formattedValue: guildCount.toLocaleString(),
      suffix: '',
      label: 'Protected Realms',
      color: 'cyber.blue',
      description: 'Discord servers under protection',
    },
    {
      id: 'actions',
      icon: LuHammer,
      kaomoji: '(ノಠ益ಠ)ノ',
      value: actionCount,
      formattedValue: actionCount.toLocaleString(),
      suffix: '',
      label: 'Actions Executed',
      color: 'amina.crimson',
      description: 'Moderation actions performed',
    },
    {
      id: 'guardians',
      icon: LuUsers,
      kaomoji: '\\(^▽^)/',
      value: memberCount,
      formattedValue: memberCount.toLocaleString(),
      suffix: '',
      label: 'Guardians Served',
      color: 'imperial.gold',
      description: 'Community members protected',
    },
    {
      id: 'uptime',
      icon: LuClock,
      kaomoji: '(●￣ω￣●)',
      value: uptimeValue,
      formattedValue: uptimeValue.toFixed(1),
      suffix: '%',
      label: 'System Uptime',
      color: 'status.online',
      description: 'Reliability guarantee',
    },
  ];

  useEffect(() => {
    injectLandingKeyframes();
  }, []);

  return (
    <Box
      as="section"
      py={{ base: '20', md: '32' }}
      position="relative"
      overflow="hidden"
    >
      {/* Background Elements */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-b, night.shadow, night.steel/50, night.shadow)"
      />

      {/* Animated Grid Background */}
      <Box
        position="absolute"
        inset="0"
        bgImage="radial-gradient(circle at 25% 25%, rgba(0, 206, 209, 0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255, 58, 94, 0.1) 1px, transparent 1px)"
        bgSize="60px 60px"
        css={{ animation: animations.breath }}
      />

      {/* Floating Orbs */}
      <Box
        position="absolute"
        top="1/4"
        left="10%"
        w="300px"
        h="300px"
        bg="cyber.blue"
        rounded="full"
        filter="blur(100px)"
        opacity="0.1"
        css={{ animation: animations.pulse }}
      />
      <Box
        position="absolute"
        bottom="1/4"
        right="10%"
        w="400px"
        h="400px"
        bg="amina.crimson"
        rounded="full"
        filter="blur(120px)"
        opacity="0.1"
        css={{
          animation: 'pulse 8s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />

      <Container
        position="relative"
        maxW="7xl"
        px={{ base: '4', sm: '6', lg: '8' }}
      >
        {/* Header */}
        <VStack textAlign="center" mb="16" gap="6">
          <Box
            display="inline-flex"
            alignItems="center"
            gap="3"
            px="5"
            py="2"
            rounded="full"
            bg="night.steel/50"
            backdropFilter="blur(12px)"
            borderWidth="1px"
            borderColor="cyber.blue/30"
            color="cyber.blue"
          >
            <Text fontSize="xl" css={{ animation: animations.pulse }}>
              []~
            </Text>
            <Text
              fontSize="sm"
              fontFamily="heading"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
            >
              Battle Statistics
            </Text>
          </Box>

          <Text
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontFamily="heading"
            fontWeight="bold"
            color="white"
          >
            Proven in{' '}
            <Text
              as="span"
              bgGradient="linear(to-r, amina.crimson, imperial.gold)"
              bgClip="text"
            >
              Combat
            </Text>
          </Text>

          <Text fontSize="xl" color="gray.300" maxW="2xl">
            Numbers that speak for themselves. Amina's track record of
            protecting Discord communities.
          </Text>
        </VStack>

        {/* Stats Grid */}
        <Grid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={{ base: '6', lg: '8' }}
        >
          {stats.map((stat, index) => (
            <Box
              key={stat.id}
              role="group"
              position="relative"
              css={{
                animation: staggeredFadeIn(index, 0.15),
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}
            >
              {/* Card */}
              <Box
                position="relative"
                p="8"
                rounded="2xl"
                bg="linear-gradient(135deg, rgba(45,45,45,0.8), rgba(26,26,26,0.8))"
                backdropFilter="blur(12px)"
                borderWidth="2px"
                borderColor="night.steel/50"
                overflow="hidden"
                transition="all 0.5s"
                _hover={{
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: `0 25px 50px -12px ${stat.color === 'cyber.blue' ? 'rgba(0,206,209,0.25)' : stat.color === 'amina.crimson' ? 'rgba(255,58,94,0.25)' : stat.color === 'imperial.gold' ? 'rgba(249,188,21,0.25)' : 'rgba(67,181,129,0.25)'}`,
                }}
                css={{
                  '&:hover': {
                    borderColor: stat.color,
                  },
                }}
              >
                {/* Top Glow */}
                <Box
                  position="absolute"
                  top="-1"
                  left="10%"
                  right="10%"
                  h="2"
                  css={{
                    background: `linear-gradient(to right, transparent, var(--chakra-colors-${stat.color.replace('.', '-')}), transparent)`,
                  }}
                  opacity="0"
                  _groupHover={{ opacity: 1 }}
                  transition="opacity 0.3s"
                />

                {/* Icon & Kaomoji */}
                <VStack gap="4" mb="6">
                  <Box position="relative">
                    <Box
                      position="absolute"
                      inset="-2"
                      rounded="xl"
                      opacity="0"
                      _groupHover={{ opacity: 0.2 }}
                      transition="opacity 0.3s"
                      css={{
                        background: stat.color,
                        filter: 'blur(20px)',
                      }}
                    />
                    <Box
                      position="relative"
                      p="4"
                      rounded="xl"
                      borderWidth="1px"
                      borderColor="night.steel/50"
                      bg="night.void/50"
                      _groupHover={{ borderColor: stat.color }}
                      transition="all 0.3s"
                    >
                      <Icon
                        as={stat.icon}
                        boxSize="8"
                        color={stat.color}
                        transition="transform 0.3s"
                        _groupHover={{ transform: 'scale(1.2) rotate(5deg)' }}
                      />
                    </Box>
                  </Box>

                  <Text
                    fontSize="2xl"
                    color={stat.color}
                    opacity="0.8"
                    _groupHover={{ opacity: 1 }}
                    transition="opacity 0.3s"
                  >
                    {stat.kaomoji}
                  </Text>
                </VStack>

                {/* Value */}
                <VStack gap="2" textAlign="center">
                  <Text
                    fontSize={{ base: '4xl', md: '5xl' }}
                    fontFamily="heading"
                    fontWeight="extrabold"
                    color="white"
                    lineHeight="1"
                    bgGradient={`linear(to-r, white, ${stat.color})`}
                    bgSize="200% 100%"
                    bgClip="text"
                    css={{ animation: animations.shimmer }}
                    _groupHover={{}}
                  >
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix}
                  </Text>

                  <Text
                    fontSize="lg"
                    fontFamily="heading"
                    fontWeight="semibold"
                    color="white"
                  >
                    {stat.label}
                  </Text>

                  <Text fontSize="sm" color="gray.400">
                    {stat.description}
                  </Text>
                </VStack>
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Bottom Message */}
        <Box textAlign="center" mt="16">
          <Text fontSize="lg" color="gray.400" fontStyle="italic">
            "Every statistic represents a community made safer."
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2">
            - Updated in real-time
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
