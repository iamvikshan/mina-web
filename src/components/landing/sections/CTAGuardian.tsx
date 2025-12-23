'use client';

import { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Icon,
} from '@chakra-ui/react';
import {
  LuHeart,
  LuCheck,
  LuArrowRight,
  LuChartBar,
  LuShield,
  LuLock,
  LuStar,
} from 'react-icons/lu';
import { FaDiscord } from 'react-icons/fa';
import { ImagePaths } from '@/utils/cdn';
import { getInviteUrl } from '@/config/permalinks';
import { injectLandingKeyframes, animations } from '../keyframes';

const statusColors = {
  online: {
    borderColor: '#22c55e',
    textColor: '#22c55e',
    glowColor: 'rgba(34, 197, 94, 0.4)',
    label: 'Online',
  },
  idle: {
    borderColor: '#eab308',
    textColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.4)',
    label: 'Idle',
  },
  dnd: {
    borderColor: '#ef4444',
    textColor: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    label: 'Do Not Disturb',
  },
  invisible: {
    borderColor: '#6b7280',
    textColor: '#6b7280',
    glowColor: 'rgba(107, 114, 128, 0.4)',
    label: 'Offline',
  },
} as const;

interface CTAGuardianProps {
  ping: number;
  status: 'online' | 'idle' | 'dnd' | 'invisible' | (string & {});
}

const features = [
  'Free forever tier with core features',
  'Setup in under 3 minutes',
  'No credit card required',
  '99.9% uptime guarantee',
  '24/7 automated protection',
];

/**
 * CTAGuardian Section
 * ===================
 * Final call-to-action with character image
 */
export const CTAGuardian = ({ ping, status }: CTAGuardianProps) => {
  const inviteUrl = getInviteUrl();
  const currentStatus =
    status in statusColors
      ? statusColors[status as keyof typeof statusColors]
      : statusColors.online;

  const particlesRef = useRef<HTMLDivElement>(null);

  // Inject keyframes and create particles on mount
  useEffect(() => {
    injectLandingKeyframes();

    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const color = Math.random() > 0.5 ? '#DC143C' : '#00CED1';
      const duration = Math.random() * 10 + 5;
      const delay = Math.random() * 5;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.4 + 0.1};
        animation: particle-rise ${duration}s linear infinite;
        animation-delay: ${delay}s;
      `;
      container.appendChild(particle);
    }

    // Add keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particle-rise {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        50% { opacity: 0.4; }
        100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <Box
      as="section"
      py={{ base: '20', md: '32' }}
      bgGradient="linear(to-b, night.shadow, night.steel/30, night.shadow)"
      position="relative"
      overflow="hidden"
    >
      {/* Background Effects */}
      <Box position="absolute" inset="0">
        <Box
          position="absolute"
          inset="0"
          bg="radial-gradient(circle at 50% 50%, rgba(220, 20, 60, 0.2), transparent)"
        />
        <Box
          position="absolute"
          inset="0"
          bgImage='url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwQ0VEMSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")'
          opacity="0.5"
        />
        <Box ref={particlesRef} position="absolute" inset="0" />
      </Box>

      <Container
        position="relative"
        maxW="8xl"
        px={{ base: '4', sm: '6', lg: '8' }}
      >
        <Box
          display="flex"
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems="center"
          gap={{ base: '12', lg: '16' }}
        >
          {/* Character Image */}
          <Box
            flex="1"
            display="flex"
            justifyContent={{ base: 'center', lg: 'flex-end' }}
          >
            <Box position="relative" role="group">
              {/* Glow */}
              <Box
                position="absolute"
                inset="0"
                bgGradient="linear(to-t, amina.crimson/30, cyber.blue/20, transparent)"
                filter="blur(60px)"
                rounded="full"
                transform="scale(1.1)"
                _groupHover={{ transform: 'scale(1.25)' }}
                transition="transform 0.7s"
              />

              {/* Character */}
              <Box position="relative">
                <Image
                  src={ImagePaths.hero.casual}
                  alt="Amina - Your Guardian"
                  maxW="md"
                  h="auto"
                  zIndex="10"
                  filter="drop-shadow(0 25px 25px rgba(0,0,0,0.5))"
                  css={{ animation: animations.float }}
                  loading="lazy"
                />

                {/* Floating Tags */}
                <Box
                  position="absolute"
                  top="10"
                  left="-10"
                  px="4"
                  py="2"
                  bg="night.steel/80"
                  backdropFilter="blur(12px)"
                  borderWidth="1px"
                  borderColor="cyber.blue"
                  rounded="xl"
                  color="cyan.400"
                  fontSize="sm"
                  fontFamily="mono"
                  boxShadow="0 0 20px rgba(0, 206, 209, 0.3)"
                  css={{
                    animation: animations.floatDelayed1,
                    animationDelay: '0.5s',
                  }}
                >
                  [System: Ready]
                </Box>

                <Box
                  position="absolute"
                  top="32"
                  right="-10"
                  px="4"
                  py="2"
                  bg="night.steel/80"
                  backdropFilter="blur(12px)"
                  borderWidth="1px"
                  rounded="xl"
                  fontSize="sm"
                  fontFamily="mono"
                  css={{
                    borderColor: currentStatus.borderColor,
                    color: currentStatus.textColor,
                    boxShadow: `0 0 20px ${currentStatus.glowColor}`,
                    animation: animations.floatDelayed2,
                    animationDelay: '1s',
                  }}
                >
                  [Status: {currentStatus.label}]
                </Box>

                <Box
                  position="absolute"
                  bottom="20"
                  left="-8"
                  px="4"
                  py="2"
                  bg="night.steel/80"
                  backdropFilter="blur(12px)"
                  borderWidth="1px"
                  borderColor="amina.crimson"
                  rounded="xl"
                  color="amina.crimson"
                  fontSize="sm"
                  fontFamily="mono"
                  boxShadow="0 0 20px rgba(220, 20, 60, 0.3)"
                  css={{
                    animation: animations.floatDelayed3,
                    animationDelay: '1.5s',
                  }}
                >
                  [Ping: {ping}ms]
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Content */}
          <VStack
            flex="1"
            textAlign={{ base: 'center', lg: 'left' }}
            alignItems={{ base: 'center', lg: 'flex-start' }}
            gap="8"
          >
            {/* Badge */}
            <Box
              display="inline-flex"
              alignItems="center"
              gap="2"
              px="4"
              py="2"
              rounded="full"
              bg="night.steel/50"
              backdropFilter="blur(12px)"
              borderWidth="1px"
              borderColor="amina.crimson/30"
              color="amina.crimson"
            >
              <Icon as={LuHeart} boxSize="5" color="amina.crimson" />
              <Text
                fontSize="sm"
                fontFamily="heading"
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                Join the Night Guard
              </Text>
            </Box>

            {/* Heading */}
            <VStack gap="4" alignItems={{ base: 'center', lg: 'flex-start' }}>
              <Text
                as="h2"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontFamily="heading"
                fontWeight="bold"
                color="white"
                lineHeight="tight"
              >
                Your Realm Needs a{' '}
                <Text
                  as="span"
                  bgGradient="linear(to-r, amina.crimson, rose.red, imperial.gold)"
                  bgClip="text"
                >
                  Guardian
                </Text>
              </Text>

              <Text
                fontSize="xl"
                color="gray.300"
                lineHeight="relaxed"
                maxW="2xl"
              >
                Stop manually moderating. Stop losing sleep. Let Amina handle
                the night watch while you focus on building your community.
              </Text>
            </VStack>

            {/* Features */}
            <VStack gap="3" alignItems={{ base: 'center', lg: 'flex-start' }}>
              {features.map((feature) => (
                <HStack key={feature} gap="3" color="gray.300">
                  <Box
                    flexShrink="0"
                    w="6"
                    h="6"
                    rounded="full"
                    bg="green.500/20"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={LuCheck} boxSize="4" color="green.500" />
                  </Box>
                  <Text fontSize="lg">{feature}</Text>
                </HStack>
              ))}
            </VStack>

            {/* CTA Buttons */}
            <HStack
              flexDirection={{ base: 'column', sm: 'row' }}
              gap="4"
              pt="4"
              w={{ base: 'full', sm: 'auto' }}
            >
              <Button
                asChild
                size="lg"
                w={{ base: 'full', sm: 'auto' }}
                bgGradient="linear(to-r, amina.crimson, rose.red)"
                color="white"
                px="8"
                py="5"
                rounded="xl"
                fontFamily="heading"
                fontWeight="bold"
                fontSize="lg"
                _hover={{
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 30px rgba(220, 20, 60, 0.4)',
                }}
                transition="all 0.3s"
              >
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  <FaDiscord
                    style={{
                      marginRight: '12px',
                      width: '28px',
                      height: '28px',
                    }}
                  />
                  Add Amina to Discord
                  <Icon
                    as={LuArrowRight}
                    boxSize="5"
                    ml="2"
                    transition="transform 0.3s"
                    _groupHover={{ transform: 'translateX(8px)' }}
                  />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                w={{ base: 'full', sm: 'auto' }}
                variant="outline"
                borderWidth="2px"
                borderColor="cyber.blue"
                color="cyber.blue"
                px="8"
                py="5"
                rounded="xl"
                fontFamily="heading"
                fontWeight="bold"
                fontSize="lg"
                _hover={{
                  bg: 'cyber.blue/10',
                  transform: 'scale(1.05)',
                }}
                transition="all 0.3s"
              >
                <a href="/dash">
                  <Icon as={LuChartBar} boxSize="5" mr="2" />
                  View Dashboard
                </a>
              </Button>
            </HStack>

            {/* Trust Badges */}
            <HStack
              flexWrap="wrap"
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              gap="4"
              pt="4"
              fontSize="sm"
              color="gray.400"
            >
              <HStack gap="2">
                <Icon as={LuShield} boxSize="4" color="green.500" />
                <Text>Verified by Discord</Text>
              </HStack>
              <Text color="gray.600">•</Text>
              <HStack gap="2">
                <Icon
                  as={LuStar}
                  boxSize="4"
                  color="imperial.gold"
                  fill="currentColor"
                />
                <Text>4.9/5 Rating</Text>
              </HStack>
              <Text color="gray.600">•</Text>
              <HStack gap="2">
                <Icon as={LuLock} boxSize="4" color="cyber.blue" />
                <Text>Enterprise Grade Security</Text>
              </HStack>
            </HStack>

            {/* Closing Message */}
            <Text color="gray.400" fontSize="lg" pt="4">
              Let's protect your realm together{' '}
              <Text as="span" fontSize="3xl">
                (｀･ω･´)ゞ
              </Text>
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};
