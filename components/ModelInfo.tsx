import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Cpu, HardDrive, Clock, Zap } from 'lucide-react-native';

interface ModelInfoProps {
  parameters: string;
  quantization: string;
  memoryUsage: string;
  responseTime: string;
}

export function ModelInfo({ parameters, quantization, memoryUsage, responseTime }: ModelInfoProps) {
  const specs = [
    { icon: Cpu, label: 'Parameters', value: parameters },
    { icon: HardDrive, label: 'Quantization', value: quantization },
    { icon: HardDrive, label: 'Memory', value: memoryUsage },
    { icon: Clock, label: 'Response Time', value: responseTime },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Model Specifications</Text>
      <View style={styles.specsGrid}>
        {specs.map((spec, index) => (
          <View key={index} style={styles.specItem}>
            <spec.icon size={16} color="#00d4ff" />
            <Text style={styles.specLabel}>{spec.label}</Text>
            <Text style={styles.specValue}>{spec.value}</Text>
          </View>
        ))}
      </View>
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
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 16,
  },
  specsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  specLabel: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 6,
    marginBottom: 2,
  },
  specValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
});