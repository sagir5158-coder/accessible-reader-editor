

```jsx
import React, { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import * as Speech from 'expo-speech';
import { SafeAreaView, View, Text, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('Hindi');
  const [selectedText, setSelectedText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [def, setDefinition] = useState('');

  const handleDocumentPick = async () =&gt; {
    try {
      const res = await DocumentPicker.getDocumentAsync({ type: 'text/*' });
      if (!res.canceled &amp;&amp; res.assets[0]) {
        setSelectedText(res.assets[0].name);
      }
    } catch (err) {
      console.error('Error picking document:', err);
    }
  };

  const handleTextConversion = async (text) =&gt; {
    try {
      const thingToSay = text || "Sample text to read aloud.";
      await Speech.speak(thingToSay, {
        language: currentLanguage === 'Hindi' ? 'hi-IN' : 'en-US',
      });
    } catch (e) {
      console.error("Speech error", e);
    }
  };

  const handleSearch = () =&gt; {
    if (!searchQuery.trim()) return;
    setDefinition(`Definition for ${searchQuery}: Sample meaning pulled from dictionary.`);
  };

  return (
    &lt;SafeAreaView style={styles.container}&gt;
      &lt;View style={styles.header}&gt;
        &lt;Text style={styles.title}&gt;Multimodal Reader&lt;/Text&gt;
        &lt;TouchableOpacity onPress={() =&gt; setCurrentLanguage(prev =&gt; prev === 'Hindi' ? 'English' : 'Hindi')}&gt;
          &lt;Text style={styles.langButton}&gt;
            Switch to {currentLanguage === 'Hindi' ? 'English' : 'Hindi'}
          &lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
      &lt;/View&gt;
      &lt;ScrollView contentContainerStyle={styles.content}&gt;
        &lt;Button title="Pick Document" onPress={handleDocumentPick} /&gt;
        {selectedText ? (
          &lt;View&gt;
            &lt;Text style={styles.label}&gt;Extracted Text / File:&lt;/Text&gt;
            &lt;Text&gt;{selectedText}&lt;/Text&gt;
            &lt;Button title="Convert to Audio" onPress={() =&gt; handleTextConversion(selectedText)} /&gt;
          &lt;/View&gt;
        ) : null}
        &lt;View style={styles.searchSection}&gt;
          &lt;TextInput
            style={styles.input}
            placeholder="Search dictionary..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          /&gt;
          &lt;Button title="Search" onPress={handleSearch} /&gt;
          {def ? &lt;Text style={styles.def}&gt;{def}&lt;/Text&gt; : null}
        &lt;/View&gt;
      &lt;/ScrollView&gt;
    &lt;/SafeAreaView&gt;
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
```