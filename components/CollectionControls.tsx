import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Play, Pause, Download } from 'lucide-react-native';

interface CollectionControlsProps {
  isCollecting: boolean;
  onToggleCollection: () => void;
}

export function CollectionControls({ isCollecting, onToggleCollection }: CollectionControlsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.primaryButton, isCollecting && styles.pauseButton]}
        onPress={onToggleCollection}>
        {isCollecting ? (
          <Pause size={20} color="#ffffff" />
        ) : (
          <Play size={20} color="#ffffff" />
        )}
        <Text style={styles.primaryButtonText}>
          {isCollecting ? 'Pause Collection' : 'Start Collection'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Download size={20} color="#00d4ff" />
        <Text style={styles.secondaryButtonText}>Export Dataset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 32,
  },
  primaryButton: {
    backgroundColor: '#00d4ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  pauseButton: {
    backgroundColor: '#ff6b6b',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  secondaryButton: {
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00d4ff',
  },
  secondaryButtonText: {
    color: '#00d4ff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});