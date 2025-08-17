export interface SocialPlatform {
  name: string;
  connected: boolean;
  messages: number;
  icon: string;
  apiKey?: string;
}

export interface TrainingStep {
  id: number;
  name: string;
  completed: boolean;
  active: boolean;
  xpReward: number;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  icon: string;
  xp: number;
  unlockedAt?: Date;
}

export interface ModelSpec {
  name: string;
  parameters: string;
  quantization: string;
  memoryUsage: string;
  responseTime: string;
  accuracy?: number;
}

export interface UserProgress {
  level: number;
  xp: number;
  totalMessages: number;
  modelsTrained: number;
  achievements: Achievement[];
}

export interface DatasetStats {
  totalMessages: number;
  cleanedMessages: number;
  platforms: number;
  dataQuality: number;
  lastUpdated: Date;
}