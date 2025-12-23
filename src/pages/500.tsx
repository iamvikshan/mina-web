import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { LuRefreshCw } from 'react-icons/lu';

export default function ServerErrorPage() {
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
            500
          </Heading>
          <Text fontSize="xl" color="gray.400">
            Something went wrong on our end.
          </Text>
          <Text fontSize="lg" color="gray.500">
            (╥﹏╥)
          </Text>
          <Button asChild size="lg" colorPalette="red" mt="4">
            <Link href="/">
              <LuRefreshCw style={{ marginRight: '8px' }} />
              Try Again
            </Link>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

// Force static generation
export const getStaticProps = async () => {
  return { props: {} };
};
