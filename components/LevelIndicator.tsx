import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Star } from 'lucide-react-native';

interface LevelIndicatorProps {
  level: number;
  xp: number;
  maxXp: number;
}

export function LevelIndicator({ level, xp, maxXp }: LevelIndicatorProps) {
  const progress = xp / maxXp;

  return (
    <View style={styles.container}>
      <View style={styles.levelBadge}>
        <Star size={20} color="#fbbf24" />
        <Text style={styles.levelText}>LVL {level}</Text>
      </View>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>
        <Text style={styles.xpText}>{xp} / {maxXp} XP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  levelText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fbbf24',
    marginLeft: 6,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fbbf24',
    borderRadius: 4,
  },
  xpText: {
    fontSize: 12,
    color: '#94a3b8',
  },
});