import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import {Footer} from '../components/footer'
import { s } from '../components/footer/styles'

export default function SobreScreen() {
    return(
        // conteúdo do perfil
        <View><Text>Sobre mim</Text>
        
        <View style={s.footer}>
                    <Footer>
                        <Text>© 2024 Kaiki Barros. Todos os direitos reservados.</Text>
                    </Footer> 
                    </View>
        </View>
    ) 

}

// estilos do 
