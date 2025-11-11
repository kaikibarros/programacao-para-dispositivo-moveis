import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import * as FileSystem from 'expo-file-system'; // Biblioteca de download do Expo
import * as Sharing from 'expo-sharing'; // Para abrir/partilhar o ficheiro
import { Ionicons } from '@expo/vector-icons';

const BotaoDownload = ({ url, nomeArquivo, titulo }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Define onde o ficheiro será guardado temporariamente
    const fileUri = FileSystem.cacheDirectory + nomeArquivo;

    try {
     
      const { uri } = await FileSystem.downloadAsync(url, fileUri);
      console.log('Download concluído:', uri);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      } else {
        alert('Não é possível abrir este tipo de ficheiro neste dispositivo.');
      }

    } catch (error) {
      console.error('Erro no download:', error);
      alert('Falha ao baixar o arquivo.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Pressable style={styles.botao} onPress={handleDownload} disabled={isDownloading}>
      {isDownloading ? (
        <ActivityIndicator color="#0f172a" />
      ) : (
        <View style={styles.conteudoBotao}>
          <Ionicons name="download-outline" size={22} color="#0f172a" />
          <Text style={styles.texto}>{titulo || 'Baixar'}</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38bdf8', // Azul claro (cor de destaque)
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 10,
    minHeight: 55, // Altura mínima
  },
  conteudoBotao: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texto: {
    color: '#0f172a', // Texto escuro
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default BotaoDownload;