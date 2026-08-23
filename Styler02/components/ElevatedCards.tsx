import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={[styles.headingText, {color: 'white'}]}>ElevatedCards</Text>
    
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cardElevated]}>
        <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text>Tap</Text>
        </View>
          <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
      padding: 8
    },
    card: {
      width: 100,
      height: 100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      borderRadius: 4,
      margin: 6,
    },
    cardElevated: {
      elevation: 5,
      backgroundColor: '#CAD5E2',
      shadowOffset: {
        height: 1,
        width: 1
      },
      shadowColor: '#333',
      shadowOpacity: 0.4,
      shadowRadius: 2
    }
})