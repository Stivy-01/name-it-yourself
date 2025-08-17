import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bot, Cpu } from 'lucide-react-native';

interface AssistantHeaderProps {
  name: string;
  model: string;
}

export function AssistantHeader({ name, model }: AssistantHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Bot size={32} color="#00d4ff" />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.modelInfo}>
          <Cpu size={14} color="#94a3b8" />
          <Text style={styles.model}>{model}</Text>
        </View>
      </View>
      <View style={styles.statusDot} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 212, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  modelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  model: {
    fontSize: 14,
    color: '#94a3b8',
    marginLeft: 6,
    fontWeight: '500',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00ff88',
  },
});