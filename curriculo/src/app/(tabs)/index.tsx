import { View, Text } from 'react-native';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { s } from '../components/footer/styles';

export default function Index() {
    return (
        <View style={{flex: 1, paddingTop:32 }}>  
           
            <Text>Index Screen</Text>  

            <View style={s.footer}>
                        <Footer>
                            <Text>© 2024 Kaiki Barros. Todos os direitos reservados.</Text>
                        </Footer> 
                        </View> 
        </View>
    )
}