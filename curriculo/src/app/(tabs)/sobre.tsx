import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// Adicionamos os ícones que vamos usar
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 


export default function SobreScreen() {
    return(
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* ScrollView permite que o conteúdo role */}
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            
            {/* --- Seção Sobre Mim --- */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Aqui é eu 👋</Text>
              <Text style={styles.paragraph}>
                Olá pessoal, meu nome é Kaiki Barros, sou um estudante, estagiário, e desenvolvedor apaixonado pelo mundo da tecnologia.
              </Text>
              <Text style={styles.paragraph}>
                Minha formação inicial foi como Técnico em Informática, mas minha paixão pela tecnologia me levou a estudar Sistemas para Internet na Universidade Católica de Pernambuco (UNICAP).
              </Text>
            </View>

            {/* --- Seção Hobbies --- */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Hobbies</Text>
              <View style={styles.hobbyItem}>
                <Ionicons name="game-controller-outline" size={24} color="#38bdf8" />
                <Text style={styles.hobbyText}>Jogos</Text>
              </View>
              <View style={styles.hobbyItem}>
                <Ionicons name="musical-notes-outline" size={24} color="#38bdf8" />
                <Text style={styles.hobbyText}>Música</Text>
              </View>
              <View style={styles.hobbyItem}>
                <Ionicons name="book-outline" size={24} color="#38bdf8" />
                <Text style={styles.hobbyText}>Leitura</Text>
              </View>
            </View>

            {/* --- Seção Habilidades --- */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Minhas Habilidades</Text>
              <View style={styles.skillsContainer}>
                {/* Ícones de exemplo. Troque pelos que você preferir! */}
                <Ionicons name="logo-javascript" size={50} color="#F7DF1E" />
                <Ionicons name="logo-react" size={50} color="#61DAFB" />
                <FontAwesome5 name="java" size={50} color="#f89820" />
                {/* Adicione mais ícones aqui */}
              </View>
            </View>

            {/* --- Seção Coding Journey --- */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>My Coding Journey</Text>
              <Text style={styles.paragraph}>
                Aqui será exibido um gráfico de contribuições do GitHub. (Esta é uma funcionalidade avançada que pode ser implementada com bibliotecas de gráficos!)
              </Text>
            </View>

          </ScrollView>

      
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>© 2024 Kaiki Barros. Todos os direitos reservados.</Text>
          </View>

        </View>
      </SafeAreaView>
    ) 
}

// --- Estilos da Página Sobre ---
// Reutilizamos os estilos da HomeScreen para manter a consistência
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
    color: '#cbd5e1', // Cinza
    lineHeight: 24, // Espaçamento entre linhas
    marginBottom: 15, // Espaço entre parágrafos
  },
  hobbyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  hobbyText: {
    fontSize: 18,
    color: '#cbd5e1',
    marginLeft: 15,
  },
  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  footerContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#334155', // Cor da borda
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a', // Mesmo fundo da safeArea
  },
  footerText: {
    color: '#94a3b8', // Cinza médio
    fontSize: 12,
  }
});