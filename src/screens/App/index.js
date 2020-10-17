import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import ChatBot from './ChatBot';
import Menu from './Menu';

const Tab = createMaterialTopTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#ffffff' }}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
      }}
    >

      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="ChatBot" 
        component={ChatBot} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Menu" 
        component={Menu} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}