import React, useState; from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('Hindi');
  const [selectedText, setSelectedText] = useState('');
  const [convertedAudio, setConvertedAudio] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [def, setDefinition] = useState('');

  const handleDocumentPick = async () => {
    setSelectedText("Sample text extracted from document.");
  };

  const handleTextConversion = async (text) => {
    console.log("Converting text up to 100k words...");
  };

  const handleSearch = () => {
    setDefinition(`Definition for ${searchQuery}: Sample meaning.`);
  };

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
      <ScrollView contentContainerStyle={styles.content}>
        <Button title="Pick Document" onPress={handleDocumentPick} />
        {selectedText ? (
          <View>
            <Text style={styles.label}>Extracted Text:</Text>
            <Text>{selectedText}</Text>
            <Button title="Convert to Audio" onPress={() => handleTextConversion(selectedText)} />
          </View>
        ) : null}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="Search dictionary..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Button title="Search" onPress={handleSearch} />
          {def ? <Text style={styles.def}>{def}</Text> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold' },
  langButton: { color: 'blue', fontSize: 18 },
  content: { padding: 20 },
  label: { fontWeight: 'bold', marginTop: 15, marginBottom: 5 },
  searchSection: { marginTop: 30 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  def: { marginTop: 10, fontStyle: 'italic' },
});

