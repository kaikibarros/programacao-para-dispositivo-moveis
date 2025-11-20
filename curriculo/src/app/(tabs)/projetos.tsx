import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const GITHUB_PROFILE_URL = 'https://github.com/kaikibarros';

export default function ProjetoScreen() {

  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          {/* --- Seção Projetos --- */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projetos</Text>
            <Text style={styles.paragraph}>
              Aqui estarão listados os meus principais repositórios públicos do GitHub, conectados diretamente via API.
            </Text>

            <View style={styles.repoPlaceholder}>
              <Ionicons name="git-branch-outline" size={40} color="#334155" />
              <Text style={styles.placeholderText}>[Lista de Repositórios]</Text>
              <Text style={styles.placeholderSubText}>Em breve...</Text>
            </View>

            {/* --- Botão para o GitHub --- */}
            <TouchableOpacity style={styles.githubButton} onPress={() => Linking.openURL(GITHUB_PROFILE_URL)}>
              <Ionicons name="logo-github" size={22} color="#e2e8f0" />
              <Text style={styles.buttonText}>Ver todos no GitHub</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

        {/* --- Footer --- */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>© 2025 Kaiki Barros. Todos os direitos reservados.</Text>
        </View>

      </View>
    </SafeAreaView>
  ) 
}

// --- Estilos da Página Projetos ---

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a', // Fundo escuro (azul-petróleo)
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20, // Espaçamento interno para o conteúdo
  },
  section: {
    width: '100%',
    padding: 20,
    backgroundColor: '#1e293b', // Fundo da seção (azul mais escuro)
    borderRadius: 15,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e2e8f0',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#cbd5e1',
    lineHeight: 24, // Espaçamento entre linhas
    marginBottom: 20,
    textAlign: 'center',
  },
  // Placeholder para a lista de repos
  repoPlaceholder: {
    backgroundColor: '#0f172a',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#334155',
    borderStyle: 'dashed',
    marginBottom: 20,
    minHeight: 150,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155', // Texto "apagado"
    marginTop: 10,
  },
  placeholderSubText: {
    fontSize: 14,
    color: '#334155',
  },
  // Botão para o perfil do GitHub
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#334155', // Cor mais sutil, pois não é a ação principal
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  buttonText: {
    color: '#e2e8f0', // Texto claro
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  // Estilo do Rodapé
  footerContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#334155', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a', 
  },
  footerText: {
    color: '#94a3b8', 
    fontSize: 12,
  }
});