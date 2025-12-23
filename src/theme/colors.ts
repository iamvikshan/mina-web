// ==================== AMINA COLOR PALETTE ====================
// Based on Akame ga Kill themes + modern dashboard aesthetics

export const colors = {
  // === AMINA'S CRIMSON (Primary - Night Raid) ===
  amina: {
    50: { value: '#ffeef1' },
    100: { value: '#ffd5dc' },
    200: { value: '#ffaab9' },
    300: { value: '#ff7f96' },
    400: { value: '#f04d6a' },
    500: { value: '#dc143c' }, // Main crimson
    600: { value: '#b81033' },
    700: { value: '#8b0000' }, // Blood red
    800: { value: '#6b0020' },
    900: { value: '#4a0016' },
  },

  // === NIGHT RAID'S DARKNESS ===
  night: {
    50: { value: '#e8e8e8' },
    100: { value: '#d1d1d1' },
    200: { value: '#a3a3a3' },
    300: { value: '#757575' },
    400: { value: '#3d3d3d' }, // Slate
    500: { value: '#2d2d2d' }, // Steel
    600: { value: '#1a1a1a' }, // Shadow
    700: { value: '#121212' },
    800: { value: '#0a0a0a' }, // Midnight black
    900: { value: '#050505' },
  },

  // === IMPERIAL GOLD (Accents) ===
  imperial: {
    50: { value: '#fffef0' },
    100: { value: '#fff9c4' },
    200: { value: '#fff176' },
    300: { value: '#ffee58' },
    400: { value: '#ffe135' },
    500: { value: '#ffd700' }, // Imperial gold
    600: { value: '#ffa500' }, // Amber
    700: { value: '#cd7f32' }, // Bronze
    800: { value: '#a66000' },
    900: { value: '#7a4500' },
  },

  // === CYBER BLUE (Digital/Tech) ===
  cyber: {
    50: { value: '#e6f7ff' },
    100: { value: '#b3e5fc' },
    200: { value: '#87ceeb' }, // Ice blue
    300: { value: '#4fc3f7' },
    400: { value: '#00ced1' }, // Electric cyan
    500: { value: '#1e90ff' }, // Dodger blue
    600: { value: '#1976d2' },
    700: { value: '#1565c0' },
    800: { value: '#0d47a1' },
    900: { value: '#0a2463' },
  },

  // === DISCORD INTEGRATION ===
  discord: {
    blurple: { value: '#5865f2' },
    green: { value: '#57f287' },
    red: { value: '#ed4245' },
    yellow: { value: '#fee75c' },
    gray: { value: '#36393f' },
    dark: { value: '#2c2f33' },
  },

  // === GUARDIAN RANK COLORS ===
  rank: {
    recruit: { value: '#808080' },
    scout: { value: '#00ced1' },
    guard: { value: '#4169e1' },
    elite: { value: '#9370db' },
    commander: { value: '#ffd700' },
    legend: { value: '#dc143c' },
  },

  // === EXISTING BRAND (kept for compatibility) ===
  brand: {
    100: { value: '#ffd5dc' },
    200: { value: '#ff7f96' },
    300: { value: '#f04d6a' },
    400: { value: '#e63946' }, // Rose red
    500: { value: '#dc143c' }, // Crimson (now matches amina.500)
    600: { value: '#b81033' },
    700: { value: '#8b0000' },
    800: { value: '#6b0020' },
    900: { value: '#4a0016' },
  },
  brandAlpha: {
    500: { value: 'rgba(220, 20, 60, 0.6)' },
    100: { value: 'rgba(220, 20, 60, 0.18)' },
  },

  // === SECONDARY GRAYS (Dashboard UI) ===
  secondaryGray: {
    100: { value: '#E0E5F2' },
    200: { value: '#E1E9F8' },
    300: { value: '#F4F7FE' },
    400: { value: '#E9EDF7' },
    500: { value: '#8F9BBA' },
    600: { value: '#A3AED0' },
    700: { value: '#707EAE' },
    800: { value: '#707EAE' },
    900: { value: '#1B2559' },
  },

  // === STATUS COLORS ===
  red: {
    500: { value: '#ed4245' },
    600: { value: '#dc143c' },
  },
  blue: {
    50: { value: '#e6f7ff' },
    500: { value: '#1e90ff' },
  },
  orange: {
    100: { value: '#FFF6DA' },
    500: { value: '#ffa500' },
  },
  green: {
    100: { value: '#E6FAF5' },
    500: { value: '#57f287' },
  },

  // === NAVY (Dashboard backgrounds - kept for compatibility) ===
  navy: {
    50: { value: '#d0dcfb' },
    100: { value: '#aac0fe' },
    200: { value: '#a3b9f8' },
    300: { value: '#728fea' },
    400: { value: '#3652ba' },
    500: { value: '#2f4bba' },
    600: { value: '#1a1a1a' }, // Now maps to night.600
    700: { value: '#121212' }, // Now maps to night.700
    800: { value: '#0a0a0a' }, // Now maps to night.800
    900: { value: '#050505' }, // Now maps to night.900
  },
  gray: {
    100: { value: '#FAFCFE' },
  },
};

// === LIGHT THEME MAPPING ===
export const light = {
  globalBg: 'secondaryGray.300',
  brand: 'amina.500',
  textColorPrimary: 'secondaryGray.900',
  textColorSecondary: 'gray.500',
  cardBg: 'white',
  shadow: '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
};

// === DARK THEME MAPPING (Amina's true form) ===
export const dark = {
  globalBg: 'night.800',
  brand: 'amina.400',
  textColorPrimary: 'white',
  textColorSecondary: 'gray.400',
  cardBg: 'night.700',
  shadow: '14px 17px 40px 4px rgba(2, 4, 6, 0.06)',
};
