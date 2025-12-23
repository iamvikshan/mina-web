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
} from '@chakra-ui/react';
import { LuRadio, LuStar, LuUsers } from 'react-icons/lu';
import { ImagePaths } from '@/utils/cdn';
import {
  injectLandingKeyframes,
  animations,
  staggeredFadeIn,
} from '../keyframes';

interface Testimonial {
  name: string;
  role: string;
  rank: string;
  rankBadge: string;
  rankColor: string;
  avatar: string;
  quote: string;
  kaomoji: string;
  servername: string;
  serverSize: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Rivera',
    role: 'Community Manager',
    rank: 'Legend',
    rankBadge: ImagePaths.badges.legend,
    rankColor: '#DC143C',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    quote:
      "Amina transformed our 50k member server. Moderation is seamless, engagement tripled, and I finally get sleep. Best bot decision we've ever made.",
    kaomoji: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
    servername: 'Gaming Legion',
    serverSize: '50k members',
  },
  {
    name: 'Sarah Chen',
    role: 'Server Owner',
    rank: 'Commander',
    rankBadge: ImagePaths.badges.commander,
    rankColor: '#FFD700',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    quote:
      'The custom commands and automated workflows saved us hundreds of hours. Amina feels like having a full mod team working 24/7.',
    kaomoji: '(≧▽≦)',
    servername: 'Creative Hub',
    serverSize: '18k members',
  },
  {
    name: 'Marcus Thompson',
    role: 'Discord Admin',
    rank: 'Guard',
    rankBadge: ImagePaths.badges.guard,
    rankColor: '#4169E1',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    quote:
      'Setup took 2 minutes. Within a week, our server activity doubled. The analytics dashboard is a game-changer for understanding our community.',
    kaomoji: '(☆▽☆)',
    servername: 'Tech Innovators',
    serverSize: '12k members',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Esports Coordinator',
    rank: 'Elite',
    rankBadge: ImagePaths.badges.elite,
    rankColor: '#9370DB',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    quote:
      'Tournament automation with Amina is incredible. Bracket management, role assignments, and notifications all happen automatically.',
    kaomoji: '(｀･ω･´)',
    servername: 'Esports Arena',
    serverSize: '8k members',
  },
  {
    name: 'David Kim',
    role: 'Content Creator',
    rank: 'Scout',
    rankBadge: ImagePaths.badges.scout,
    rankColor: '#00CED1',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    quote:
      "As a streamer, Amina's Twitch integration and subscriber perks system are perfect. My community loves the automated rewards.",
    kaomoji: '(๑•̀ㅂ•́)و',
    servername: 'Stream Squad',
    serverSize: '5k members',
  },
  {
    name: 'Lisa Anderson',
    role: 'Education Lead',
    rank: 'Elite',
    rankBadge: ImagePaths.badges.elite,
    rankColor: '#9370DB',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    quote:
      'Running a study server with Amina is effortless. Study room management, timer commands, and focus mode features are brilliant.',
    kaomoji: '(｀･ω･´)',
    servername: 'Study Together',
    serverSize: '6k members',
  },
];

interface GuardianTestimonialsProps {
  formattedGuildCount: string;
  uptime: number;
}

/**
 * GuardianTestimonials Section
 * ============================
 * User testimonials with rank badges
 */
export const GuardianTestimonials = ({
  formattedGuildCount,
  uptime,
}: GuardianTestimonialsProps) => {
  useEffect(() => {
    injectLandingKeyframes();
  }, []);

  return (
    <Box
      as="section"
      py={{ base: '20', md: '32' }}
      bgGradient="linear(to-b, night.shadow, night.steel/20, night.shadow)"
      position="relative"
      overflow="hidden"
    >
      {/* Background Elements */}
      <Box position="absolute" inset="0" overflow="hidden">
        <Box
          position="absolute"
          top="20"
          left="10"
          w="96"
          h="96"
          bg="cyber.blue/10"
          rounded="full"
          filter="blur(60px)"
        />
        <Box
          position="absolute"
          bottom="20"
          right="10"
          w="96"
          h="96"
          bg="amina.crimson/10"
          rounded="full"
          filter="blur(60px)"
        />
      </Box>

      <Container
        position="relative"
        maxW="8xl"
        px={{ base: '4', sm: '6', lg: '8' }}
      >
        {/* Header */}
        <VStack textAlign="center" mb="16" gap="4">
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
            borderColor="cyber.blue/30"
            color="cyber.blue"
          >
            <Icon as={LuRadio} boxSize="5" color="cyber.blue" />
            <Text
              fontSize="sm"
              fontFamily="heading"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
            >
              Guardian Field Reports
            </Text>
          </Box>

          <Text
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontFamily="heading"
            fontWeight="bold"
            color="white"
          >
            Trusted by{' '}
            <Text
              as="span"
              bgGradient="linear(to-r, cyber.blue, imperial.gold, amina.crimson)"
              bgClip="text"
            >
              {formattedGuildCount} Realms
            </Text>
          </Text>

          <Text fontSize="xl" color="gray.300" maxW="3xl">
            Real guardians. Real results. Hear from community leaders who deploy
            Amina every day.
          </Text>
        </VStack>

        {/* Testimonial Cards */}
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap="6"
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={testimonial.name}
              role="group"
              position="relative"
              bg="linear-gradient(to bottom right, rgba(45,45,45,0.7), rgba(26,26,26,0.7))"
              backdropFilter="blur(12px)"
              borderWidth="2px"
              borderColor="gray.700/50"
              rounded="2xl"
              p="6"
              transition="all 0.5s"
              css={{
                animation: staggeredFadeIn(index),
                opacity: 0,
                '--rank-color': testimonial.rankColor,
              }}
              _hover={{
                borderColor: 'var(--rank-color)',
                transform: 'scale(1.05)',
                boxShadow: '0 0 30px rgba(0, 206, 209, 0.3)',
              }}
            >
              {/* Quote Mark */}
              <Box
                position="absolute"
                top="-4"
                left="-4"
                fontSize="6xl"
                color="cyber.blue/20"
                fontFamily="serif"
              >
                "
              </Box>

              {/* Header */}
              <HStack gap="4" mb="4" alignItems="start">
                {/* Avatar */}
                <Box position="relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    w="16"
                    h="16"
                    rounded="full"
                    borderWidth="2px"
                    borderColor="gray.700"
                    _groupHover={{ borderColor: 'var(--rank-color)' }}
                    transition="colors 0.3s"
                  />
                  <Box
                    position="absolute"
                    bottom="-1"
                    right="-1"
                    w="5"
                    h="5"
                    bg="green.500"
                    rounded="full"
                    borderWidth="2px"
                    borderColor="night.shadow"
                  />
                </Box>

                {/* Info */}
                <Box flex="1">
                  <HStack gap="2" mb="1">
                    <Text
                      fontSize="lg"
                      fontFamily="heading"
                      fontWeight="bold"
                      color="white"
                      _groupHover={{ color: 'var(--rank-color)' }}
                      transition="colors 0.3s"
                    >
                      {testimonial.name}
                    </Text>
                    <Text fontSize="lg">{testimonial.kaomoji}</Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.400">
                    {testimonial.role}
                  </Text>
                  <HStack fontSize="xs" color="gray.500" gap="1" mt="1">
                    <Icon as={LuUsers} boxSize="3" />
                    <Text>
                      {testimonial.servername} · {testimonial.serverSize}
                    </Text>
                  </HStack>
                </Box>

                {/* Rank Badge */}
                <Box position="relative" role="group">
                  <Box
                    position="absolute"
                    inset="0"
                    rounded="full"
                    filter="blur(12px)"
                    opacity="0"
                    _groupHover={{ opacity: 1 }}
                    transition="opacity 0.5s"
                    css={{ background: `${testimonial.rankColor}33` }}
                  />
                  <Image
                    src={testimonial.rankBadge}
                    alt={`${testimonial.rank} Badge`}
                    w="12"
                    h="12"
                    imageRendering="pixelated"
                    transition="transform 0.5s"
                    _groupHover={{
                      transform: 'scale(1.1) rotate(12deg)',
                    }}
                  />
                </Box>
              </HStack>

              {/* Quote */}
              <Text color="gray.300" lineHeight="relaxed" fontSize="sm" mb="4">
                {testimonial.quote}
              </Text>

              {/* Footer */}
              <HStack
                justify="space-between"
                pt="4"
                borderTopWidth="1px"
                borderColor="gray.700/50"
              >
                <HStack
                  color="green.500"
                  fontSize="xs"
                  fontWeight="medium"
                  gap="2"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Text>Verified Guardian</Text>
                </HStack>

                <Text fontSize="xs" color="gray.500" fontFamily="mono">
                  {testimonial.rank} Rank
                </Text>
              </HStack>

              {/* Corner Decoration */}
              <Box
                position="absolute"
                bottom="4"
                right="4"
                w="8"
                h="8"
                borderRightWidth="2px"
                borderBottomWidth="2px"
                borderColor="var(--rank-color)"
                opacity="0.3"
                _groupHover={{ opacity: 1 }}
                transition="opacity 0.3s"
              />
            </Box>
          ))}
        </Grid>

        {/* Stats Row */}
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
          gap="6"
          mt="16"
        >
          <Box
            textAlign="center"
            p="6"
            bg="night.steel/30"
            backdropFilter="blur(8px)"
            rounded="xl"
            borderWidth="1px"
            borderColor="gray.700/50"
          >
            <Text
              fontSize="3xl"
              fontFamily="heading"
              fontWeight="bold"
              color="white"
              mb="1"
            >
              4.9/5
            </Text>
            <Text fontSize="sm" color="gray.400">
              Average Rating
            </Text>
            <HStack justify="center" gap="1" mt="2">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  as={LuStar}
                  boxSize="4"
                  color="imperial.gold"
                  fill="currentColor"
                />
              ))}
            </HStack>
          </Box>

          <Box
            textAlign="center"
            p="6"
            bg="night.steel/30"
            backdropFilter="blur(8px)"
            rounded="xl"
            borderWidth="1px"
            borderColor="gray.700/50"
          >
            <Text
              fontSize="3xl"
              fontFamily="heading"
              fontWeight="bold"
              color="white"
              mb="1"
            >
              {uptime.toFixed(1)}%
            </Text>
            <Text fontSize="sm" color="gray.400">
              Uptime
            </Text>
          </Box>

          <Box
            textAlign="center"
            p="6"
            bg="night.steel/30"
            backdropFilter="blur(8px)"
            rounded="xl"
            borderWidth="1px"
            borderColor="gray.700/50"
          >
            <Text
              fontSize="3xl"
              fontFamily="heading"
              fontWeight="bold"
              color="white"
              mb="1"
            >
              24/7
            </Text>
            <Text fontSize="sm" color="gray.400">
              Guardian Active
            </Text>
          </Box>

          <Box
            textAlign="center"
            p="6"
            bg="night.steel/30"
            backdropFilter="blur(8px)"
            rounded="xl"
            borderWidth="1px"
            borderColor="gray.700/50"
          >
            <Text
              fontSize="3xl"
              fontFamily="heading"
              fontWeight="bold"
              color="white"
              mb="1"
            >
              {formattedGuildCount}
            </Text>
            <Text fontSize="sm" color="gray.400">
              Protected Realms
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
