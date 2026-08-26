import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Screens
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product};
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: "Home"}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: "Details"}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})