import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Jogo da Forca!</Text>
      <Link href="./jogo-da-forca" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Jogar Agora</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f1724' },
  title: { color: '#fff', fontSize: 24, marginBottom: 16, textAlign: 'center' },
  btn: { backgroundColor: '#3b82f6', padding: 14, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
