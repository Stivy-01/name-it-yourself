import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Check, Clock } from 'lucide-react-native';

interface TrainingProgressProps {
  steps: string[];
  currentStep: number;
  progress: number;
}

export function TrainingProgress({ steps, currentStep, progress }: TrainingProgressProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Training Pipeline</Text>
      
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.progressText}>{Math.round(progress * 100)}% Complete</Text>

      <View style={styles.steps}>
        {steps.map((step, index) => (
          <View key={index} style={styles.step}>
            <View style={[
              styles.stepIcon,
              index < currentStep && styles.completedStep,
              index === currentStep && styles.activeStep,
            ]}>
              {index < currentStep ? (
                <Check size={16} color="#ffffff" />
              ) : (
                <Clock size={16} color={index === currentStep ? "#ffffff" : "#6b7280"} />
              )}
            </View>
            <Text style={[
              styles.stepText,
              index < currentStep && styles.completedStepText,
              index === currentStep && styles.activeStepText,
            ]}>
              {step}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00d4ff',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 20,
  },
  steps: {
    gap: 12,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  completedStep: {
    backgroundColor: '#00ff88',
  },
  activeStep: {
    backgroundColor: '#00d4ff',
  },
  stepText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  completedStepText: {
    color: '#00ff88',
    fontWeight: '600',
  },
  activeStepText: {
    color: '#00d4ff',
    fontWeight: '600',
  },
});