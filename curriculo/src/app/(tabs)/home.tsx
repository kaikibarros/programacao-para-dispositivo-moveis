import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
    return(
      // conteúdo do home
        <View style={styles.container}><Text>Kaiki Barros</Text></View>
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