import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// If someone reaches the AppStack, show them everything
import Home from '../screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AppStackParamList = {
  Home: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator
     screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
     }} 
    >
      <Stack.Screen name="Home" component={Home} options={{title: "Home"}}/>
    </Stack.Navigator>
  )
}
