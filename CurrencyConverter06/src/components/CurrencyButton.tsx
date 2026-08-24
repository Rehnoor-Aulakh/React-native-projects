import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CurrencyButton({currency}: {currency: Currency}) {
  return (
    <View key={currency.name} style={styles.currencyBtn}>
                <Text style={styles.flag}>{currency.flag}</Text>
                <Text style={styles.symbol}>{currency.symbol}</Text>
                <Text style={styles.name}>{currency.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    currencyBtn: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width: 80,
        height: 110,
    },
    flag: {
        fontSize: 30,
        textAlign: 'center',
    },
    symbol: {
        fontSize: 20,
        textAlign: 'center',
    },
    name: {
        fontSize: 12,
        textAlign: 'center',
    }
})