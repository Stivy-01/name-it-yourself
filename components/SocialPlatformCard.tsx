import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Send, MessageCircle, Smartphone, Twitter } from 'lucide-react-native';

interface SocialPlatformCardProps {
  name: string;
  connected: boolean;
  messages: number;
  icon: string;
}

export function SocialPlatformCard({ name, connected, messages, icon }: SocialPlatformCardProps) {
  const getIcon = (iconName: string) => {
    const iconProps = { size: 24, color: connected ? '#00d4ff' : '#6b7280' };
    switch (iconName) {
      case 'send': return <Send {...iconProps} />;
      case 'message-circle': return <MessageCircle {...iconProps} />;
      case 'smartphone': return <Smartphone {...iconProps} />;
      case 'twitter': return <Twitter {...iconProps} />;
      default: return <MessageCircle {...iconProps} />;
    }
  };

  return (
    <TouchableOpacity style={[styles.card, connected && styles.connectedCard]}>
      <View style={styles.iconContainer}>
        {getIcon(icon)}
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>
          {connected ? `${messages.toLocaleString()} messages` : 'Not connected'}
        </Text>
      </View>
      <View style={[styles.statusDot, { backgroundColor: connected ? '#00ff88' : '#6b7280' }]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  connectedCard: {
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    borderColor: 'rgba(0, 212, 255, 0.3)',
  },
  iconContainer: {
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: '#94a3b8',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});