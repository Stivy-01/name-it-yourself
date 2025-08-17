import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Send } from 'lucide-react-native';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (text: string, isUser?: boolean) => void;
}

export function ChatInterface({ messages, onSendMessage }: ChatInterfaceProps) {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
      
      // Simulate AI response
      setTimeout(() => {
        onSendMessage("I understand! Based on your social media data, I can help you with that. What specific aspect would you like to explore?", false);
      }, 1500);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
        {messages.map(message => (
          <View key={message.id} style={[
            styles.messageBubble,
            message.isUser ? styles.userMessage : styles.assistantMessage
          ]}>
            <Text style={[
              styles.messageText,
              message.isUser ? styles.userMessageText : styles.assistantMessageText
            ]}>
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask your AI assistant..."
          placeholderTextColor="#6b7280"
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Send size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
    maxHeight: 300,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  userMessage: {
    backgroundColor: '#00d4ff',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  assistantMessage: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#ffffff',
  },
  assistantMessageText: {
    color: '#e5e7eb',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#ffffff',
    fontSize: 14,
    maxHeight: 100,
    marginRight: 12,
  },
  sendButton: {
    backgroundColor: '#00d4ff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});