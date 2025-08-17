import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TrainingProgress } from '@/components/TrainingProgress';
import { XPSystem } from '@/components/XPSystem';
import { TrainingLogs } from '@/components/TrainingLogs';
import { ModelExport } from '@/components/ModelExport';

export default function TrainingScreen() {
  const [currentStep, setCurrentStep] = useState(2);
  const [xp, setXp] = useState(2450);
  const [level, setLevel] = useState(3);

  const trainingSteps = [
    'Dataset Preparation',
    'LoRA Configuration',
    'Training In Progress',
    'Model Quantization',
    'Export Complete'
  ];

  return (
    <LinearGradient
      colors={['#0f0f23', '#1a1a2e', '#16213e']}
      style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Neural Network Forge</Text>
          <Text style={styles.subtitle}>Your AI is learning and evolving</Text>
        </View>

        <XPSystem xp={xp} level={level} />

        <TrainingProgress 
          steps={trainingSteps}
          currentStep={currentStep}
          progress={0.65}
        />

        <TrainingLogs />

        <ModelExport />
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
});