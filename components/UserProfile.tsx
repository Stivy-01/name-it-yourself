import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { User, Star } from 'lucide-react-native';

export function UserProfile() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6366f1', '#8b5cf6', '#a855f7']}
        style={styles.profileCard}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.avatarContainer}>
          <User size={32} color="#ffffff" />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>AI Trainer</Text>
          <View style={styles.levelContainer}>
            <Star size={16} color="#fbbf24" />
            <Text style={styles.level}>Level 3 • 2,450 XP</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 24,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  level: {
    fontSize: 14,
    color: '#e5e7eb',
    marginLeft: 6,
    fontWeight: '600',
  },
});