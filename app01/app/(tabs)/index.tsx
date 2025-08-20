import { StyleSheet, TextBase } from 'react-native';
import { Image } from 'expo-image';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App criado para a disciplina Programação para Dispositivos Móveis</Text>
     
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <Image 
      style={styles.image}
      contentFit="cover"
      transition={1000}
      alt="Kaiki"
    source={require('@/assets/images/KAKO.jpg')}
    />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <Text style={styles.title}>Kaiki Barros</Text>
       
      <Text style={styles.paragrafos}>Estudande de sistemas para internert na Universidade Católica de Pernambuco (UNICAP), apaixonado por tecnologia e audiovisual.</Text>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  paragrafos: {
    fontSize: 17,
    padding: 20,
    fontWeight: 'normal',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
});
