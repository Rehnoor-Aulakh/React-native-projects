import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
import type { JSX, PropsWithChildren } from 'react'

const options = { 
    enableVibrateFallback: true, ignoreAndroidSystemSettings: false, 
}

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
    symbol: string;
    currency: Currency;
    targetCurrency: Currency;
    setTargetCurrency: (currency: Currency) => void;
}>
export default function CurrencyButton({name, flag, symbol, currency, targetCurrency, setTargetCurrency}: CurrencyButtonProps): JSX.Element {
  return (
    <Pressable key={name} style={[styles.currencyBtn, {backgroundColor: targetCurrency.name === name ? '#4CAF50' : 'white'}]} onPress={() => {
      setTargetCurrency(currency);
      ReactNativeHapticFeedback.trigger('impactMedium', options);
    }} >
                <Text style={styles.flag}>{flag}</Text>
                <Text style={styles.symbol}>{symbol}</Text>
                <Text style={styles.name}>{name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    currencyBtn: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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