import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
import type { JSX, PropsWithChildren } from 'react'

const options = { 
    enableVibrateFallback: true, ignoreAndroidSystemSettings: false, 
}

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>
export default function CurrencyButton(props: CurrencyButtonProps): JSX.Element {
  return (
    <View style={styles.buttonContainer}>
        <Text style={styles.flag}>{props.flag}</Text>
        <Text style={styles.country}>{props.name}</Text>
    </View>
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
    },
    country: {

    },
    buttonContainer: {
    }
})