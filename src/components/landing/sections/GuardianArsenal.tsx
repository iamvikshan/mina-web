'use client';

import {
  Box,
  Container,
  Grid,
  VStack,
  Text,
  Link,
  Icon,
} from '@chakra-ui/react';
import { animations, staggeredFadeIn } from '../keyframes';
import {
  LuShield,
  LuSwords,
  LuMessageSquare,
  LuChevronRight,
} from 'react-icons/lu';
import type { IconType } from 'react-icons';
import { getDocsUrl } from '@/config/permalinks';

export interface GuardianFeature {
  icon: IconType;
  kaomoji: string;
  title: string;
  subtitle: string;
  description: string;
  learnMoreUrl?: string;
}

const defaultFeatures: GuardianFeature[] = [
  {
    icon: LuShield,
    kaomoji: '(｀･ω･´)',
    title: 'Guardian Protection',
    subtitle: 'Auto-Moderation',
    description:
      'Advanced threat detection with customizable filters. Amina monitors raids, spam, and bad actors 24/7 so you can rest easy.',
    learnMoreUrl: getDocsUrl('features/moderation'),
  },
  {
    icon: LuSwords,
    kaomoji: '(•̀ᴗ•́)و',
    title: 'Combat Commands',
    subtitle: 'Moderation Tools',
    description:
      'Swift action tools for mods - ban, kick, mute, warn with detailed logging. Every action tracked for transparency.',
    learnMoreUrl: getDocsUrl('commands'),
  },
  {
    icon: LuMessageSquare,
    kaomoji: '(✿◠‿◠)',
    title: 'Welcome System',
    subtitle: 'Engagement Features',
    description:
      'Customizable welcome messages, role assignment, and reaction roles to make new members feel at home instantly.',
    learnMoreUrl: getDocsUrl('features/welcome'),
  },
];

interface GuardianArsenalProps {
  features?: GuardianFeature[];
}

/**
 * GuardianArsenal Section
 * =======================
 * Feature showcase grid with hover effects
 */
export const GuardianArsenal = ({
  features = defaultFeatures,
}: GuardianArsenalProps) => {
  return (
    <Box
      as="section"
      py={{ base: '20', md: '32' }}
      bg="night.shadow"
      position="relative"
      overflow="hidden"
    >
      {/* Dot pattern background */}
      <Box
        position="absolute"
        inset="0"
        opacity="0.3"
        css={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='2' cy='2' r='1' fill='%2300CED1' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dots)'/%3E%3C/svg%3E")`,
        }}
      />

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
            borderColor="amina.crimson/30"
            color="amina.crimson"
          >
            <Text fontSize="xl">[***]</Text>
            <Text
              fontSize="sm"
              fontFamily="heading"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
            >
              Amina's Guardian Capabilities
            </Text>
          </Box>

          <Text
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontFamily="heading"
            fontWeight="bold"
            color="white"
          >
            Your Guardian's{' '}
            <Text
              as="span"
              bgGradient="linear(to-r, amina.crimson, rose.red)"
              bgClip="text"
            >
              Arsenal
            </Text>
          </Text>

          <Text fontSize="xl" color="gray.300" maxW="3xl">
            From tactical moderation to creative engagement, Amina brings a
            complete suite of guardian tools to protect and energize your
            Discord realm.
          </Text>
        </VStack>

        {/* Feature Grid */}
        <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap="8">
          {features.map((feature, index) => (
            <Box
              key={feature.title}
              role="group"
              position="relative"
              bgGradient="linear(to-br, night.500/50, night.600/50)"
              backdropFilter="blur(12px)"
              borderWidth="2px"
              borderColor="cyber.400/20"
              rounded="2xl"
              p="8"
              transition="all 0.5s"
              _hover={{
                borderColor: 'cyber.400/60',
                transform: 'scale(1.05)',
                boxShadow: '0 0 40px rgba(0, 206, 209, 0.3)',
              }}
              animation={staggeredFadeIn(index)}
              css={{ opacity: 0 }}
            >
              {/* Top glow line */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                h="1"
                bgGradient="linear(to-r, transparent, cyber.400, transparent)"
                opacity="0"
                _groupHover={{ opacity: 1 }}
                transition="opacity 0.5s"
              />

              {/* Icon & Kaomoji */}
              <Box mb="6" position="relative">
                <Box
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w="16"
                  h="16"
                  rounded="xl"
                  bg="cyber.400/10"
                  borderWidth="1px"
                  borderColor="cyber.400/30"
                  _groupHover={{ bg: 'cyber.400/20' }}
                  transition="all 0.3s"
                >
                  <Icon as={feature.icon} boxSize="8" color="cyber.400" />
                </Box>
                <Text
                  position="absolute"
                  top="-2"
                  right="-2"
                  fontSize="2xl"
                  css={{ animation: animations.bounceSlow }}
                >
                  {feature.kaomoji}
                </Text>
              </Box>

              {/* Content */}
              <VStack align="start" gap="4">
                <Box>
                  <Text
                    fontSize="xs"
                    fontFamily="mono"
                    color="cyber.400"
                    textTransform="uppercase"
                    letterSpacing="widest"
                    mb="2"
                  >
                    {feature.subtitle}
                  </Text>
                  <Text
                    as="h3"
                    fontSize="2xl"
                    fontFamily="heading"
                    fontWeight="bold"
                    color="white"
                    _groupHover={{ color: 'cyber.400' }}
                    transition="colors 0.3s"
                  >
                    {feature.title}
                  </Text>
                </Box>

                <Text color="gray.300" lineHeight="relaxed">
                  {feature.description}
                </Text>

                {feature.learnMoreUrl && (
                  <Link
                    href={feature.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="inline-flex"
                    alignItems="center"
                    gap="2"
                    color="cyber.400"
                    fontWeight="medium"
                    _hover={{ color: 'white' }}
                    transition="colors 0.3s"
                  >
                    <Text>Learn More</Text>
                    <LuChevronRight
                      style={{ transition: 'transform 0.3s' }}
                      className="group-hover:translate-x-1"
                    />
                  </Link>
                )}
              </VStack>

              {/* Corner decoration */}
              <Box
                position="absolute"
                bottom="4"
                right="4"
                w="12"
                h="12"
                borderRightWidth="2px"
                borderBottomWidth="2px"
                borderColor="amina.crimson/20"
                _groupHover={{ borderColor: 'amina.crimson/60' }}
                transition="colors 0.3s"
              />
            </Box>
          ))}
        </Grid>

        {/* CTA */}
        <VStack textAlign="center" mt="16">
          <Text color="gray.400" fontSize="lg" mb="4">
            Ready to explore all capabilities?{' '}
            <Text as="span" fontSize="xl">
              (•̀ᴗ•́)و
            </Text>
          </Text>
          <Link
            href={getDocsUrl('commands')}
            target="_blank"
            rel="noopener noreferrer"
            display="inline-flex"
            alignItems="center"
            gap="2"
            px="6"
            py="3"
            bg="transparent"
            borderWidth="2px"
            borderColor="imperial.500"
            color="imperial.500"
            rounded="xl"
            fontFamily="heading"
            fontWeight="bold"
            _hover={{
              bg: 'imperial.500/10',
              transform: 'scale(1.05)',
            }}
            transition="all 0.3s"
          >
            View Full Command List
          </Link>
        </VStack>
      </Container>
    </Box>
  );
};
