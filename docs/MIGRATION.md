# Amina Landing Page Migration Plan

## Overview

**Source**: Hono + Tailwind v4 + HonoX SSR  
**Target**: Next.js + Chakra UI v3 + SSG  
**Philosophy**: Globalization for reusability - centralized design tokens, shared components, and unified theming.

---

## 📁 Migration Architecture

### Directory Structure (Target)

```
src/
├── theme/
│   ├── config.tsx              # Chakra system with Amina tokens (UPDATE)
│   ├── colors.ts               # Akame ga Kill palette (REPLACE)
│   ├── fonts.ts                # Font families (NEW)
│   ├── tokens/
│   │   ├── colors.ts           # Semantic color tokens (NEW)
│   │   ├── shadows.ts          # Glow effects & shadows (NEW)
│   │   ├── animations.ts       # Keyframes & transitions (NEW)
│   │   └── index.ts            # Token exports (NEW)
│   ├── recipes/
│   │   ├── button.ts           # Primary/Secondary/Tertiary buttons (UPDATE)
│   │   ├── card.ts             # Guardian-style cards (UPDATE)
│   │   ├── badge.ts            # Rank badges (NEW)
│   │   └── index.ts            # Recipe exports (UPDATE)
│   └── components/             # Chakra component extensions
├── components/
│   ├── landing/
│   │   ├── HeroAmina.tsx       # Hero section (PORT)
│   │   ├── GuardianArsenal.tsx # Features grid (PORT)
│   │   ├── DeploymentSteps.tsx # Setup steps (PORT)
│   │   ├── RankShowcase.tsx    # Rank cards (PORT)
│   │   ├── GuardianTestimonials.tsx # Testimonials (PORT)
│   │   ├── BattleStats.tsx     # Stats section (PORT)
│   │   └── CTAGuardian.tsx     # CTA section (PORT)
│   ├── navigation/
│   │   ├── Header.tsx          # Header skeleton (PORT - SSR island ready)
│   │   └── FooterSection.tsx   # Footer (PORT)
│   ├── ui/
│   │   ├── buttons/
│   │   │   ├── PrimaryBtn.tsx  # Crimson CTA button (PORT)
│   │   │   ├── SecondaryBtn.tsx # Blue outline button (PORT)
│   │   │   └── TertiaryBtn.tsx # Ghost/text button (PORT)
│   │   ├── icons/
│   │   │   └── LucideIcon.tsx  # Icon wrapper (PORT - adapt to react-icons)
│   │   ├── StatusPill.tsx      # Status indicator (PORT)
│   │   └── BrandLogo.tsx       # Logo component (PORT)
│   └── layout/
│       ├── LandingLayout.tsx   # Landing page layout (NEW)
│       └── BaseLayout.tsx      # Shared base layout (UPDATE)
├── config/
│   ├── site.ts                 # Site config (PORT)
│   ├── permalinks.ts           # URL utilities (PORT)
│   └── landing.ts              # Landing page data (NEW)
├── lib/
│   ├── botStats.ts             # Bot stats fetching (PORT)
│   └── uptime.ts               # Uptime stats (PORT)
├── pages/
│   └── index.tsx               # Landing page (NEW - SSG)
├── styles/
│   ├── global.css              # Global styles with CSS vars (UPDATE)
│   └── animations.css          # Keyframe animations (NEW)
└── utils/
    └── cdn.ts                  # Image paths (PORT)
```

---

## 🎨 Phase 1: Theme Globalization

### 1.1 Color System Migration

**File**: `src/theme/tokens/colors.ts`

Map Hono CSS variables to Chakra semantic tokens:

```typescript
// Akame ga Kill Color Palette
export const aminaColors = {
  // Primary - Amina's Crimson
  crimson: {
    DEFAULT: '#dc143c',
    blood: '#8b0000',
    rose: '#e63946',
  },

  // Night Raid's Darkness
  night: {
    black: '#0a0a0a',
    shadow: '#1a1a1a',
    steel: '#2d2d2d',
    slate: '#3d3d3d',
  },

  // Imperial Gold
  imperial: {
    gold: '#ffd700',
    amber: '#ffa500',
    bronze: '#cd7f32',
  },

  // Digital Blue
  cyber: {
    blue: '#1e90ff',
    electric: '#00ced1',
    ice: '#87ceeb',
  },

  // Discord Integration
  discord: {
    blurple: '#5865f2',
    green: '#57f287',
    red: '#ed4245',
    gray: '#36393f',
  },

  // Guardian Ranks
  rank: {
    recruit: '#808080',
    scout: '#00ced1',
    guard: '#4169e1',
    elite: '#9370db',
    commander: '#ffd700',
    legend: '#dc143c',
  },
};
```

### 1.2 Font System

**File**: `src/theme/fonts.ts`

```typescript
export const fonts = {
  heading: '"Exo 2", ui-sans-serif, system-ui, sans-serif',
  body: '"Nunito Sans", ui-sans-serif, system-ui, sans-serif',
  dialogue: 'Comfortaa, ui-sans-serif, system-ui, sans-serif',
  mono: '"Fira Code", ui-monospace, monospace',
};
```

### 1.3 Shadow & Glow System

**File**: `src/theme/tokens/shadows.ts`

```typescript
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6)',

  // Glow Effects (Akame ga Kill aesthetic)
  glowCrimson: '0 0 20px rgba(220, 20, 60, 0.6)',
  glowBlue: '0 0 20px rgba(30, 144, 255, 0.6)',
  glowGold: '0 0 20px rgba(255, 215, 0, 0.6)',
  glowGreen: '0 0 20px rgba(87, 242, 135, 0.6)',
};
```

### 1.4 Animation System

**File**: `src/theme/tokens/animations.ts`

```typescript
export const keyframes = {
  pulseGlow: {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.6 },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  fadeInUp: {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  gradientX: {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
  glitch: {
    '0%': { transform: 'translate(0)' },
    '20%': { transform: 'translate(-2px, 2px)' },
    '40%': { transform: 'translate(-2px, -2px)' },
    '60%': { transform: 'translate(2px, 2px)' },
    '80%': { transform: 'translate(2px, -2px)' },
    '100%': { transform: 'translate(0)' },
  },
};

export const animations = {
  pulseGlow: 'pulseGlow 2s ease-in-out infinite',
  float: 'float 6s ease-in-out infinite',
  fadeInUp: 'fadeInUp 0.6s ease-out forwards',
  gradientX: 'gradientX 3s ease infinite',
  glitch: 'glitch 5s infinite steps(2)',
  spinSlow: 'spin 20s linear infinite',
  bounceSlow: 'bounce 3s ease-in-out infinite',
};
```

---

## 🧩 Phase 2: Component Recipes

### 2.1 Button Recipes

**File**: `src/theme/recipes/button.ts`

```typescript
// Extend existing buttonStyles with Amina variants
variants: {
  variant: {
    // ... existing variants

    primary: {
      bg: 'linear-gradient(to right, {colors.amina.crimson}, {colors.amina.rose})',
      color: 'white',
      fontFamily: 'heading',
      fontWeight: 'bold',
      rounded: 'xl',
      px: 8,
      py: 4,
      fontSize: 'lg',
      _hover: {
        transform: 'scale(1.05)',
        boxShadow: 'glowCrimson',
      },
    },

    secondary: {
      bg: 'transparent',
      color: 'cyber.blue',
      border: '2px solid',
      borderColor: 'cyber.blue',
      fontFamily: 'heading',
      fontWeight: 'bold',
      rounded: 'xl',
      _hover: {
        bg: 'cyber.blue/10',
        transform: 'scale(1.05)',
        boxShadow: 'glowBlue',
      },
    },

    tertiary: {
      bg: 'transparent',
      color: 'gray.300',
      fontFamily: 'heading',
      _hover: {
        color: 'amina.crimson',
      },
    },

    discord: {
      bg: 'discord.blurple',
      color: 'white',
      _hover: {
        bg: 'discord.blurple/90',
        boxShadow: '0 0 20px rgba(88, 101, 242, 0.4)',
      },
    },
  },
},
```

### 2.2 Card Recipes

**File**: `src/theme/recipes/card.ts`

```typescript
// Guardian-style cards
variants: {
  variant: {
    // ... existing variants

    guardian: {
      root: {
        bg: 'linear-gradient(to bottom right, {colors.night.steel}/50, {colors.night.shadow}/50)',
        backdropFilter: 'blur(12px)',
        border: '2px solid',
        borderColor: 'cyber.blue/20',
        rounded: '2xl',
        transition: 'all 0.5s',
        _hover: {
          borderColor: 'cyber.blue/60',
          transform: 'scale(1.05)',
          boxShadow: 'glowBlue',
        },
      },
    },

    stat: {
      root: {
        bg: 'night.steel/60',
        backdropFilter: 'blur(16px)',
        border: '1px solid',
        borderColor: 'whiteAlpha.100',
        rounded: '2xl',
        textAlign: 'center',
      },
    },

    rank: {
      root: {
        bg: 'night.steel/40',
        backdropFilter: 'blur(8px)',
        border: '2px solid',
        rounded: 'xl',
        transition: 'all 0.3s',
        _hover: {
          transform: 'translateY(-4px)',
        },
      },
    },
  },
},
```

### 2.3 Badge Recipes (New)

**File**: `src/theme/recipes/badge.ts`

```typescript
export const badgeRecipe = defineRecipe({
  className: 'badge',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    px: 4,
    py: 2,
    rounded: 'full',
    fontFamily: 'heading',
    fontWeight: 'bold',
    fontSize: 'sm',
    textTransform: 'uppercase',
    letterSpacing: 'wider',
  },
  variants: {
    variant: {
      guardian: {
        bg: 'night.steel/50',
        backdropFilter: 'blur(8px)',
        border: '1px solid',
        borderColor: 'amina.crimson/30',
        color: 'amina.crimson',
      },
      cyber: {
        bg: 'cyber.blue/10',
        border: '1px solid',
        borderColor: 'cyber.blue/20',
        color: 'cyber.blue',
      },
      gold: {
        bg: 'imperial.gold/10',
        border: '1px solid',
        borderColor: 'imperial.gold/30',
        color: 'imperial.gold',
      },
      status: {
        bg: 'discord.green/10',
        color: 'discord.green',
      },
    },
  },
  defaultVariants: {
    variant: 'guardian',
  },
});
```

---

## 📄 Phase 3: Component Porting

### 3.1 Component Mapping

| Hono Component             | Next.js/Chakra Component        | Notes                           |
| -------------------------- | ------------------------------- | ------------------------------- |
| `BaseLayout.tsx`           | `LandingLayout.tsx`             | SSG-optimized, dark mode script |
| `Header.tsx`               | `Header.tsx`                    | Skeleton for SSR island         |
| `HeroAmina.tsx`            | `HeroAmina.tsx`                 | Use Chakra Box, Text, Grid      |
| `GuardianArsenal.tsx`      | `GuardianArsenal.tsx`           | Use Card recipe                 |
| `DeploymentSteps.tsx`      | `DeploymentSteps.tsx`           | Use Card + SimpleGrid           |
| `RankShowcase.tsx`         | `RankShowcase.tsx`              | Use Badge recipe                |
| `GuardianTestimonials.tsx` | `GuardianTestimonials.tsx`      | Use Card + Avatar               |
| `BattleStats.tsx`          | `BattleStats.tsx`               | Use Stat components             |
| `CTAGuardian.tsx`          | `CTAGuardian.tsx`               | Use Image + Button              |
| `FooterSection.tsx`        | `FooterSection.tsx`             | Use SimpleGrid                  |
| `PrimaryBtn.tsx`           | Button w/ `variant="primary"`   | Use recipe                      |
| `SecondaryBtn.tsx`         | Button w/ `variant="secondary"` | Use recipe                      |
| `LucideIcon.tsx`           | `Icon` from `react-icons/lu`    | Direct import                   |
| `StatusPill.tsx`           | `StatusPill.tsx`                | Client component                |

### 3.2 SSG Strategy

**File**: `src/pages/index.tsx`

```typescript
export const getStaticProps: GetStaticProps = async () => {
  // Fetch at build time, revalidate periodically
  const botStats = await getBotStats();
  const uptimeStats = await getUptimeStats();

  return {
    props: {
      guildCount: botStats.guildCount,
      memberCount: botStats.memberCount,
      ping: botStats.ping,
      status: botStats.status,
      uptime: uptimeStats.uptime,
    },
    revalidate: 600, // ISR: Rebuild every 10 minutes
  };
};
```

### 3.3 Animation Strategy

For CSS animations that Chakra doesn't handle natively:

1. **CSS Custom Properties** - Define in `global.css`
2. **Chakra's keyframes** - Use `defineKeyframes` in theme
3. **Framer Motion** - For complex interactions (optional)
4. **CSS-in-JS** - Use Chakra's `css` prop for inline keyframes

---

## 🔧 Phase 4: Global CSS Integration

### 4.1 Update `global.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@600;700;800;900&family=Nunito+Sans:wght@400;500;600;700&family=Comfortaa:wght@400;500;600;700&family=Fira+Code:wght@400;500;600;700&display=swap');

:root {
  /* Amina Color Palette (CSS fallbacks) */
  --amina-crimson: #dc143c;
  --blood-red: #8b0000;
  --rose-red: #e63946;

  --midnight-black: #0a0a0a;
  --shadow-gray: #1a1a1a;
  --steel-gray: #2d2d2d;
  --slate-gray: #3d3d3d;

  --imperial-gold: #ffd700;
  --amber-gold: #ffa500;

  --electric-blue: #1e90ff;
  --cyber-blue: #00ced1;

  --discord-blurple: #5865f2;
  --discord-green: #57f287;

  /* Glows */
  --glow-crimson: 0 0 20px rgba(220, 20, 60, 0.6);
  --glow-blue: 0 0 20px rgba(30, 144, 255, 0.6);
  --glow-gold: 0 0 20px rgba(255, 215, 0, 0.6);
}

/* Selection styling */
::selection {
  background-color: var(--amina-crimson);
  color: white;
}
```

---

## � Phase 0: Auth Flow Refactoring

### Overview

The landing page header handles both login and logged-in states. This eliminates the need for a separate signin page.

### Files to Remove (Ghost Cleanup)

| File                              | Reason                                  |
| --------------------------------- | --------------------------------------- |
| `src/pages/auth/signin.tsx`       | Replaced by landing header login button |
| `src/components/layout/auth.tsx`  | Only used by signin.tsx                 |
| `src/config/translations/auth.ts` | Only used by signin.tsx                 |

### Files to Update

| File                      | Change                                             |
| ------------------------- | -------------------------------------------------- |
| `src/proxy.ts`            | Change `/auth/signin` → `/`                        |
| `src/utils/auth/hooks.ts` | Change logout redirect `/auth/signin` → `/`        |
| `next.config.js`          | Remove `/auth` redirect, update `/` redirect logic |

### Header Auth State

```typescript
// Landing Header behavior:
// 1. SSG renders with login button (default state)
// 2. Client-side hydration checks session via useSession()
// 3. If authenticated: swap login button with UserMenu (avatar + dropdown)
// 4. Login button links to /api/auth/login (direct Discord OAuth)

interface HeaderProps {
  // ... other props
}

// Client-side auth check (doesn't block SSG)
const LandingHeader: FC<HeaderProps> = () => {
  const session = useSession();

  return (
    <header>
      {/* ... nav links ... */}
      {session.status === 'authenticated' ? (
        <UserMenu /> // Reuse from dashboard
      ) : (
        <LoginBtn href="/api/auth/login" />
      )}
    </header>
  );
};
```

### Auth Flow Diagram

```
Landing Page (SSG)
    │
    ├─► [Not Logged In] ──► Click "Log in" ──► /api/auth/login
    │                                              │
    │                                              ▼
    │                                    Discord OAuth Flow
    │                                              │
    │                                              ▼
    │                                    /api/auth/callback
    │                                              │
    │                                              ▼
    │                                    Redirect to /dash
    │
    └─► [Logged In] ──► Header shows UserMenu (avatar)
                              │
                              ├─► Click avatar ──► Dropdown menu
                              │       ├─► Profile (/dash/profile)
                              │       └─► Logout ──► /api/auth/signout ──► Redirect to /
                              │
                              └─► Click "Dashboard" ──► /dash
```

---

## 📋 Implementation Checklist

### Phase 0: Auth Cleanup

- [ ] Delete `src/pages/auth/signin.tsx`
- [ ] Delete `src/components/layout/auth.tsx`
- [ ] Delete `src/config/translations/auth.ts`
- [ ] Update `src/proxy.ts` - change redirect to `/`
- [ ] Update `src/utils/auth/hooks.ts` - change logout redirect to `/`
- [ ] Update `next.config.js` - remove `/auth` redirect, update `/` logic

### Phase 1: Theme Foundation

- [ ] Create `src/theme/tokens/colors.ts` with Amina palette
- [ ] Create `src/theme/fonts.ts` with font families
- [ ] Create `src/theme/tokens/shadows.ts` with glows
- [ ] Create `src/theme/tokens/animations.ts` with keyframes
- [ ] Update `src/theme/config.tsx` to include new tokens
- [ ] Update `src/styles/global.css` with CSS variables & fonts

### Phase 2: Component Recipes

- [ ] Update `src/theme/recipes/button.ts` with primary/secondary variants
- [ ] Update `src/theme/recipes/card.ts` with guardian variant
- [ ] Create `src/theme/recipes/badge.ts`
- [ ] Export all recipes in `src/theme/recipes/index.ts`

### Phase 3: Component Porting

- [ ] Port `BrandLogo.tsx`
- [ ] Port `LucideIcon.tsx` (adapt to react-icons)
- [ ] Port `StatusPill.tsx`
- [ ] Port `PrimaryBtn.tsx` / `SecondaryBtn.tsx` (or use recipes)
- [ ] Port `Header.tsx` (with auth state - login button / UserMenu)
- [ ] Port `FooterSection.tsx`
- [ ] Port `HeroAmina.tsx`
- [ ] Port `GuardianArsenal.tsx`
- [ ] Port `DeploymentSteps.tsx`
- [ ] Port `RankShowcase.tsx`
- [ ] Port `GuardianTestimonials.tsx`
- [ ] Port `BattleStats.tsx`
- [ ] Port `CTAGuardian.tsx`

### Phase 4: Page & Layout

- [ ] Create `src/components/layout/LandingLayout.tsx`
- [ ] Create `src/pages/index.tsx` with SSG
- [ ] Port `src/config/site.ts`
- [ ] Port `src/config/permalinks.ts`
- [ ] Port `src/lib/botStats.ts`
- [ ] Port `src/lib/uptime.ts`
- [ ] Port `src/utils/cdn.ts`

### Phase 5: Polish

- [ ] Test all animations
- [ ] Verify responsive design
- [ ] Check dark mode compatibility
- [ ] Validate SEO metadata
- [ ] Performance audit (Core Web Vitals)
- [ ] Run `bun check` - must pass
- [ ] Run `bun run build` - must pass

---

## 🔗 File Dependencies (Complete Daisy Chain)

### Source → Target Translation Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DEPENDENCY LAYERS                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAYER 0: Config & Utils (Must port FIRST - no dependencies)               │
│  ─────────────────────────────────────────────────────────────              │
│  hono/utils/cdn.ts          → src/utils/cdn.ts                              │
│    • CDN_BASE_URL, getCDNUrl(), ImagePaths                                  │
│    • Exports: portraits, achievements, badges, hero, logo                   │
│                                                                             │
│  hono/config/site.ts        → src/config/site.ts                            │
│    • SITE (name, base, trailingSlash)                                       │
│    • URLS (base, CLIENT_ID, SUPPORT_SERVER)                                 │
│    • SEO (title, description, canonical)                                    │
│    • OG (image, type, locale)                                               │
│                                                                             │
│  hono/config/permalinks.ts  → src/config/permalinks.ts                      │
│    • Depends on: site.ts (URLS.CLIENT_ID, URLS.BASE)                        │
│    • Exports: getCanonical, getInviteUrl, getSupportUrl, getDocsUrl         │
│                                                                             │
│  hono/utils/navigation.ts   → src/config/navigation.ts                      │
│    • navBarLinks, footerLinks, socialLinks arrays                           │
│    • Depends on: permalinks.ts (getDocsUrl, getSupportUrl)                  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAYER 1: Lib Files (Data fetching - depend on Layer 0)                    │
│  ─────────────────────────────────────────────────────────────              │
│  hono/lib/botStats.ts       → src/lib/botStats.ts                           │
│    • MongoDB connection to dev-configs collection                           │
│    • Returns: { guilds, members, uptime, ping, status, presence }           │
│    • Uses: 10min cache, MONGODB_URI env var                                 │
│                                                                             │
│  hono/lib/uptime.ts         → src/lib/uptime.ts                             │
│    • Instatus API integration (INSTATUS_PAGE_ID, INSTATUS_API_KEY)          │
│    • Returns: { uptime, totalMonitors, downMonitors }                       │
│    • Uses: 10min cache                                                      │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAYER 2: API Routes (Server-side - depend on Layer 1)                     │
│  ─────────────────────────────────────────────────────────────              │
│  hono/routes/api/status     → src/pages/api/status.ts                       │
│    • Depends on: uptime.ts                                                  │
│    • Returns: { uptime, totalMonitors, downMonitors }                       │
│                                                                             │
│  hono/routes/api/metrics    → src/pages/api/metrics.ts                      │
│    • Depends on: botStats.ts, uptime.ts                                     │
│    • Returns: { guilds, members, uptime, ping, status, presence }           │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAYER 3: UI Components (Atomic - depend on Layer 0)                       │
│  ─────────────────────────────────────────────────────────────              │
│  hono/components/icons/LucideIcon.tsx                                       │
│    → SKIP: Use react-icons/lu directly (LuShield, LuSwords, etc.)           │
│    • Translation: <LucideIcon name="shield" /> → <LuShield />               │
│                                                                             │
│  hono/components/BrandLogo.tsx    → src/components/ui/BrandLogo.tsx         │
│    • Depends on: cdn.ts (ImagePaths.logo.headshotEmoji)                     │
│    • Next.js Image component                                                │
│                                                                             │
│  hono/components/ThemeIcon.tsx                                              │
│    → SKIP: Reuse src/components/ThemeSwitch.tsx (already exists)            │
│                                                                             │
│  hono/components/StatusPill.tsx   → src/components/ui/StatusPill.tsx        │
│    • Client-side component, fetches /api/status                             │
│    • Uses: colors.ts (semantic status colors)                               │
│                                                                             │
│  hono/components/buttons/PrimaryBtn.tsx                                     │
│    → SKIP: Use Button with variant="amina-primary" (recipe exists)          │
│                                                                             │
│  hono/components/buttons/SecondaryBtn.tsx                                   │
│    → SKIP: Use Button with variant="amina-secondary" (recipe exists)        │
│                                                                             │
│  hono/components/buttons/TertiaryBtn.tsx                                    │
│    → SKIP: Use Button with variant="amina-ghost" (recipe exists)            │
│                                                                             │
│  hono/components/buttons/LoginBtn.tsx                                       │
│    → SKIP: Use Button with variant="discord" (recipe exists)                │
│                                                                             │
│  hono/components/links/FooterSocialLink.tsx                                 │
│    → src/components/ui/FooterSocialLink.tsx                                 │
│    • Simple icon link with hover effects                                    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAYER 4: Composite Components (depend on Layer 3)                         │
│  ─────────────────────────────────────────────────────────────              │
│  hono/components/character/AminaStatusCard.tsx                              │
│    → src/components/landing/AminaStatusCard.tsx                             │
│    • Depends on: cdn.ts (ImagePaths), /api/metrics                          │
│    • Client-side, fetches bot status                                        │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAYER 5: Navigation Components (depend on Layers 3-4)                     │
│  ─────────────────────────────────────────────────────────────              │
│  hono/components/Header.tsx       → src/components/landing/Header.tsx       │
│    • Depends on: BrandLogo, ThemeSwitch, navigation.ts                      │
│    • "Island" pattern: SSG shell + client-side useSession()                 │
│    • Shows: LoginBtn (unauth) OR UserMenu (auth)                            │
│    • REUSE: UserMenu from src/components/menu/UserMenu.tsx                  │
│                                                                             │
│  hono/components/FooterSection.tsx                                          │
│    → src/components/landing/FooterSection.tsx                               │
│    • Depends on: BrandLogo, FooterSocialLink, AminaStatusCard               │
│    • Depends on: navigation.ts (footerLinks, socialLinks)                   │
│    • Depends on: site.ts (SITE.name)                                        │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAYER 6: Section Components (depend on Layers 0-4)                        │
│  ─────────────────────────────────────────────────────────────              │
│  hono/components/sections/HeroAmina.tsx                                     │
│    → src/components/landing/sections/HeroAmina.tsx                          │
│    • Depends on: cdn.ts (ImagePaths.hero)                                   │
│    • Depends on: permalinks.ts (getInviteUrl)                               │
│    • Uses: Button variants (amina-primary, amina-secondary)                 │
│    • Uses: react-icons (LuShield, LuUsers)                                  │
│                                                                             │
│  hono/components/sections/GuardianArsenal.tsx                               │
│    → src/components/landing/sections/GuardianArsenal.tsx                    │
│    • Uses: react-icons (LuShield, LuSwords, etc.)                           │
│    • Feature cards with glow effects                                        │
│                                                                             │
│  hono/components/sections/DeploymentSteps.tsx                               │
│    → src/components/landing/sections/DeploymentSteps.tsx                    │
│    • Depends on: permalinks.ts (getInviteUrl)                               │
│    • Uses: Button variants (amina-primary, amina-ghost)                     │
│    • Step cards with numbered indicators                                    │
│                                                                             │
│  hono/components/sections/RankShowcase.tsx                                  │
│    → src/components/landing/sections/RankShowcase.tsx                       │
│    • Depends on: cdn.ts (ImagePaths.badges)                                 │
│    • Uses: Badge recipe (rank variants)                                     │
│    • Uses: react-icons (LuTrophy, LuStar, etc.)                             │
│                                                                             │
│  hono/components/sections/GuardianTestimonials.tsx                          │
│    → src/components/landing/sections/GuardianTestimonials.tsx               │
│    • Depends on: cdn.ts (ImagePaths.badges)                                 │
│    • Testimonial cards with avatars                                         │
│                                                                             │
│  hono/components/sections/BattleStats.tsx                                   │
│    → src/components/landing/sections/BattleStats.tsx                        │
│    • Props: { guilds, members, uptime } from getStaticProps                 │
│    • Animated counters                                                      │
│    • Uses: react-icons (LuServer, LuUsers, etc.)                            │
│                                                                             │
│  hono/components/sections/CTAGuardian.tsx                                   │
│    → src/components/landing/sections/CTAGuardian.tsx                        │
│    • Depends on: cdn.ts (ImagePaths.hero)                                   │
│    • Depends on: permalinks.ts (getInviteUrl)                               │
│    • Final CTA with character portrait                                      │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAYER 7: Layout Components (depend on Layers 5-6)                         │
│  ─────────────────────────────────────────────────────────────              │
│  hono/components/BaseLayout.tsx                                             │
│    → src/components/layout/LandingLayout.tsx                                │
│    • Depends on: Header, FooterSection                                      │
│    • Depends on: StatusPill                                                 │
│    • Depends on: site.ts (Meta component)                                   │
│    • Next.js Head for metadata                                              │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAYER 8: Page (Final assembly - SSG with ISR)                             │
│  ─────────────────────────────────────────────────────────────              │
│  hono/routes/index.tsx            → src/pages/index.tsx                     │
│    • Depends on: LandingLayout                                              │
│    • Depends on: All section components                                     │
│    • getStaticProps: fetches botStats, uptimeStats                          │
│    • ISR: revalidate every 10 minutes                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Translation Dictionary

| Hono Source              | Next.js/Chakra Target              | Action                           |
| ------------------------ | ---------------------------------- | -------------------------------- |
| `LucideIcon` wrapper     | `react-icons/lu` direct imports    | SKIP wrapper, use icons directly |
| `PrimaryBtn` component   | `Button variant="amina-primary"`   | SKIP, use recipe                 |
| `SecondaryBtn` component | `Button variant="amina-secondary"` | SKIP, use recipe                 |
| `TertiaryBtn` component  | `Button variant="amina-ghost"`     | SKIP, use recipe                 |
| `LoginBtn` component     | `Button variant="discord"`         | SKIP, use recipe                 |
| `ThemeIcon` component    | `ThemeSwitch` (existing)           | REUSE existing                   |
| `UserAvatarDropdown`     | `UserMenu` (existing)              | REUSE existing                   |
| `class=`                 | `className=`                       | JSX syntax                       |
| Tailwind classes         | Chakra props / `css={}`            | Manual conversion                |
| `createRoute()`          | `getStaticProps()`                 | SSG pattern                      |
| `c.html()` response      | Next.js page component             | React pattern                    |
| `hono/client` fetching   | `@tanstack/react-query`            | Use existing hooks               |

### Icon Mapping (LucideIcon → react-icons/lu)

```typescript
// Instead of: <LucideIcon name="shield" size={24} />
// Use: <LuShield size={24} />

// Common icons used in landing page:
import {
  LuShield, // Protection/Security
  LuSwords, // Combat/Moderation
  LuUsers, // Members/Community
  LuServer, // Servers/Infrastructure
  LuCrown, // Premium/Ranks
  LuTrophy, // Achievements
  LuStar, // Featured/Special
  LuSettings, // Configuration
  LuMessageSquare, // Chat/Messages
  LuBell, // Notifications
  LuZap, // Performance/Speed
  LuGlobe, // Global/Network
  LuGithub, // GitHub link
  LuTwitter, // Twitter link (use LuX for X.com)
  LuDiscord, // Discord - NOT IN react-icons, use custom or FaDiscord
} from 'react-icons/lu';

// For Discord icon, use:
import { FaDiscord } from 'react-icons/fa';
```

### Existing Components to REUSE (No Porting Needed)

| Component      | Path                                  | Usage                  |
| -------------- | ------------------------------------- | ---------------------- |
| `ThemeSwitch`  | `src/components/ThemeSwitch.tsx`      | Header theme toggle    |
| `UserMenu`     | `src/components/menu/UserMenu.tsx`    | Auth'd user dropdown   |
| `useSession`   | `src/utils/auth/hooks.ts`             | Client-side auth check |
| `useUserQuery` | `src/api/hooks.ts`                    | Fetch user data        |
| `QueryPanel`   | `src/components/panel/QueryPanel.tsx` | Loading/error states   |

---

## 🎯 Success Criteria

1. **Visual Parity** - Landing page looks identical to Hono version
2. **Performance** - Lighthouse score ≥ 90 for all metrics
3. **SSG** - Page generates at build time with ISR
4. **Responsive** - Works on mobile, tablet, desktop
5. **Theme Consistency** - All Amina colors/fonts/glows work
6. **Reusability** - Components usable throughout dashboard

---

## 📚 Reference Files

- **Hono Source**: `/workspaces/mina-web/hono/`
- **Design System**: `/workspaces/mina-web/docs/DESIGN.md`
- **Character Story**: `/workspaces/mina-web/docs/STORY.md`
- **Current Theme**: `/workspaces/mina-web/src/theme/`
