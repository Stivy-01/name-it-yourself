import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Upload, Download, FileCode } from 'lucide-react-native';

export function ModelExport() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Model Export & Templates</Text>
      
      <TouchableOpacity style={styles.exportButton}>
        <Download size={20} color="#ffffff" />
        <Text style={styles.buttonText}>Download Colab Template</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exportButton}>
        <FileCode size={20} color="#ffffff" />
        <Text style={styles.buttonText}>Get Training Scripts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadButton}>
        <Upload size={20} color="#00d4ff" />
        <Text style={styles.uploadButtonText}>Load Trained Model</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  exportButton: {
    backgroundColor: '#6366f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  uploadButton: {
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00d4ff',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  uploadButtonText: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});