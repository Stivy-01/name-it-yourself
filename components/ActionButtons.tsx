import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MessageSquare, Share2 } from 'lucide-react-native';

interface ActionButtonsProps {
  onAskAssistant: () => void;
  onSocialPost: () => void;
}

export function ActionButtons({ onAskAssistant, onSocialPost }: ActionButtonsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.primaryButton} onPress={onAskAssistant}>
        <MessageSquare size={20} color="#ffffff" />
        <Text style={styles.primaryButtonText}>Quick Question</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={onSocialPost}>
        <Share2 size={20} color="#00d4ff" />
        <Text style={styles.secondaryButtonText}>Social Post</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 32,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#00d4ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00d4ff',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
  },
  secondaryButtonText: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});