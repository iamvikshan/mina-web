import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { LuHouse } from 'react-icons/lu';

export default function NotFoundPage() {
  return (
    <Box
      minH="100vh"
      bg="night.shadow"
      color="white"
      display="flex"
      alignItems="center"
    >
      <Container maxW="xl" textAlign="center">
        <VStack gap="6">
          <Heading
            fontSize={{ base: '6xl', md: '8xl' }}
            fontFamily="heading"
            bgGradient="linear(to-r, amina.crimson, cyber.blue)"
            bgClip="text"
          >
            404
          </Heading>
          <Text fontSize="xl" color="gray.400">
            The page you&apos;re looking for doesn&apos;t exist.
          </Text>
          <Text fontSize="lg" color="gray.500">
            (╯°□°)╯︵ ┻━┻
          </Text>
          <Button asChild size="lg" colorPalette="red" mt="4">
            <Link href="/">
              <LuHouse style={{ marginRight: '8px' }} />
              Go Home
            </Link>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

// Force SSR to prevent static generation issues with Next.js 16
export const getStaticProps = async () => {
  return { props: {} };
};
