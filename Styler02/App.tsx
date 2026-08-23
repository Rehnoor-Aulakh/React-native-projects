import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, ...styles.container }}>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  }
})
