import React, useState; from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('Hindi');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Multimodal Reader</Text>
        <TouchableOpacity onPress={() => setCurrentLanguage(prev => prev === 'Hindi' ? 'English' : 'Hindi')}>
          <Text style={styles.langButton}>
            Switch to {currentLanguage === 'Hindi' ? 'English' : 'Hindi'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold' },
  langButton: { color: 'blue', fontSize: 18 },
});

