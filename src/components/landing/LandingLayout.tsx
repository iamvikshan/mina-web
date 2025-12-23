import type { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Header } from './Header';
import { FooterSection } from './FooterSection';
import { StatusPill } from './StatusPill';

interface LandingLayoutProps {
  children: ReactNode;
}

/**
 * LandingLayout
 * =============
 * Layout wrapper for landing page
 * Includes Header, Footer, and StatusPill
 */
export const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <Box minH="100vh" bg="night.shadow" color="white">
      <Header />
      <Box as="main">{children}</Box>
      <FooterSection />
      <StatusPill />
    </Box>
  );
};
