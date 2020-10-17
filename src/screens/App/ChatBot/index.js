import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatBot from './ChatBot';
const Stack = createStackNavigator();

export default function ChatBotStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="ChatBot" component={ChatBot} />
    </Stack.Navigator>
  );
}
