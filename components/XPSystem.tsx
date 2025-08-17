import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Star } from 'lucide-react-native';

interface XPSystemProps {
  xp: number;
  level: number;
}

export function XPSystem({ xp, level }: XPSystemProps) {
  const nextLevelXP = level * 1000;
  const currentLevelXP = (level - 1) * 1000;
  const progressToNext = (xp - currentLevelXP) / (nextLevelXP - currentLevelXP);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Star size={24} color="#fbbf24" />
        <Text style={styles.level}>Level {level}</Text>
      </View>
      
      <View style={styles.xpBar}>
        <View style={[styles.xpFill, { width: `${progressToNext * 100}%` }]} />
      </View>
      
      <Text style={styles.xpText}>
        {xp.toLocaleString()} / {nextLevelXP.toLocaleString()} XP
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  level: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fbbf24',
    marginLeft: 8,
  },
  xpBar: {
    height: 8,
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    borderRadius: 4,
    marginBottom: 8,
  },
  xpFill: {
    height: '100%',
    backgroundColor: '#fbbf24',
    borderRadius: 4,
  },
  xpText: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
  },
});