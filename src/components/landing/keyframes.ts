/**
 * Landing Page Animation Tokens
 * ==============================
 * Animation tokens for landing page components.
 * 
 * Keyframes and animations are defined in theme/config.tsx using Chakra's
 * native animation system. This file exports:
 * 1. Animation token names for the `animation` prop
 * 2. staggeredFadeIn() helper for index-based delays
 * 
 * Usage in components:
 * ```tsx
 * // Using animation prop (preferred)
 * <Box animation="float">...</Box>
 * 
 * // Using css prop for custom timing
 * <Box css={{ animation: animations.floatDelayed1 }}>...</Box>
 * 
 * // Staggered animations
 * <Box css={{ animation: staggeredFadeIn(index) }}>...</Box>
 * ```
 */

/**
 * Animation token values for use in css prop
 * These match the animation tokens defined in theme/config.tsx
 */
export const animations = {
  float: 'float 6s ease-in-out infinite',
  floatSlow: 'floatSlow 4s ease-in-out infinite',
  floatDelayed1: 'float 4s ease-in-out infinite 0.5s',
  floatDelayed2: 'float 5s ease-in-out infinite 1s',
  floatDelayed3: 'float 4.5s ease-in-out infinite 1.5s',
  breath: 'breath 4s ease-in-out infinite',
  pulse: 'pulse 2s infinite',
  shimmer: 'shimmer 3s linear infinite',
  fadeInUp: 'fadeInUp 0.6s ease-out forwards',
  bounceSlow: 'bounceSlow 3s ease-in-out infinite',
  ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  gradientText: 'gradientText 3s ease infinite',
} as const;

/**
 * Animation token names for use with Chakra's animation prop
 * @example <Box animation="float">...</Box>
 */
export const animationTokens = {
  float: 'float',
  floatSlow: 'floatSlow',
  floatDelayed1: 'floatDelayed1',
  floatDelayed2: 'floatDelayed2',
  floatDelayed3: 'floatDelayed3',
  breath: 'breath',
  pulse: 'pulse',
  shimmer: 'shimmer',
  fadeInUp: 'fadeInUp',
  bounceSlow: 'bounceSlow',
  ping: 'ping',
  gradientText: 'gradientText',
} as const;

/**
 * Staggered fadeInUp animation helper
 * Creates animation with staggered delay based on index
 * @param index - Item index for delay calculation
 * @param baseDelay - Base delay multiplier (default: 0.1s)
 * @returns Animation string with calculated delay
 */
export const staggeredFadeIn = (index: number, baseDelay = 0.1) =>
  `fadeInUp 0.6s ease-out forwards ${(index + 1) * baseDelay}s`;

// Legacy function - no longer needed since keyframes are in theme
// Keeping for backwards compatibility during migration
export const injectLandingKeyframes = () => {
  // No-op: Keyframes are now defined in theme/config.tsx
  // and automatically injected by Chakra's system
};
