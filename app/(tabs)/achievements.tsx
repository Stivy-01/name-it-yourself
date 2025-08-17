import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AchievementCard } from '@/components/AchievementCard';
import { ProgressRing } from '@/components/ProgressRing';
import { LevelIndicator } from '@/components/LevelIndicator';

export default function AchievementsScreen() {
  const achievements = [
    {
      id: 1,
      title: 'Data Collector',
      description: 'Collected 1000+ messages',
      completed: true,
      icon: 'database',
      xp: 100,
    },
    {
      id: 2,
      title: 'Neural Architect',
      description: 'Successfully trained first model',
      completed: true,
      icon: 'brain',
      xp: 250,
    },
    {
      id: 3,
      title: 'Efficiency Master',
      description: 'Cleaned dataset in under 5 minutes',
      completed: false,
      icon: 'zap',
      xp: 150,
    },
    {
      id: 4,
      title: 'Conversation Wizard',
      description: 'Generated 100 AI responses',
      completed: false,
      icon: 'message-circle',
      xp: 200,
    },
  ];

  return (
    <LinearGradient
      colors={['#0f0f23', '#1a1a2e', '#16213e']}
      style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Progress & Achievements</Text>
          <Text style={styles.subtitle}>Track your AI training journey</Text>
        </View>

        <View style={styles.statsContainer}>
          <LevelIndicator level={3} xp={2450} maxXp={3000} />
          <ProgressRing progress={0.82} label="Overall Progress" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {achievements.map(achievement => (
            <AchievementCard
              key={achievement.id}
              title={achievement.title}
              description={achievement.description}
              completed={achievement.completed}
              icon={achievement.icon}
              xp={achievement.xp}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  section: {
    marginVertical: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
});