'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  HStack,
  VStack,
  Text,
  Link,
  Badge,
} from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import { LuMusic, LuCoffee, LuStar } from 'react-icons/lu';
import { BrandLogo } from './BrandLogo';
import { FooterSocialLink } from './FooterSocialLink';
import { AminaStatusCard } from './AminaStatusCard';
import { SITE, URLS } from '@/config/site';
import { footerLinks, socialLinks } from '@/config/navigation';

const isExternalUrl = (url: string): boolean => {
  return url.startsWith('http') || url.startsWith('https');
};

/**
 * FooterSection Component
 * =======================
 * Landing page footer with navigation, social links, and status card
 */
export const FooterSection = () => {
  const [currentYear, setCurrentYear] = useState<number>(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <Box
      as="footer"
      position="relative"
      w="full"
      overflow="hidden"
      bg="night.black"
      borderTopWidth="1px"
      borderColor="night.steel/30"
    >
      {/* Background decorations */}
      <Box position="absolute" inset="0" pointerEvents="none">
        <Box
          position="absolute"
          top="-40"
          left="-40"
          w="80"
          h="80"
          bg="amina.crimson/10"
          rounded="full"
          filter="blur(48px)"
        />
        <Box
          position="absolute"
          bottom="-40"
          right="-40"
          w="80"
          h="80"
          bg="cyber.blue/10"
          rounded="full"
          filter="blur(48px)"
        />
      </Box>

      <Container
        position="relative"
        maxW="85rem"
        px={{ base: '4', sm: '6', lg: '16' }}
        py={{ base: '10', lg: '20' }}
      >
        {/* Mobile Layout */}
        <VStack display={{ base: 'flex', lg: 'none' }} gap="8">
          {/* Brand Section */}
          <VStack textAlign="center">
            <BrandLogo
              w="32"
              h="auto"
              transition="all 0.3s"
              _hover={{
                filter: 'drop-shadow(0 0 20px rgba(220,20,60,0.6))',
              }}
            />
            <Text
              mt="4"
              fontSize="sm"
              color="neutral.400"
              maxW="md"
              lineHeight="relaxed"
            >
              <Text as="span" color="amina.crimson" fontWeight="semibold">
                Your Guardian Companion.
              </Text>
              <br />
              Protecting communities, bringing people together, one server at a
              time.
            </Text>
            <HStack
              mt="4"
              gap="2"
              px="3"
              py="2"
              bg="night.steel/40"
              borderWidth="1px"
              borderColor="amina.crimson/30"
              rounded="lg"
              backdropFilter="blur(8px)"
            >
              <Box
                w="2"
                h="2"
                bg="discord.green"
                rounded="full"
                className="animate-pulse"
              />
              <Text
                fontSize="xs"
                fontWeight="semibold"
                color="cyber.blue"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Active & Protecting
              </Text>
            </HStack>
          </VStack>

          {/* Mobile Links Grid */}
          <Grid templateColumns="repeat(2, 1fr)" gap="6" w="full">
            {footerLinks.map((section) => (
              <VStack key={section.section} align="start" gap="3">
                <Text
                  fontWeight="bold"
                  color="neutral.200"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  fontSize="sm"
                  borderLeftWidth="2px"
                  borderLeftColor="amina.crimson"
                  pl="3"
                >
                  {section.section}
                </Text>
                <VStack align="start" gap="3">
                  {section.links.map((link) => (
                    <HStack key={link.name} gap="2">
                      <Link
                        href={link.url}
                        target={isExternalUrl(link.url) ? '_blank' : undefined}
                        rel={
                          isExternalUrl(link.url)
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        display="inline-flex"
                        alignItems="center"
                        gap="2"
                        fontSize="sm"
                        color="neutral.400"
                        _hover={{
                          color: 'amina.crimson',
                          transform: 'translateX(4px)',
                        }}
                        transition="all 0.3s"
                      >
                        <Box
                          w="1"
                          h="1"
                          bg="night.steel"
                          rounded="full"
                          _groupHover={{ bg: 'amina.crimson' }}
                        />
                        {link.name}
                      </Link>
                      {section.section === 'Arsenal' &&
                        link.name === 'Command Center' && (
                          <Badge
                            size="sm"
                            bgGradient="linear(to-r, amina.crimson, rose.red)"
                            color="white"
                            px="2"
                            py="0.5"
                            rounded="md"
                            fontSize="xs"
                            fontWeight="bold"
                            boxShadow="0 0 15px rgba(220,20,60,0.4)"
                          >
                            <LuStar size={10} style={{ marginRight: '4px' }} />
                            New!
                          </Badge>
                        )}
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            ))}
          </Grid>

          {/* Mobile Status Card */}
          <Box w="full">
            <AminaStatusCard />
          </Box>
        </VStack>

        {/* Desktop Layout */}
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          alignItems="start"
          justifyContent="space-between"
          gap="8"
        >
          {/* Brand Section */}
          <Box flexShrink={0} maxW="sm">
            <HStack align="start" gap="4">
              <BrandLogo
                w="28"
                h="auto"
                flexShrink={0}
                transition="all 0.3s"
                _hover={{
                  filter: 'drop-shadow(0 0 20px rgba(220,20,60,0.6))',
                }}
              />
              <VStack align="start" gap="3">
                <Text fontSize="sm" color="neutral.400" lineHeight="relaxed">
                  <Text
                    as="span"
                    display="block"
                    color="amina.crimson"
                    fontWeight="semibold"
                    mb="1"
                  >
                    Your Guardian Companion.
                  </Text>
                  Protecting communities, bringing people together, one server
                  at a time.
                </Text>
                <HStack
                  gap="2"
                  px="3"
                  py="2"
                  bg="night.steel/40"
                  borderWidth="1px"
                  borderColor="amina.crimson/30"
                  rounded="lg"
                  backdropFilter="blur(8px)"
                >
                  <Box
                    w="2"
                    h="2"
                    bg="discord.green"
                    rounded="full"
                    className="animate-pulse"
                  />
                  <Text
                    fontSize="xs"
                    fontWeight="semibold"
                    color="cyber.blue"
                    textTransform="uppercase"
                    letterSpacing="wider"
                  >
                    Active & Protecting
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>

          {/* Desktop Links */}
          <HStack flex="1" justify="center" gap="12">
            {footerLinks.map((section) => (
              <VStack key={section.section} align="start" flexShrink={0}>
                <Text
                  fontWeight="bold"
                  color="neutral.200"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  fontSize="sm"
                  borderLeftWidth="2px"
                  borderLeftColor="amina.crimson"
                  pl="3"
                  mb="4"
                >
                  {section.section}
                </Text>
                <VStack align="start" gap="3">
                  {section.links.map((link) => (
                    <HStack key={link.name} gap="2">
                      <Link
                        href={link.url}
                        target={isExternalUrl(link.url) ? '_blank' : undefined}
                        rel={
                          isExternalUrl(link.url)
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        display="inline-flex"
                        alignItems="center"
                        gap="2"
                        fontSize="sm"
                        color="neutral.400"
                        _hover={{
                          color: 'amina.crimson',
                          transform: 'translateX(4px)',
                        }}
                        transition="all 0.3s"
                        role="group"
                      >
                        <Box
                          w="1"
                          h="1"
                          bg="night.steel"
                          rounded="full"
                          _groupHover={{ bg: 'amina.crimson' }}
                          transition="colors 0.3s"
                        />
                        {link.name}
                      </Link>
                      {section.section === 'Arsenal' &&
                        link.name === 'Command Center' && (
                          <Badge
                            size="sm"
                            bgGradient="linear(to-r, amina.crimson, rose.red)"
                            color="white"
                            px="2"
                            py="0.5"
                            rounded="md"
                            fontSize="xs"
                            fontWeight="bold"
                            boxShadow="0 0 15px rgba(220,20,60,0.4)"
                            display="inline-flex"
                            alignItems="center"
                            gap="1"
                          >
                            <LuStar size={10} />
                            New!
                          </Badge>
                        )}
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            ))}
          </HStack>

          {/* Desktop Status Card */}
          <Box flexShrink={0} w="272px">
            <AminaStatusCard />
          </Box>
        </Flex>

        {/* Bottom Bar */}
        <Box
          mt={{ base: '9', sm: '12' }}
          pt={{ base: '9', sm: '12' }}
          borderTopWidth="1px"
          borderColor="night.steel/30"
        >
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            {/* Copyright */}
            <VStack
              align={{ base: 'center', lg: 'start' }}
              gap="2"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <Text fontSize="sm" color="neutral.400">
                © {currentYear} {SITE.title}. All rights reserved.
              </Text>
              <Text fontSize="xs" color="neutral.500">
                Forged by{' '}
                <Link
                  href="https://vikshan.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="amina.crimson"
                  fontWeight="medium"
                  textDecoration="underline"
                  textDecorationStyle="solid"
                  textUnderlineOffset="2px"
                  _hover={{
                    color: 'rose.red',
                    textDecorationStyle: 'dashed',
                  }}
                >
                  vikshan
                </Link>{' '}
                with{' '}
                <HStack
                  as="span"
                  display="inline-flex"
                  gap="1"
                  alignItems="center"
                >
                  <LuMusic
                    size={14}
                    color="#dc143c"
                    style={{ display: 'inline' }}
                  />
                  <Text as="span">and</Text>
                  <LuCoffee
                    size={14}
                    color="#00ced1"
                    style={{ display: 'inline' }}
                  />
                </HStack>
              </Text>
            </VStack>

            {/* Protocol Status */}
            <Text
              display={{ base: 'none', lg: 'block' }}
              fontSize="xs"
              color="neutral.500"
              fontFamily="mono"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              <Text as="span" color="amina.crimson">
                ▸
              </Text>{' '}
              Night Guard Protocol Active{' '}
              <Text as="span" color="cyber.blue">
                ▸
              </Text>{' '}
              Server Protection Enabled
            </Text>

            {/* Social Links */}
            <HStack gap="3">
              <FooterSocialLink href={URLS.support} icon={FaDiscord} />
              <FooterSocialLink href={socialLinks.x} icon={FaTwitter} />
              <FooterSocialLink href={socialLinks.github} icon={FaGithub} />
            </HStack>
          </Flex>

          {/* Mobile Protocol Status */}
          <Box
            display={{ base: 'block', lg: 'none' }}
            pt="2"
            textAlign="center"
            borderTopWidth="1px"
            borderColor="night.steel/20"
            mt="4"
          >
            <Text
              fontSize="xs"
              color="neutral.500"
              fontFamily="mono"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              <Text as="span" color="amina.crimson">
                ▸
              </Text>{' '}
              Night Guard Protocol Active{' '}
              <Text as="span" color="cyber.blue">
                ▸
              </Text>{' '}
              Server Protection Enabled
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
