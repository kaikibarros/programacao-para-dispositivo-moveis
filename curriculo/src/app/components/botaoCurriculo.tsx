import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';

type BotaoDownloadProps = {
  url: string;
};

export default function BotaoDownload({ url }: BotaoDownloadProps) {
  const handleOpenUrl = async () => {
    await Linking.openURL(url);
  };

  return (
    <Pressable style={styles.botao} onPress={handleOpenUrl}>
      <Ionicons name="download-outline" size={22} color="#0f172a" />
      <Text style={styles.texto}>Baixar Currículo (PDF)</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38bdf8',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  texto: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
});
