import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Terminal } from 'lucide-react-native';

export function TrainingLogs() {
  const [logs, setLogs] = useState([
    { id: 1, message: 'All messages polished! +50 XP 🧹', type: 'success', timestamp: '2:34 PM' },
    { id: 2, message: 'Neurons firing! ⚡ Level Up!', type: 'level', timestamp: '2:35 PM' },
    { id: 3, message: 'LoRA weights updating... 🧠', type: 'info', timestamp: '2:36 PM' },
    { id: 4, message: 'Training batch 247/500 complete', type: 'info', timestamp: '2:37 PM' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Terminal size={20} color="#00d4ff" />
        <Text style={styles.title}>Training Console</Text>
      </View>
      
      <ScrollView style={styles.logsContainer} showsVerticalScrollIndicator={false}>
        {logs.map(log => (
          <View key={log.id} style={styles.logItem}>
            <Text style={styles.timestamp}>{log.timestamp}</Text>
            <Text style={[styles.logMessage, styles[`${log.type}Message`]]}>
              {log.message}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 8,
  },
  logsContainer: {
    maxHeight: 200,
  },
  logItem: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  timestamp: {
    fontSize: 12,
    color: '#6b7280',
    width: 60,
    marginRight: 12,
  },
  logMessage: {
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  successMessage: {
    color: '#00ff88',
  },
  levelMessage: {
    color: '#fbbf24',
    fontWeight: '600',
  },
  infoMessage: {
    color: '#94a3b8',
  },
});