/**
 * Landing Page Keyframes
 * ======================
 * CSS keyframes for landing page animations
 *
 * Note: Keyframes are now also defined in theme/config.tsx for Chakra's animation token system.
 * This file provides:
 * 1. injectLandingKeyframes() - For SSR compatibility (injects into document head)
 * 2. animations object - Animation strings for use in css={{ animation: ... }}
 *
 * For new components, prefer using Chakra's animation token: animation="float"
 * For complex/custom animations, use css={{ animation: animations.float }}
 */

let injected = false;

export const injectLandingKeyframes = () => {
  if (typeof document === 'undefined' || injected) return;
  injected = true;

  const style = document.createElement('style');
  style.id = 'landing-keyframes';
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    @keyframes floatSlow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes breath {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.05); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.8; }
    }

    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes bounceSlow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes gradientText {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;
  document.head.appendChild(style);
};

/**
 * Animation strings for use in css={{ animation: ... }}
 * These match the keyframes injected above and defined in theme/config.tsx
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
 * Staggered animation helper
 * Creates fadeInUp animation with staggered delay based on index
 */
export const staggeredFadeIn = (index: number, baseDelay = 0.1) =>
  `fadeInUp 0.6s ease-out forwards ${(index + 1) * baseDelay}s`;
