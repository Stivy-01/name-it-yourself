import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SocialPlatformCard } from '@/components/SocialPlatformCard';
import { DataStats } from '@/components/DataStats';
import { CollectionControls } from '@/components/CollectionControls';

export default function CollectScreen() {
  const [isCollecting, setIsCollecting] = useState(false);

  const platforms = [
    { name: 'Twitter', connected: true, messages: 1234, icon: 'twitter' },
    { name: 'Telegram', connected: true, messages: 567, icon: 'send' },
    { name: 'Discord', connected: false, messages: 0, icon: 'message-circle' },
    { name: 'WhatsApp', connected: false, messages: 0, icon: 'smartphone' },
  ];

  return (
    <LinearGradient
      colors={['#0f0f23', '#1a1a2e', '#16213e']}
      style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Data Collection Hub</Text>
          <Text style={styles.subtitle}>Connect platforms and gather training data</Text>
        </View>

        <DataStats totalMessages={1801} cleanedMessages={1654} platforms={2} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connected Platforms</Text>
          {platforms.map((platform, index) => (
            <SocialPlatformCard
              key={index}
              name={platform.name}
              connected={platform.connected}
              messages={platform.messages}
              icon={platform.icon}
            />
          ))}
        </View>

        <CollectionControls 
          isCollecting={isCollecting}
          onToggleCollection={() => setIsCollecting(!isCollecting)}
        />
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
  section: {
    marginVertical: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
});