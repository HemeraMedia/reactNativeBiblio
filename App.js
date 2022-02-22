import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AccueilScreen from "./screens/Accueil";
import FilmsScreen from "./screens/Films";
import MusiquesScreen from "./screens/Musiques";
import AproposScreen from "./screens/Apropos";

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>

      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Musiques') {
              iconName = focused ? 'musical-notes' : 'musical-notes-outline';
            }
           else if (route.name === 'Films') {
            iconName = focused ? 'film' : 'film-outline';
          }
           else if (route.name === 'A propos') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }
          else if (route.name === 'Jeux vidéo') {
            iconName = focused ? 'ios-game-controller' : 'ios-game-controller-outline';
          };
        
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>
      
        <Tab.Screen name="Accueil" component={AccueilScreen} />
        <Tab.Screen name="Musiques" component={MusiquesScreen} />
        <Tab.Screen name="Films" component={FilmsScreen} />
        <Tab.Screen name="A propos" component={AproposScreen} />
      
      </Tab.Navigator>
    
    </NavigationContainer>
  )
}