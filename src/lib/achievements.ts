/**
 * Achievement System Utility
 * ===========================
 * Checks and manages user achievements.
 * Ported from Hono source with Amina color tokens.
 */

// ============================================================================
// Types
// ============================================================================

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
}

export interface RarityColors {
  bg: string;
  border: string;
  text: string;
}

export interface AchievementProgress {
  percentage: number;
  message: string;
}

export interface UserData {
  serversConfigured?: number;
  commandsUsed?: number;
  daysActive?: number;
  customized?: boolean;
}

// ============================================================================
// Achievement Definitions
// ============================================================================

const ACHIEVEMENTS: Omit<Achievement, 'unlocked'>[] = [
  {
    id: 'first_server',
    name: 'First Watch',
    description: 'Add Amina to your first server',
    icon: '🛡️',
    rarity: 'common',
  },
  {
    id: 'five_servers',
    name: 'Growing Force',
    description: 'Protect 5 servers with Amina',
    icon: '⚔️',
    rarity: 'rare',
  },
  {
    id: 'ten_servers',
    name: 'Night Raid Captain',
    description: 'Command Amina across 10 servers',
    icon: '🌙',
    rarity: 'epic',
  },
  {
    id: 'twenty_servers',
    name: 'Legendary Guardian',
    description: 'Achieve legend status with 20+ servers',
    icon: '👑',
    rarity: 'legendary',
  },
  {
    id: 'first_config',
    name: 'Tactician',
    description: 'Configure your first server feature',
    icon: '⚙️',
    rarity: 'common',
  },
  {
    id: 'five_configs',
    name: 'Strategist',
    description: 'Configure features on 5 servers',
    icon: '📋',
    rarity: 'rare',
  },
  {
    id: 'customizer',
    name: 'Personal Touch',
    description: "Customize Amina's appearance or settings",
    icon: '🎨',
    rarity: 'common',
  },
  {
    id: 'veteran',
    name: 'Veteran Guardian',
    description: 'Active for 30+ days',
    icon: '🏅',
    rarity: 'epic',
  },
];

// ============================================================================
// Functions
// ============================================================================

/**
 * Check which achievements are unlocked based on user data.
 */
export function checkAchievements(
  serverCount: number,
  configuredCount: number,
  userData?: UserData
): Achievement[] {
  return ACHIEVEMENTS.map((achievement) => {
    let unlocked = false;

    switch (achievement.id) {
      case 'first_server':
        unlocked = serverCount >= 1;
        break;
      case 'five_servers':
        unlocked = serverCount >= 5;
        break;
      case 'ten_servers':
        unlocked = serverCount >= 10;
        break;
      case 'twenty_servers':
        unlocked = serverCount >= 20;
        break;
      case 'first_config':
        unlocked = configuredCount >= 1;
        break;
      case 'five_configs':
        unlocked = configuredCount >= 5;
        break;
      case 'customizer':
        unlocked = userData?.customized ?? false;
        break;
      case 'veteran':
        unlocked = (userData?.daysActive ?? 0) >= 30;
        break;
    }

    return { ...achievement, unlocked };
  });
}

/**
 * Get Chakra color tokens for a rarity level.
 */
export function getRarityColor(rarity: Achievement['rarity']): RarityColors {
  switch (rarity) {
    case 'common':
      return { bg: 'slate.700', border: 'slate.500', text: 'slate.300' };
    case 'rare':
      return { bg: 'cyber.400/20', border: 'cyber.400', text: 'cyber.400' };
    case 'epic':
      return {
        bg: 'imperial.600/20',
        border: 'imperial.600',
        text: 'imperial.500',
      };
    case 'legendary':
      return {
        bg: 'amina.500/20',
        border: 'amina.500',
        text: 'amina.500',
      };
    default:
      return { bg: 'slate.700', border: 'slate.500', text: 'slate.300' };
  }
}

/**
 * Get Amina's dialogue for a specific achievement.
 */
export function getAchievementMessage(achievementId: string): string {
  const messages: Record<string, string> = {
    first_server:
      'Welcome to the Night Guard! Your first deployment is complete.',
    five_servers:
      'Five servers under your watch. Your reputation precedes you.',
    ten_servers: 'A captain of the Night Raid. Your forces are formidable.',
    twenty_servers:
      "You've achieved what few dare to dream. A true legend among guardians.",
    first_config:
      'A good tactician always prepares the battlefield. Well done.',
    five_configs:
      'Your strategic mind impresses me. Every server tailored to perfection.',
    customizer: 'Making me your own? I appreciate the personal touch.',
    veteran: 'Thirty days of service. Your dedication is unwavering, Guardian.',
  };

  return messages[achievementId] ?? 'An achievement worthy of recognition.';
}

/**
 * Get overall achievement progress.
 */
export function getAchievementProgress(
  unlockedCount: number
): AchievementProgress {
  const total = ACHIEVEMENTS.length;
  const percentage = Math.min(100, Math.round((unlockedCount / total) * 100));

  let message: string;

  if (percentage === 0) {
    message = 'Your journey begins now. Every guardian starts somewhere.';
  } else if (percentage < 25) {
    message = 'A promising start. Keep pushing forward.';
  } else if (percentage < 50) {
    message = "You're making excellent progress, Guardian.";
  } else if (percentage < 75) {
    message = 'More than halfway there. Impressive dedication.';
  } else if (percentage < 100) {
    message = 'Almost complete. The final achievements await.';
  } else {
    message = 'All achievements unlocked. You are a true master guardian.';
  }

  return { percentage, message };
}
