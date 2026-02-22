/**
 * Guardian Rank System Utility
 * ============================
 * Calculates user rank based on server count.
 * Ported from Hono source with Amina color tokens.
 */

// ============================================================================
// Types
// ============================================================================

export interface GuardianRank {
  name: string;
  level: number;
  minServers: number;
  maxServers: number;
  message: string;
  /** Chakra UI color token string (e.g. 'cyber.400') */
  color: string;
  badgeSymbol: string;
}

// ============================================================================
// Rank Definitions
// ============================================================================

export const GUARDIAN_RANKS: GuardianRank[] = [
  {
    name: 'Recruit',
    level: 1,
    minServers: 0,
    maxServers: 1,
    message: "You've just joined the Night Guard. Let's train together!",
    color: 'slate.400',
    badgeSymbol: '[>]',
  },
  {
    name: 'Scout',
    level: 2,
    minServers: 2,
    maxServers: 4,
    message: 'Your skills are developing. I can see your potential.',
    color: 'cyber.400',
    badgeSymbol: '[>>]',
  },
  {
    name: 'Guard',
    level: 3,
    minServers: 5,
    maxServers: 8,
    message: "You've proven yourself in battle. Well done.",
    color: 'discord.green',
    badgeSymbol: '[*]',
  },
  {
    name: 'Elite',
    level: 4,
    minServers: 9,
    maxServers: 13,
    message: "Few reach this level. You're one of the best.",
    color: 'imperial.500',
    badgeSymbol: '[**]',
  },
  {
    name: 'Commander',
    level: 5,
    minServers: 14,
    maxServers: 19,
    message: 'Leading multiple fronts with mastery. Impressive.',
    color: 'rose.500',
    badgeSymbol: '[***]',
  },
  {
    name: 'Legend',
    level: 6,
    minServers: 20,
    maxServers: Infinity,
    message: "You've transcended the ranks. A true guardian.",
    color: 'amina.500',
    badgeSymbol: '[****]',
  },
];

// ============================================================================
// Functions
// ============================================================================

/**
 * Get the guardian rank for a given server count.
 */
export function getGuardianRank(serverCount: number): GuardianRank {
  const rank = GUARDIAN_RANKS.find(
    (r) => serverCount >= r.minServers && serverCount <= r.maxServers
  );
  return rank ?? GUARDIAN_RANKS[0];
}

/**
 * Get rank progress as a percentage (0–100) within the current rank tier.
 */
export function getRankProgress(serverCount: number): number {
  const rank = getGuardianRank(serverCount);

  if (rank.maxServers === Infinity) {
    return 100;
  }

  const range = rank.maxServers - rank.minServers;

  // Single-server tier (e.g. Recruit 0-0): either 0% or 100%
  if (range === 0) {
    return serverCount >= rank.minServers ? 100 : 0;
  }

  const progress = serverCount - rank.minServers;
  return Math.min(100, Math.round((progress / range) * 100));
}

/**
 * Get the next rank after the current one, or null if at max rank.
 */
export function getNextRank(serverCount: number): GuardianRank | null {
  const currentRank = getGuardianRank(serverCount);
  const nextIndex = GUARDIAN_RANKS.findIndex(
    (r) => r.level === currentRank.level
  );

  if (nextIndex === -1 || nextIndex >= GUARDIAN_RANKS.length - 1) {
    return null;
  }

  return GUARDIAN_RANKS[nextIndex + 1];
}

/**
 * Get the number of servers needed to reach the next rank.
 */
export function getServersUntilNextRank(serverCount: number): number {
  const nextRank = getNextRank(serverCount);

  if (!nextRank) {
    return 0;
  }

  return Math.max(0, nextRank.minServers - serverCount);
}

/**
 * Get Amina's dialogue based on the user's server count.
 */
export function getAminaDialogue(serverCount: number): string {
  const rank = getGuardianRank(serverCount);
  return rank.message;
}

/**
 * Get a time-based greeting from Amina.
 */
export function getTimeBasedGreeting(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning, Guardian. Ready for today's missions?";
  } else if (hour >= 12 && hour < 17) {
    return 'Good afternoon. The watch continues.';
  } else if (hour >= 17 && hour < 21) {
    return 'Good evening. Night operations are about to begin.';
  } else {
    return 'The night is ours. Stay vigilant, Guardian.';
  }
}
