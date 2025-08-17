import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CircularProgress } from '@/components/CircularProgress';

interface ProgressRingProps {
  progress: number;
  label: string;
}

export function ProgressRing({ progress, label }: ProgressRingProps) {
  return (
    <View style={styles.container}>
      <CircularProgress progress={progress} size={80} strokeWidth={6} />
      <Text style={styles.percentage}>{Math.round(progress * 100)}%</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  label: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 8,
    textAlign: 'center',
  },
});