import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DataStatsProps {
  totalMessages: number;
  cleanedMessages: number;
  platforms: number;
}

export function DataStats({ totalMessages, cleanedMessages, platforms }: DataStatsProps) {
  const cleaningPercentage = Math.round((cleanedMessages / totalMessages) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.statCard}>
        <Text style={styles.statNumber}>{totalMessages.toLocaleString()}</Text>
        <Text style={styles.statLabel}>Total Messages</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={styles.statNumber}>{cleaningPercentage}%</Text>
        <Text style={styles.statLabel}>Cleaned</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={styles.statNumber}>{platforms}</Text>
        <Text style={styles.statLabel}>Platforms</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#00d4ff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
    fontWeight: '600',
  },
});