'use client';

import { useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  VStack,
  HStack,
  Text,
  Icon,
  Image,
  Button,
} from '@chakra-ui/react';
import {
  LuTrophy,
  LuSparkles,
  LuAward,
  LuCheck,
  LuChartBar,
} from 'react-icons/lu';
import { ImagePaths } from '@/utils/cdn';
import {
  injectLandingKeyframes,
  animations,
  staggeredFadeIn,
} from '../keyframes';

interface Rank {
  id: number;
  name: string;
  badge: string;
  color: string;
  glowColor: string;
  kaomoji: string;
  description: string;
  requirement: string;
}

const ranks: Rank[] = [
  {
    id: 1,
    name: 'Recruit',
    badge: ImagePaths.badges.recruit,
    color: '#6B7280',
    glowColor: 'rgba(107, 114, 128, 0.4)',
    kaomoji: '(•_•)',
    description: 'New guardian starting journey',
    requirement: 'Join server',
  },
  {
    id: 2,
    name: 'Guardian',
    badge: ImagePaths.badges.guardian,
    color: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    kaomoji: '(•̀ᴗ•́)',
    description: 'Active community protector',
    requirement: '100 XP',
  },
  {
    id: 3,
    name: 'Sentinel',
    badge: ImagePaths.badges.sentinel,
    color: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    kaomoji: '(ง •_•)ง',
    description: 'Trusted realm defender',
    requirement: '500 XP',
  },
  {
    id: 4,
    name: 'Champion',
    badge: ImagePaths.badges.champion,
    color: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    kaomoji: '(╯°□°)╯',
    description: 'Elite moderation expert',
    requirement: '1,500 XP',
  },
  {
    id: 5,
    name: 'Hero',
    badge: ImagePaths.badges.hero,
    color: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    kaomoji: '✧(◕‿◕)✧',
    description: 'Legendary protector',
    requirement: '5,000 XP',
  },
  {
    id: 6,
    name: 'Legend',
    badge: ImagePaths.badges.legend,
    color: '#FF3A5E',
    glowColor: 'rgba(255, 58, 94, 0.4)',
    kaomoji: '(ノ◕ヮ◕)ノ✧',
    description: 'Mythical realm guardian',
    requirement: '15,000 XP',
  },
];

/**
 * RankShowcase Section
 * ====================
 * Displays rank progression system
 */
export const RankShowcase = () => {
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
      {/* Animated Background */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-br, night.shadow, night.void, night.shadow)"
      />

      {/* Particle Effects */}
      <Box
        position="absolute"
        inset="0"
        bgImage="radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(249, 188, 21, 0.15) 0%, transparent 40%)"
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
            borderColor="imperial.gold/30"
            color="imperial.gold"
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
              Guardian Ranks
            </Text>
          </Box>

          <Text
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontFamily="heading"
            fontWeight="bold"
            color="white"
          >
            Rise Through the{' '}
            <Text
              as="span"
              bgGradient="linear(to-r, imperial.gold, amina.crimson)"
              bgClip="text"
            >
              Ranks
            </Text>
          </Text>

          <Text fontSize="xl" color="gray.300" maxW="2xl">
            Earn XP by being active in protected realms. Each rank unlocks new
            privileges and displays your dedication as a guardian.
          </Text>
        </VStack>

        {/* Progress Line (Desktop) */}
        <Box position="relative">
          <Box
            display={{ base: 'none', lg: 'block' }}
            position="absolute"
            top="50%"
            left="0"
            right="0"
            h="2"
            transform="translateY(-50%)"
          >
            <Box
              h="full"
              bgGradient="linear(to-r, gray.600, purple.500, amina.crimson)"
              rounded="full"
              opacity="0.3"
            />
          </Box>

          {/* Rank Cards */}
          <Grid
            templateColumns={{
              base: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(6, 1fr)',
            }}
            gap={{ base: '6', lg: '4' }}
          >
            {ranks.map((rank, index) => (
              <Box
                key={rank.id}
                role="group"
                position="relative"
                css={{
                  animation: staggeredFadeIn(index),
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  '--rank-color': rank.color,
                  '--rank-glow': rank.glowColor,
                }}
              >
                <Box
                  position="relative"
                  bg="linear-gradient(to bottom right, rgba(45,45,45,0.8), rgba(26,26,26,0.8))"
                  backdropFilter="blur(12px)"
                  borderWidth="2px"
                  borderColor="gray.700/50"
                  rounded="2xl"
                  p="6"
                  transition="all 0.5s"
                  _hover={{
                    borderColor: 'var(--rank-color)',
                    transform: 'scale(1.1) translateY(-16px)',
                    boxShadow: '0 25px 50px var(--rank-glow)',
                  }}
                >
                  {/* Rank Number Badge */}
                  <Box
                    position="absolute"
                    top="-3"
                    left="-3"
                    w="8"
                    h="8"
                    rounded="full"
                    bgGradient="linear(to-br, night.steel, night.shadow)"
                    borderWidth="2px"
                    borderColor="gray.700"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      color="gray.400"
                      _groupHover={{ color: 'var(--rank-color)' }}
                      transition="colors 0.3s"
                    >
                      {rank.id}
                    </Text>
                  </Box>

                  {/* Badge Image */}
                  <Box position="relative" mb="4">
                    <Box
                      position="absolute"
                      inset="0"
                      rounded="full"
                      opacity="0"
                      _groupHover={{ opacity: 1 }}
                      transition="opacity 0.5s"
                      filter="blur(20px)"
                      bg="var(--rank-glow)"
                    />

                    <Box position="relative" aspectRatio="1/1">
                      <Image
                        src={rank.badge}
                        alt={`${rank.name} Badge`}
                        w="full"
                        h="full"
                        objectFit="contain"
                        imageRendering="pixelated"
                        loading="lazy"
                        transition="transform 0.5s"
                        _groupHover={{
                          transform: 'scale(1.1) rotate(5deg)',
                        }}
                      />
                    </Box>

                    <Text
                      position="absolute"
                      top="-2"
                      right="-2"
                      fontSize="xl"
                      css={{ animation: animations.bounceSlow }}
                    >
                      {rank.kaomoji}
                    </Text>
                  </Box>

                  {/* Content */}
                  <VStack textAlign="center" gap="2">
                    <Text
                      as="h3"
                      fontSize="xl"
                      fontFamily="heading"
                      fontWeight="bold"
                      color="gray.300"
                      _groupHover={{ color: 'var(--rank-color)' }}
                      transition="colors 0.3s"
                    >
                      {rank.name}
                    </Text>

                    <Text
                      fontSize="xs"
                      color="gray.400"
                      lineHeight="relaxed"
                      minH="10"
                    >
                      {rank.description}
                    </Text>

                    {/* Requirement Badge */}
                    <HStack
                      px="3"
                      py="1.5"
                      rounded="full"
                      bg="night.shadow/80"
                      borderWidth="1px"
                      borderColor="gray.700/50"
                      _groupHover={{ borderColor: 'var(--rank-color)' }}
                      transition="all 0.3s"
                    >
                      <Icon
                        as={LuCheck}
                        boxSize="3"
                        color="gray.400"
                        _groupHover={{ color: 'var(--rank-color)' }}
                        transition="colors 0.3s"
                      />
                      <Text
                        fontSize="xs"
                        fontFamily="mono"
                        color="gray.400"
                        _groupHover={{ color: 'var(--rank-color)' }}
                        transition="colors 0.3s"
                      >
                        {rank.requirement}
                      </Text>
                    </HStack>
                  </VStack>

                  {/* Connector Line (Desktop) */}
                  {index < ranks.length - 1 && (
                    <Box
                      display={{ base: 'none', lg: 'block' }}
                      position="absolute"
                      top="50%"
                      right="-2"
                      w="4"
                      h="0.5"
                      bgGradient="linear(to-r, var(--rank-color), transparent)"
                      opacity="0.5"
                      _groupHover={{ opacity: 1 }}
                      transition="opacity 0.3s"
                    />
                  )}
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Feature Cards */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap="6"
          mt="16"
        >
          <Box
            textAlign="center"
            p="6"
            bg="linear-gradient(to bottom right, rgba(45,45,45,0.5), rgba(26,26,26,0.5))"
            backdropFilter="blur(12px)"
            borderWidth="1px"
            borderColor="cyber.blue/30"
            rounded="xl"
          >
            <Box display="flex" justifyContent="center" mb="2">
              <Icon as={LuTrophy} boxSize="10" color="cyber.blue" />
            </Box>
            <Text
              fontSize="3xl"
              fontFamily="heading"
              fontWeight="bold"
              color="white"
              mb="1"
            >
              6 Ranks
            </Text>
            <Text color="gray.400" fontSize="sm">
              Unique progression tiers
            </Text>
          </Box>

          <Box
            textAlign="center"
            p="6"
            bg="linear-gradient(to bottom right, rgba(45,45,45,0.5), rgba(26,26,26,0.5))"
            backdropFilter="blur(12px)"
            borderWidth="1px"
            borderColor="imperial.gold/30"
            rounded="xl"
          >
            <Box display="flex" justifyContent="center" mb="2">
              <Icon as={LuSparkles} boxSize="10" color="imperial.gold" />
            </Box>
            <Text
              fontSize="3xl"
              fontFamily="heading"
              fontWeight="bold"
              color="white"
              mb="1"
            >
              Pixel Art
            </Text>
            <Text color="gray.400" fontSize="sm">
              Hand-crafted badge designs
            </Text>
          </Box>

          <Box
            textAlign="center"
            p="6"
            bg="linear-gradient(to bottom right, rgba(45,45,45,0.5), rgba(26,26,26,0.5))"
            backdropFilter="blur(12px)"
            borderWidth="1px"
            borderColor="amina.crimson/30"
            rounded="xl"
          >
            <Box display="flex" justifyContent="center" mb="2">
              <Icon as={LuAward} boxSize="10" color="amina.crimson" />
            </Box>
            <Text
              fontSize="3xl"
              fontFamily="heading"
              fontWeight="bold"
              color="white"
              mb="1"
            >
              Permanent
            </Text>
            <Text color="gray.400" fontSize="sm">
              Ranks never expire
            </Text>
          </Box>
        </Grid>

        {/* CTA */}
        <VStack textAlign="center" mt="12" gap="4">
          <Text color="gray.400" fontSize="lg">
            Start at Recruit and climb to Legend{' '}
            <Text as="span" fontSize="2xl">
              (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
            </Text>
          </Text>

          <Button
            asChild
            size="lg"
            bgGradient="linear(to-r, cyber.blue, imperial.gold)"
            color="night.shadow"
            px="6"
            rounded="xl"
            fontFamily="heading"
            fontWeight="bold"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 0 30px rgba(0, 206, 209, 0.4)',
            }}
            transition="all 0.3s"
          >
            <a href="/dash">
              <LuChartBar style={{ marginRight: '8px' }} />
              Track Your Progress
            </a>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
