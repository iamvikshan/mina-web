import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { breakpoints } from './breakpoints';
import { colors, dark, light } from './colors';

const customConfig = defineConfig({
  theme: {
    breakpoints,
    // Amina Keyframe Animations
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      floatSlow: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      breath: {
        '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
        '50%': { opacity: '0.6', transform: 'scale(1.05)' },
      },
      pulse: {
        '0%, 100%': { transform: 'scale(1)', opacity: '1' },
        '50%': { transform: 'scale(1.05)', opacity: '0.8' },
      },
      shimmer: {
        '0%': { backgroundPosition: '-200% center' },
        '100%': { backgroundPosition: '200% center' },
      },
      fadeInUp: {
        from: { opacity: '0', transform: 'translateY(30px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
      bounceSlow: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-8px)' },
      },
      ping: {
        '75%, 100%': { transform: 'scale(2)', opacity: '0' },
      },
      gradientText: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    },
    tokens: {
      colors,
      fonts: {
        // Amina Typography System
        heading: {
          value: `"Exo 2", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
        },
        body: {
          value: `"Nunito Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
        },
        dialogue: {
          value: `"Comfortaa", ui-sans-serif, system-ui, cursive`,
        },
        mono: {
          value: `"Fira Code", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`,
        },
      },
      shadows: {
        // Amina Glow Shadows
        glowCrimson: { value: '0 0 20px rgba(220, 20, 60, 0.6)' },
        glowBlue: { value: '0 0 20px rgba(30, 144, 255, 0.6)' },
        glowGold: { value: '0 0 20px rgba(255, 215, 0, 0.6)' },
        glowGreen: { value: '0 0 20px rgba(87, 242, 135, 0.6)' },
        glowCyan: { value: '0 0 20px rgba(0, 206, 209, 0.5)' },
        glowRed: { value: '0 0 30px rgba(220, 20, 60, 0.5)' },
      },
      durations: {
        fast: { value: '150ms' },
        normal: { value: '300ms' },
        slow: { value: '500ms' },
      },
      // Animation tokens (reference keyframes)
      animations: {
        float: { value: 'float 6s ease-in-out infinite' },
        floatSlow: { value: 'floatSlow 4s ease-in-out infinite' },
        floatDelayed1: { value: 'float 4s ease-in-out infinite 0.5s' },
        floatDelayed2: { value: 'float 5s ease-in-out infinite 1s' },
        floatDelayed3: { value: 'float 4.5s ease-in-out infinite 1.5s' },
        breath: { value: 'breath 4s ease-in-out infinite' },
        pulse: { value: 'pulse 2s infinite' },
        shimmer: { value: 'shimmer 3s linear infinite' },
        fadeInUp: { value: 'fadeInUp 0.6s ease-out forwards' },
        bounceSlow: { value: 'bounceSlow 3s ease-in-out infinite' },
        ping: { value: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' },
        gradientText: { value: 'gradientText 3s ease infinite' },
      },
    },
    semanticTokens: {
      shadows: {
        normal: {
          value: {
            base: light.shadow,
            _dark: dark.shadow,
          },
        },
        // Contextual glow shadows
        glowPrimary: {
          value: {
            base: '0 0 15px rgba(220, 20, 60, 0.4)',
            _dark: '0 0 20px rgba(220, 20, 60, 0.6)',
          },
        },
        glowAccent: {
          value: {
            base: '0 0 15px rgba(0, 206, 209, 0.4)',
            _dark: '0 0 20px rgba(0, 206, 209, 0.6)',
          },
        },
      },
      colors: {
        // Primary text colors
        TextPrimary: {
          value: {
            base: `{colors.${light.textColorPrimary}}`,
            _dark: `{colors.${dark.textColorPrimary}}`,
          },
        },
        TextSecondary: {
          value: {
            base: `{colors.${light.textColorSecondary}}`,
            _dark: `{colors.${dark.textColorSecondary}}`,
          },
        },
        // Background surfaces
        MainBackground: {
          value: {
            base: `{colors.${light.globalBg}}`,
            _dark: `{colors.${dark.globalBg}}`,
          },
        },
        SurfacePrimary: {
          value: {
            base: '{colors.white}',
            _dark: '{colors.night.700}',
          },
        },
        SurfaceSecondary: {
          value: {
            base: '{colors.slate.100}',
            _dark: '{colors.night.600}',
          },
        },
        SurfaceMuted: {
          value: {
            base: '{colors.slate.200}',
            _dark: '{colors.night.500}',
          },
        },
        // Input states
        InputBackground: {
          value: {
            base: '{colors.slate.100}',
            _dark: '{colors.blackAlpha.300}',
          },
        },
        InputBorder: {
          value: {
            base: '{colors.slate.300}',
            _dark: '{colors.whiteAlpha.200}',
          },
        },
        // Brand colors
        Brand: {
          value: {
            base: `{colors.${light.brand}}`,
            _dark: `{colors.${dark.brand}}`,
          },
        },
        CardBackground: {
          value: {
            base: `{colors.${light.cardBg}}`,
            _dark: `{colors.${dark.cardBg}}`,
          },
        },
        // Border colors
        BorderPrimary: {
          value: {
            base: '{colors.slate.200}',
            _dark: '{colors.whiteAlpha.200}',
          },
        },
        BorderSecondary: {
          value: {
            base: '{colors.slate.300}',
            _dark: '{colors.whiteAlpha.300}',
          },
        },
        // Interactive states
        HoverBackground: {
          value: {
            base: '{colors.slate.100}',
            _dark: '{colors.night.600}',
          },
        },
        ActiveBackground: {
          value: {
            base: '{colors.slate.200}',
            _dark: '{colors.night.500}',
          },
        },
        // Amina-specific semantic colors
        AminaCrimson: {
          value: {
            base: '{colors.amina.600}',
            _dark: '{colors.amina.500}',
          },
        },
        AminaGlow: {
          value: {
            base: '{colors.amina.400}',
            _dark: '{colors.amina.400}',
          },
        },
        CyberBlue: {
          value: {
            base: '{colors.cyber.500}',
            _dark: '{colors.cyber.400}',
          },
        },
        CyberGlow: {
          value: {
            base: '{colors.cyber.400}',
            _dark: '{colors.cyber.400}',
          },
        },
        ImperialGold: {
          value: {
            base: '{colors.imperial.600}',
            _dark: '{colors.imperial.500}',
          },
        },
        DiscordBlurple: {
          value: '{colors.discord.blurple}',
        },
        // Status colors
        Success: {
          value: {
            base: '{colors.green.600}',
            _dark: '{colors.discord.green}',
          },
        },
        Warning: {
          value: {
            base: '{colors.orange.500}',
            _dark: '{colors.imperial.600}',
          },
        },
        Error: {
          value: {
            base: '{colors.red.500}',
            _dark: '{colors.discord.red}',
          },
        },
      },
    },
  },
  globalCss: {
    '::-webkit-scrollbar': {
      w: '8px',
      h: '8px',
      bg: 'transparent',
    },
    '::-webkit-scrollbar-track': {
      bg: { _light: 'rgba(0, 0, 0, 0.05)', _dark: 'rgba(255, 255, 255, 0.05)' },
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      bg: { _light: 'rgba(0, 0, 0, 0.2)', _dark: 'rgba(255, 255, 255, 0.2)' },
      _hover: {
        bg: { _light: 'amina.500', _dark: 'amina.500' },
      },
    },
    '::-webkit-calendar-picker-indicator': {
      filter: { _light: 'none', _dark: 'invert(1)' },
    },
    '::selection': {
      bg: 'amina.500',
      color: 'white',
    },
    body: {
      color: 'TextPrimary',
      bg: 'MainBackground',
      fontFamily: 'body',
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: 'heading',
      fontWeight: '700',
      letterSpacing: '0.02em',
    },
    input: {
      color: { _light: 'gray.700', _dark: 'gray.100' },
    },
    '*:focus-visible': {
      outline: '2px solid',
      outlineColor: 'cyber.400',
      outlineOffset: '2px',
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);

// Export theme for backwards compatibility in some edge cases
export const theme = system;
