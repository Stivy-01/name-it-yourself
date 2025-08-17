import { Achievement } from '@/types/app';

export class XPSystem {
  static calculateLevel(xp: number): number {
    return Math.floor(xp / 1000) + 1;
  }

  static getXPForNextLevel(level: number): number {
    return level * 1000;
  }

  static awardXP(currentXP: number, amount: number, reason: string): {
    newXP: number;
    levelUp: boolean;
    newLevel: number;
  } {
    const newXP = currentXP + amount;
    const oldLevel = this.calculateLevel(currentXP);
    const newLevel = this.calculateLevel(newXP);
    
    console.log(`+${amount} XP: ${reason}`);
    
    return {
      newXP,
      levelUp: newLevel > oldLevel,
      newLevel,
    };
  }

  static checkAchievements(userProgress: any): Achievement[] {
    const newAchievements: Achievement[] = [];
    
    // Check for data collection achievements
    if (userProgress.totalMessages >= 1000) {
      newAchievements.push({
        id: 1,
        title: 'Data Collector',
        description: 'Collected 1000+ messages',
        completed: true,
        icon: 'database',
        xp: 100,
        unlockedAt: new Date(),
      });
    }

    // Check for training achievements
    if (userProgress.modelsTrained >= 1) {
      newAchievements.push({
        id: 2,
        title: 'Neural Architect',
        description: 'Successfully trained first model',
        completed: true,
        icon: 'brain',
        xp: 250,
        unlockedAt: new Date(),
      });
    }

    return newAchievements;
  }
}