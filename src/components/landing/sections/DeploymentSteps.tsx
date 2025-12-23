'use client';

import { useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import { LuLink, LuSettings, LuRocket, LuClock } from 'react-icons/lu';
import { FaDiscord } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { getInviteUrl } from '@/config/permalinks';
import {
  injectLandingKeyframes,
  animations,
  staggeredFadeIn,
} from '../keyframes';

interface Step {
  number: number;
  icon: IconType;
  kaomoji: string;
  title: string;
  description: string;
  duration: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: LuLink,
    kaomoji: '[>_<]',
    title: 'Invite Amina',
    description:
      "Click 'Add to Discord' and select your server. Grant necessary permissions for full guardian capabilities.",
    duration: '30 seconds',
  },
  {
    number: 2,
    icon: LuSettings,
    kaomoji: '(｀･ω･´)',
    title: 'Configure Settings',
    description:
      'Run /setup to initialize your guardian profile. Customize moderation rules, welcome messages, and role assignments.',
    duration: '2 minutes',
  },
  {
    number: 3,
    icon: LuRocket,
    kaomoji: '(•̀ᴗ•́)و',
    title: 'Deploy & Relax',
    description:
      "Amina is now active 24/7. Monitor your server's health from the dashboard and earn guardian ranks as you grow.",
    duration: 'Instant',
  },
];

interface DeploymentStepsProps {
  protectedRealmsLabel: string;
}

/**
 * DeploymentSteps Section
 * =======================
 * 3-step deployment guide
 */
export const DeploymentSteps = ({
  protectedRealmsLabel,
}: DeploymentStepsProps) => {
  const addBotUrl = getInviteUrl();

  useEffect(() => {
    injectLandingKeyframes();
  }, []);

  return (
    <Box
      as="section"
      py={{ base: '20', md: '32' }}
      bg="night.shadow"
      position="relative"
      overflow="hidden"
    >
      {/* Grid background */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-b, cyber.blue/5, transparent, amina.crimson/5)"
      />

      <Container
        position="relative"
        maxW="6xl"
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
            borderColor="imperial.gold/30"
            color="imperial.gold"
          >
            <Text fontSize="xl">[]</Text>
            <Text
              fontSize="sm"
              fontFamily="heading"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
            >
              Quick Deployment Protocol
            </Text>
          </Box>

          <Text
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontFamily="heading"
            fontWeight="bold"
            color="white"
          >
            Guardian Online in{' '}
            <Text
              as="span"
              bgGradient="linear(to-r, imperial.gold, yellow.400)"
              bgClip="text"
            >
              3 Steps
            </Text>
          </Text>

          <Text fontSize="xl" color="gray.300" maxW="2xl">
            No complex setup. No coding required. Amina deploys in under 3
            minutes and starts protecting your realm immediately.
          </Text>
        </VStack>

        {/* Progress Line (Desktop) */}
        <Box
          display={{ base: 'none', lg: 'block' }}
          position="absolute"
          top="50%"
          left="0"
          right="0"
          h="1"
          bgGradient="linear(to-r, cyber.blue, imperial.gold, amina.crimson)"
          transform="translateY(-50%)"
          opacity="0.2"
        />

        {/* Step Cards */}
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
          gap={{ base: '12', lg: '8' }}
        >
          {steps.map((step, index) => (
            <Box
              key={step.number}
              role="group"
              position="relative"
              css={{ animation: staggeredFadeIn(index, 0.2), opacity: 0 }}
            >
              <Box
                position="relative"
                bg="linear-gradient(to bottom right, rgba(45,45,45,0.7), rgba(26,26,26,0.7))"
                backdropFilter="blur(12px)"
                borderWidth="2px"
                borderColor="cyber.blue/30"
                rounded="2xl"
                p="8"
                transition="all 0.5s"
                _hover={{
                  borderColor: 'cyber.blue',
                  boxShadow: '0 0 40px rgba(0, 206, 209, 0.3)',
                  transform: 'scale(1.05) translateY(-8px)',
                }}
              >
                {/* Step Number Badge */}
                <Box
                  position="absolute"
                  top="-6"
                  left="50%"
                  transform="translateX(-50%)"
                >
                  <Box position="relative">
                    <Box
                      position="absolute"
                      inset="0"
                      bg="cyber.blue"
                      rounded="full"
                      filter="blur(8px)"
                      opacity="0.5"
                      _groupHover={{ opacity: 1 }}
                      transition="opacity 0.3s"
                    />
                    <Box
                      position="relative"
                      w="12"
                      h="12"
                      rounded="full"
                      bgGradient="linear(to-br, cyber.blue, imperial.gold)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderWidth="4px"
                      borderColor="night.shadow"
                    >
                      <Text
                        fontSize="xl"
                        fontFamily="heading"
                        fontWeight="bold"
                        color="night.shadow"
                      >
                        {step.number}
                      </Text>
                    </Box>
                  </Box>
                </Box>

                {/* Icon & Kaomoji */}
                <HStack justify="center" gap="4" mb="6" mt="4">
                  <Box
                    transition="transform 0.3s"
                    _groupHover={{ transform: 'scale(1.1)' }}
                  >
                    <Icon as={step.icon} boxSize="12" color="cyber.blue" />
                  </Box>
                  <Text
                    fontSize="3xl"
                    color="cyber.blue"
                    css={{ animation: animations.floatSlow }}
                  >
                    {step.kaomoji}
                  </Text>
                </HStack>

                {/* Content */}
                <VStack textAlign="center" gap="4">
                  <Text
                    as="h3"
                    fontSize="2xl"
                    fontFamily="heading"
                    fontWeight="bold"
                    color="white"
                    _groupHover={{ color: 'cyber.blue' }}
                    transition="colors 0.3s"
                  >
                    {step.title}
                  </Text>

                  <Text color="gray.300" lineHeight="relaxed">
                    {step.description}
                  </Text>

                  {/* Duration Badge */}
                  <HStack
                    px="4"
                    py="2"
                    rounded="full"
                    bg="imperial.gold/10"
                    borderWidth="1px"
                    borderColor="imperial.gold/30"
                    color="imperial.gold"
                    fontSize="sm"
                    fontFamily="mono"
                  >
                    <LuClock size={16} />
                    <Text>{step.duration}</Text>
                  </HStack>
                </VStack>
              </Box>
            </Box>
          ))}
        </Grid>

        {/* CTA */}
        <VStack textAlign="center" mt="16" gap="6">
          <Text color="gray.400" fontSize="lg">
            Join{' '}
            <Text as="strong" color="cyber.blue">
              {protectedRealmsLabel}
            </Text>{' '}
            protected realms
          </Text>

          <HStack gap="4" flexWrap="wrap" justify="center">
            <Button
              asChild
              size="lg"
              bg="discord.blurple"
              color="white"
              px="8"
              fontFamily="heading"
              fontWeight="bold"
              rounded="xl"
              _hover={{
                bg: '#4752c4',
                transform: 'scale(1.05)',
                boxShadow: '0 0 30px rgba(88, 101, 242, 0.5)',
              }}
              transition="all 0.3s"
            >
              <a href={addBotUrl} target="_blank" rel="noopener noreferrer">
                <FaDiscord style={{ marginRight: '8px' }} />
                Recruit Amina
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              color="imperial.gold"
              px="8"
              fontFamily="heading"
              fontWeight="bold"
              rounded="xl"
              _hover={{
                bg: 'imperial.gold/10',
              }}
              transition="all 0.3s"
            >
              <a href="/dash">View Dashboard</a>
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
