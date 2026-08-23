import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={[styles.headingText, {color: 'white'}]}>FlatCards</Text>
        <View style={styles.container}>
        
            <View style={[styles.card, styles.cardRed]}>
                <Text style={{color: 'white'}}>Red</Text>
            </View>
            <View style={[styles.card, styles.cardGreen]}>
                <Text style={{color: 'white'}}>Green</Text>
            </View>
            <View style={[styles.card, styles.cardBlue]}>
                <Text style={{color: 'white'}}>Blue</Text>
            </View>
            <View style={[styles.card, styles.cardYellow]}>
                <Text style={{color: 'black'}}>Yellow</Text>
            </View>
        </View>
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
      flex: 1,
      flexDirection: 'row',
      gap: 15,
      padding: 10
    },
    card: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      fontWeight: 'bold',
      borderRadius: 4
    },
    cardRed: {
      backgroundColor: 'red',
    },
    cardGreen: {
      backgroundColor: 'green',
    },
    cardBlue: {
      backgroundColor: 'blue',
    },
    cardYellow: {
      backgroundColor: 'yellow',
    }
})