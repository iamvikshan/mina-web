'use client';

import { Link, Icon, type LinkProps } from '@chakra-ui/react';
import type { IconType } from 'react-icons';

interface FooterSocialLinkProps extends Omit<LinkProps, 'children'> {
  icon: IconType;
}

/**
 * FooterSocialLink Component
 * ==========================
 * Social media icon link with hover effects
 */
export const FooterSocialLink = ({ icon, ...props }: FooterSocialLinkProps) => {
  return (
    <Link
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      h="10"
      w="10"
      rounded="lg"
      bg="night.steel/40"
      borderWidth="1px"
      borderColor="night.steel"
      color="neutral.400"
      transition="all 0.3s"
      _hover={{
        borderColor: 'amina.crimson',
        color: 'amina.crimson',
        boxShadow: '0 0 15px rgba(220,20,60,0.4)',
        transform: 'scale(1.1)',
      }}
      _active={{
        transform: 'scale(0.95)',
      }}
      _focusVisible={{
        ring: '2px',
        ringColor: 'amina.crimson',
      }}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Icon as={icon} boxSize={5} />
    </Link>
  );
};
