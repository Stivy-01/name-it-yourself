import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AssistantHeader } from '@/components/AssistantHeader';
import { ChatInterface } from '@/components/ChatInterface';
import { ActionButtons } from '@/components/ActionButtons';
import { ModelInfo } from '@/components/ModelInfo';

export default function AssistantScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your personal AI assistant trained on your social media data. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);

  const addMessage = (text: string, isUser: boolean = true) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      isUser,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <LinearGradient
      colors={['#0f0f23', '#1a1a2e', '#16213e']}
      style={styles.container}>
      <View style={styles.content}>
        <AssistantHeader name="Your AI Assistant" model="Gemma-3 270M" />
        
        <ModelInfo 
          parameters="270M"
          quantization="Q4_K_M"
          memoryUsage="164MB"
          responseTime="<2s"
        />

        <ChatInterface messages={messages} onSendMessage={addMessage} />

        <ActionButtons 
          onAskAssistant={() => {}}
          onSocialPost={() => {}}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
});