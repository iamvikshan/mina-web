// ==================== AMINA COLOR PALETTE ====================
// Based on Akame ga Kill themes + modern dashboard aesthetics
// Unified palette - no duplicates, all references use Amina namespace

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
    // Aliases for Hono compatibility
    crimson: { value: '#dc143c' },
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
    // Aliases for Hono compatibility
    black: { value: '#0a0a0a' },
    shadow: { value: '#1a1a1a' },
    steel: { value: '#2d2d2d' },
    slate: { value: '#3d3d3d' },
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
    // Aliases for Hono compatibility
    gold: { value: '#ffd700' },
    amber: { value: '#ffa500' },
    bronze: { value: '#cd7f32' },
  },

  // === CYBER BLUE (Digital/Tech) ===
  cyber: {
    50: { value: '#e6f7ff' },
    100: { value: '#b3e5fc' },
    200: { value: '#87ceeb' }, // Ice blue
    300: { value: '#4fc3f7' },
    400: { value: '#00ced1' }, // Electric cyan - primary cyber color
    500: { value: '#1e90ff' }, // Dodger blue
    600: { value: '#1976d2' },
    700: { value: '#1565c0' },
    800: { value: '#0d47a1' },
    900: { value: '#0a2463' },
    // Aliases for Hono compatibility
    blue: { value: '#00ced1' },
    electric: { value: '#00ced1' },
    ice: { value: '#87ceeb' },
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

  // === ROSE RED (Gradient accents) ===
  rose: {
    50: { value: '#fff1f2' },
    100: { value: '#ffe4e6' },
    200: { value: '#fecdd3' },
    300: { value: '#fda4af' },
    400: { value: '#fb7185' },
    500: { value: '#e63946' }, // Rose red - main
    600: { value: '#e11d48' },
    700: { value: '#be123c' },
    800: { value: '#9f1239' },
    900: { value: '#881337' },
    // Alias for Hono compatibility
    red: { value: '#e63946' },
  },

  // === NEUTRAL GRAYS (Light mode surfaces) ===
  neutral: {
    50: { value: '#fafafa' },
    100: { value: '#f5f5f5' },
    200: { value: '#e5e5e5' },
    300: { value: '#d4d4d4' },
    400: { value: '#a3a3a3' },
    500: { value: '#737373' },
    600: { value: '#525252' },
    700: { value: '#404040' },
    800: { value: '#262626' },
    900: { value: '#171717' },
  },

  // === SLATE GRAYS (Muted UI elements) ===
  slate: {
    50: { value: '#f8fafc' },
    100: { value: '#f1f5f9' },
    200: { value: '#e2e8f0' },
    300: { value: '#cbd5e1' },
    400: { value: '#94a3b8' },
    500: { value: '#64748b' },
    600: { value: '#475569' },
    700: { value: '#334155' },
    800: { value: '#1e293b' },
    900: { value: '#0f172a' },
  },

  // === STATUS COLORS ===
  red: {
    100: { value: '#fee2e2' },
    200: { value: '#fecaca' },
    300: { value: '#fca5a5' },
    400: { value: '#f87171' },
    500: { value: '#ed4245' },
    600: { value: '#dc143c' },
    700: { value: '#b91c1c' },
    800: { value: '#991b1b' },
    900: { value: '#7f1d1d' },
  },
  blue: {
    50: { value: '#e6f7ff' },
    100: { value: '#dbeafe' },
    200: { value: '#bfdbfe' },
    300: { value: '#93c5fd' },
    400: { value: '#60a5fa' },
    500: { value: '#1e90ff' },
    600: { value: '#2563eb' },
    700: { value: '#1d4ed8' },
    800: { value: '#1e40af' },
    900: { value: '#1e3a8a' },
  },
  orange: {
    100: { value: '#FFF6DA' },
    200: { value: '#fef3c7' },
    300: { value: '#fde68a' },
    400: { value: '#fbbf24' },
    500: { value: '#ffa500' },
    600: { value: '#d97706' },
    700: { value: '#b45309' },
    800: { value: '#92400e' },
    900: { value: '#78350f' },
  },
  green: {
    100: { value: '#E6FAF5' },
    200: { value: '#bbf7d0' },
    300: { value: '#86efac' },
    400: { value: '#4ade80' },
    500: { value: '#57f287' },
    600: { value: '#16a34a' },
    700: { value: '#15803d' },
    800: { value: '#166534' },
    900: { value: '#14532d' },
  },
  gray: {
    50: { value: '#f9fafb' },
    100: { value: '#f3f4f6' },
    200: { value: '#e5e7eb' },
    300: { value: '#d1d5db' },
    400: { value: '#9ca3af' },
    500: { value: '#6b7280' },
    600: { value: '#4b5563' },
    700: { value: '#374151' },
    800: { value: '#1f2937' },
    900: { value: '#111827' },
  },
};

// === LIGHT THEME MAPPING (Day mode - Guardian's watch) ===
export const light = {
  globalBg: 'slate.50',
  brand: 'amina.500',
  textColorPrimary: 'slate.900',
  textColorSecondary: 'slate.500',
  cardBg: 'white',
  shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  // Surface colors for light mode
  surfacePrimary: 'white',
  surfaceSecondary: 'slate.100',
  surfaceMuted: 'slate.200',
  // Border colors
  borderPrimary: 'slate.200',
  borderSecondary: 'slate.300',
  // Interactive states
  hoverBg: 'slate.100',
  activeBg: 'slate.200',
};

// === DARK THEME MAPPING (Amina's true form - Night Raid) ===
export const dark = {
  globalBg: 'night.800',
  brand: 'amina.400',
  textColorPrimary: 'white',
  textColorSecondary: 'gray.400',
  cardBg: 'night.700',
  shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
  // Surface colors for dark mode
  surfacePrimary: 'night.700',
  surfaceSecondary: 'night.600',
  surfaceMuted: 'night.500',
  // Border colors
  borderPrimary: 'whiteAlpha.200',
  borderSecondary: 'whiteAlpha.300',
  // Interactive states
  hoverBg: 'night.600',
  activeBg: 'night.500',
};
