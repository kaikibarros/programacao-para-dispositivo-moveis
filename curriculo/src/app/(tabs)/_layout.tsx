import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'react-native';

export default function RootLayout() {
  return (
    // 1. O GestureHandlerRootView é necessário para o Drawer
    <GestureHandlerRootView style={{ flex: 1 }}>
     
      <Drawer
        
        screenOptions={{
          headerStyle: {
            backgroundColor: '#20004bff', 
          },
          headerTintColor: '#e0edbeff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },

         
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Image
                source={require('@/assets/image/kaiki.png')}
                style={{ width: 40, height: 40, borderRadius: 15 }}
              />
              <Text style={{ color: 'white', marginLeft: 10, fontSize: 16 }}>
              </Text>
            </View>
          ),
        }}
      >
        
        <Drawer.Screen
          name="index" 
          options={{
            title: 'Kaiki Barros', 
            drawerIcon: ({ color, size }) => (
              <AntDesign name="aliwangwang" size={size} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="home" // app/home.js
          options={{
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="sobre" // app/sobre.js
          options={{
            title: 'Sobre mim',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="curriculo" // app/contato.js
          options={{
            title: 'Curriculo',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="phone" size={size} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="projetos" // app/projetos.js
          options={{
            title: 'Projetos',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="book" size={size} color="black" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>

    
  );
}