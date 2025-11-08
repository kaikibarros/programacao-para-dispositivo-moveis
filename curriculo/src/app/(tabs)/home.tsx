import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import {Footer} from '../components/footer'
import { s } from '../components/footer/styles'


export default function HomeScreen() {
    return(
      
      // conteúdo do home
        <View style ={{flex: 1}}>
            
            <Text>Olá!! [EMOJI]</Text>
            <Text>Meu nome é Kaiki Barros</Text>
            <Text>Bem-vindo ao meu currículo digital!</Text>
             <Image/>
        
      
        <Text>Sobre mim </Text>
        <Text>Sou estudante de Sistemas para Internet e apaixonado por tecnologia. Tenho experiência em desenvolvimento web e mobile</Text>

        <Text>Minhas habilidades profissionais incluem TypeScrypt, Java, React Native e outras tecnologias relevantes para o mercado de trabalho </Text>

        <Text>Um Icone meu</Text>


        <Text>FIND ME ON</Text>
        <Text>Redes sociais</Text>

        <View style={s.footer}>
            <Footer>
                <Text>© 2024 Kaiki Barros. Todos os direitos reservados.</Text>
            </Footer> 
            </View>

       </View>
     )
}

// estilos do home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});