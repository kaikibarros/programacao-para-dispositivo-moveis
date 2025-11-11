const React = require('react');
const { View, Text, StyleSheet, SafeAreaView, ScrollView, Linking } = require('react-native');

const { Ionicons } = require('@expo/vector-icons'); 

const PDF_DOWNLOAD_URL = ''
const EMAIL_URL = 'mailto:kaikibarros2004@gmail.com'; 
const LINKEDIN_URL = 'https://www.linkedin.com/in/kaikibarros'; 
 import BotaoDownload from "../components/botaoCurriculo";


export default function ContatoScreen() {

  const urlDoArquivo = 'https://raw.githubusercontent.com/kaikibarros/programacao-para-dispositivo-moveis/28617de564c2f58442cce628c98dd7d42acb9fb1/curriculo/src/assets/curriculo.pdf';

  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* ScrollView permite que o conteúdo role, se necessário */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Meu Currículo</Text>
            <Text style={styles.paragraph}>
              Se preferir, pode baixar a versão completa do meu currículo em formato PDF para guardar ou partilhar.
            </Text>
            <BotaoDownload 
              url={urlDoArquivo}
            />
            
            
          </View>

          {/* --- Seção Entre em Contato --- */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Entre em Contato</Text>
            <Text style={styles.paragraph}>
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para me contactar através de um dos canais abaixo:
            </Text>

            {/* Botão de Email */}
           
              <Ionicons name="mail-outline" size={24} color="#38bdf8" />
              <Text style={styles.contactText}>kaikibarros2004@gmail.com</Text>
           

            {/* Botão de LinkedIn */}
            {/* <TouchableOpacity style={styles.contactItem} onPress={() => handleOpenURL(LINKEDIN_URL)}> */}
              <Ionicons name="logo-linkedin" size={24} color="#38bdf8" />
              <Text style={styles.contactText}>LinkedIn</Text>
            {/* </TouchableOpacity> */}
          </View>

        </ScrollView>

        {/* --- Footer --- */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>© 2024 Kaiki Barros. Todos os direitos reservados.</Text>
        </View>

      </View>
    </SafeAreaView>
  ) 
}

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
    marginBottom: 20,
  },
  // Botão principal de download
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38bdf8', // Azul claro (cor de destaque)
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  buttonText: {
    color: '#0f172a', // Texto escuro
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  // Botões de contato (email, linkedin)
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#334155', // Um fundo leve para o botão
    padding: 15,
    borderRadius: 10,
  },
  contactText: {
    fontSize: 18, 
    position: 'flex-right',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#cbd5e1',
    marginLeft: 15,
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