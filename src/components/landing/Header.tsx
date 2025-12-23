'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Link,
  Button,
  IconButton,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { LuMenu, LuX } from 'react-icons/lu';
import { BrandLogo } from './BrandLogo';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { UserMenu } from '@/components/menu/UserMenu';
import { useSession } from '@/utils/auth/hooks';
import { injectLandingKeyframes, animations } from './keyframes';

interface NavLink {
  name: string;
  url: string;
  target?: '_blank';
}

const defaultLinks: NavLink[] = [
  { name: 'Dashboard', url: '/dash' },
  { name: 'Docs', url: 'https://docs.4mina.app', target: '_blank' },
];

/**
 * Landing Page Header
 * ===================
 * Uses "island" pattern - SSG shell with client-side auth check
 * Shows LoginBtn when unauthenticated, UserMenu when authenticated
 */
export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { open, onToggle, onClose } = useDisclosure();
  const session = useSession();
  const isAuthenticated = session.status === 'authenticated';

  // Ensure hydration match
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    injectLandingKeyframes();
  }, []);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      insetX="0"
      h="14"
      w="full"
      borderBottomWidth="1px"
      zIndex="50"
      userSelect="none"
      borderColor={{ base: 'gray.200', _dark: 'night.steel/80' }}
      bg={{ base: 'white/60', _dark: 'night.black/40' }}
      backdropFilter="blur(12px)"
      css={{ animation: animations.fadeInUp }}
    >
      <Flex
        mx="auto"
        w="full"
        maxW={{ base: 'full', md: '7xl' }}
        px={{ base: '4', md: '12', lg: '20' }}
        alignItems="center"
        justifyContent="space-between"
        h="full"
      >
        {/* Desktop Nav */}
        <HStack display={{ base: 'none', lg: 'flex' }} gap="12" flex="1">
          {/* Logo */}
          <Link asChild>
            <NextLink href="/">
              <HStack gap="2">
                <BrandLogo h="8" w="auto" />
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  fontFamily="heading"
                  color="white"
                  _hover={{ color: 'amina.crimson' }}
                  transition="colors 0.2s"
                  mt="1"
                >
                  Amina
                </Text>
              </HStack>
            </NextLink>
          </Link>

          {/* Nav Links */}
          <HStack as="nav" gap="1" mt="1">
            {defaultLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target={link.target}
                display="inline-flex"
                h="8"
                alignItems="center"
                justifyContent="center"
                rounded="md"
                bg="transparent"
                px="4"
                py="2"
                fontSize="sm"
                fontWeight="medium"
                color="neutral.400"
                _hover={{ color: 'amina.crimson' }}
                _focus={{ color: 'amina.crimson' }}
                transition="colors 0.2s"
              >
                {link.name}
              </Link>
            ))}
          </HStack>
        </HStack>

        {/* Desktop Auth Section */}
        <HStack display={{ base: 'none', lg: 'flex' }} gap="3">
          {mounted && isAuthenticated ? (
            <UserMenu color="white" shadow="lg" bg="night.shadow" />
          ) : (
            <>
              <Box mt="1" mr="4">
                <ThemeSwitch />
              </Box>
              <Button
                asChild
                variant="solid"
                size="sm"
                bg="discord.blurple"
                color="white"
                _hover={{
                  bg: '#4752c4',
                  boxShadow: '0 0 15px rgba(88, 101, 242, 0.5)',
                }}
              >
                <NextLink href="/api/auth/login">Login with Discord</NextLink>
              </Button>
            </>
          )}
        </HStack>

        {/* Mobile Nav */}
        <Flex
          display={{ base: 'flex', lg: 'none' }}
          alignItems="center"
          justifyContent="space-between"
          w="full"
          px="2"
        >
          <IconButton
            aria-label="Toggle navigation"
            variant="ghost"
            size="sm"
            onClick={onToggle}
            _hover={{ bg: 'night.shadow', color: 'amina.crimson' }}
          >
            {open ? <LuX /> : <LuMenu />}
          </IconButton>

          <HStack gap="2">
            {mounted && isAuthenticated ? (
              <UserMenu color="white" shadow="lg" bg="night.shadow" />
            ) : (
              <>
                <ThemeSwitch />
                <Button
                  asChild
                  variant="solid"
                  size="xs"
                  bg="discord.blurple"
                  color="white"
                  _hover={{ bg: '#4752c4' }}
                >
                  <NextLink href="/api/auth/login">Login</NextLink>
                </Button>
              </>
            )}
          </HStack>
        </Flex>
      </Flex>

      {/* Mobile Menu Dropdown */}
      {open && (
        <Box
          display={{ base: 'block', lg: 'none' }}
          borderTopWidth="1px"
          borderColor="night.steel/80"
          bg="night.shadow/95"
          backdropFilter="blur(12px)"
          css={{ animation: animations.fadeInUp }}
        >
          <VStack as="nav" gap="1" px="4" py="4" align="stretch">
            {defaultLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target={link.target}
                px="4"
                py="3"
                rounded="md"
                fontSize="sm"
                fontWeight="medium"
                color="neutral.400"
                _hover={{
                  color: 'amina.crimson',
                  bg: 'night.black/60',
                  transform: 'translateX(4px)',
                  borderLeftWidth: '2px',
                  borderLeftColor: 'amina.crimson',
                }}
                transition="all 0.2s"
                onClick={onClose}
              >
                {link.name}
              </Link>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};
