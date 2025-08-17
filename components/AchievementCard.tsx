import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Database, Brain, Zap, MessageCircle, Trophy, Check } from 'lucide-react-native';

interface AchievementCardProps {
  title: string;
  description: string;
  completed: boolean;
  icon: string;
  xp: number;
}

export function AchievementCard({ title, description, completed, icon, xp }: AchievementCardProps) {
  const getIcon = (iconName: string) => {
    const iconProps = { size: 24, color: completed ? '#fbbf24' : '#6b7280' };
    switch (iconName) {
      case 'database': return <Database {...iconProps} />;
      case 'brain': return <Brain {...iconProps} />;
      case 'zap': return <Zap {...iconProps} />;
      case 'message-circle': return <MessageCircle {...iconProps} />;
      default: return <Trophy {...iconProps} />;
    }
  };

  return (
    <TouchableOpacity style={[styles.card, completed && styles.completedCard]}>
      <View style={styles.iconContainer}>
        {getIcon(icon)}
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, completed && styles.completedTitle]}>
            {title}
          </Text>
          {completed && <Check size={20} color="#00ff88" />}
        </View>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.xp}>+{xp} XP</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  completedCard: {
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    borderColor: 'rgba(251, 191, 36, 0.3)',
  },
  iconContainer: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },
  completedTitle: {
    color: '#ffffff',
  },
  description: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 8,
    lineHeight: 18,
  },
  xp: {
    fontSize: 12,
    color: '#fbbf24',
    fontWeight: '600',
  },
});