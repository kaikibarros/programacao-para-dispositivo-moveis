import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'react-native';
import { colors } from '@/styles/colors';

export default function RootLayout() {
  return (
    // 1. O GestureHandlerRootView é necessário para o Drawer
    <GestureHandlerRootView style={{ flex: 1 }} >
      <Drawer
        
        screenOptions={{
          headerShown: true,
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#bababaff',
          drawerActiveTintColor: '#ffff',
          drawerHideStatusBarOnOpen: true,
          

          drawerStyle: {
            paddingTop: 22,
            backgroundColor: '#0f172a', //cor do menu lateral
            width: "25%",
            

          },

          drawerLabelStyle: {
            marginLeft: -10,

          },
         sceneStyle: {
           backgroundColor: '#0f172a',

         },
         
        
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Image
                source={{uri: "https://github.com/kaikibarros.png"}}
                style={{ marginLeft: 10, width: 40, height: 40, borderRadius: 15 }}
              />
              <Text style={{ color: 'black', marginLeft: 10, fontSize: 16 }}>
                Kaiki Barros 
              </Text>
            </View>
          ),
          headerRight: () => (
            <DrawerToggleButton/>
          )
        }}
      >
        
        <Drawer.Screen

          name="index" // app/home.js
          options={{
            title: '',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color="white" />
            ),
          }}
        />
         
        <Drawer.Screen
          name="sobre" // app/sobre.js
          options={{
            title: '',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="curriculo" // app/contato.js
          options={{
            title: '',
            drawerIcon: ({ color , size }) => (
              <AntDesign name="phone" size={size} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="projetos" // app/projetos.js
          options={{
            title: '',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="book" size={size} color="white" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

