import { View, Image, Text, TouchableOpacity } from 'react-native'
import { s } from './styles';
export  function Header() {
    return <View style={s.container}>
        <Image style= 
        {s.image}
        source ={{uri: 'https://github.com/kaikibarros.png'}}/>
        
        <View style={s.user}>
            <Text style={s.name}>Kaiki Barros</Text>
            <Text style={s.email}>kaikibarros2004@gmail.com</Text>
        </View>
    </View>;
}

export default Header;