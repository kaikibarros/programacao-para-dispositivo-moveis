import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Linking } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PROFILE_IMAGE_URL = 'https://placehold.co/150x150/1E3A8A/FFF?text=KB';
const LINKEDIN_URL = 'https://www.linkedin.com/in/kaikibarros'; 
const GITHUB_URL = 'https://github.com/kaikibarros'; 

export default function HomeScreen() {
  return (
    // SafeAreaView garante que o conteúdo não fique debaixo da status bar ou do notch
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
         
          <View style={styles.header}>
            <Image
                source={require('@/assets/image/kaiki.png')}
                style={styles.profileImage}
              />
            
            <Text style={styles.title}>Olá!! 👋</Text>
            <Text style={styles.subtitle}>Meu nome é Kaiki Barros</Text>
            <Text style={styles.paragraph}>Bem-vindo ao meu currículo digital!</Text>
          </View>

          {/* --- Seção Sobre Mim --- */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre mim</Text>
            <Text style={styles.paragraph}>
              Sou estudante de Sistemas para Internet e apaixonado por tecnologia. 
              Tenho experiência em desenvolvimento web e mobile.
            </Text>
          </View>

          {/* --- Seção Habilidades --- */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Minhas Habilidades</Text>
            <Text style={styles.paragraph}>
              Minhas habilidades profissionais incluem JavaScript, TypeScript, Java, 
              React Native, Node.js e outras tecnologias relevantes 
              para o mercado de trabalho.
            </Text>
          </View>

          {/* --- Seção Redes Sociais --- */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FIND ME ON</Text>
            <View style={styles.socialsContainer}>
              <TouchableOpacity onPress={() => Linking.openURL(LINKEDIN_URL)}>
                <Ionicons name="logo-linkedin" size={40} color="#0A66C2" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(GITHUB_URL)}>
                <Ionicons name="logo-github" size={40} color="#e2e8f0" />
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>© 2024 Kaiki Barros. Todos os direitos reservados.</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#02021fff',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20, 
    alignItems: 'center', 
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderWidth: 3,
    borderColor: '#38bdf8', 
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e2e8f0',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 5,
  },
  section: {
    width: '100%',
    padding: 20,
    backgroundColor: '#1e293b',
    borderRadius: 15,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e2e8f0',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#cbd5e1', 
    lineHeight: 24, 
  },
  socialsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30, 
    marginTop: 10,
  },

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