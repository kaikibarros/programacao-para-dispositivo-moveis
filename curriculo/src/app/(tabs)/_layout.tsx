import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text,  TouchableOpacity } from 'react-native';


import { colors } from '../../styles/colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Drawer} from 'expo-router/drawer';
import { Header } from "../components/header";


export default function TabsLayout () {
    return(
    
      // gerencia gesto
    <GestureHandlerRootView style={{flex: 1}}>
      
        <Drawer>
          
          <Drawer.Screen name="index" 
           options={{
            title: 'a',
            
            drawerIcon: ({color, size}) => (
           <AntDesign name="aliwangwang" size={24} color="black" />
           
            ),
          }} />

          <Drawer.Screen name="home"
           options={{
            title: 'Home',
            drawerIcon: ({color, size}) => (
           <AntDesign name="home" size={24} color="black" />
            ),
          }} />

          <Drawer.Screen name="sobre"
           options={{
            title: 'Sobre mim',
            drawerIcon: ({color, size}) => (
           <AntDesign name="user" size={24} color="black" />
            ),
          }} />

          <Drawer.Screen name="contato"
           options={{
            title: 'Contato',
            drawerIcon: ({color, size}) => (
           <AntDesign name="phone" size={24} color="black" />
            ),
          }} />

          <Drawer.Screen name="projetos"
           options={{
            title: 'Projetos',
            drawerIcon: ({color, size}) => (
           <AntDesign name="book" size={24} color="black" />
            ),
          }} />


          
        </Drawer>

        </GestureHandlerRootView>
    )
} 