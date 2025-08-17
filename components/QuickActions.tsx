import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Download, Play, Upload, Zap } from 'lucide-react-native';

export function QuickActions() {
  const actions = [
    { icon: Download, label: 'Collect Data', color: '#00d4ff' },
    { icon: Play, label: 'Start Training', color: '#00ff88' },
    { icon: Upload, label: 'Load Model', color: '#ff6b6b' },
    { icon: Zap, label: 'Quick Chat', color: '#fbbf24' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Actions</Text>
      <View style={styles.grid}>
        {actions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.actionCard}>
            <View style={[styles.iconContainer, { backgroundColor: action.color }]}>
              <action.icon size={24} color="#ffffff" />
            </View>
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
});