import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusCard } from '@/components/StatusCard';
import { QuickActions } from '@/components/QuickActions';
import { UserProfile } from '@/components/UserProfile';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#0f0f23', '#1a1a2e', '#16213e']}
      style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <UserProfile />
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>System Status</Text>
          <StatusCard
            title="Data Collection"
            status="Ready"
            description="3 platforms connected"
            color="#00d4ff"
          />
          <StatusCard
            title="Dataset Quality"
            status="Excellent"
            description="2,847 messages cleaned"
            color="#00ff88"
          />
          <StatusCard
            title="Model Status"
            status="Training Ready"
            description="Gemma-3 270M configured"
            color="#ff6b6b"
          />
        </View>

        <QuickActions />
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
  section: {
    marginVertical: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
});