import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './constants'
import CurrencyButton from './components/CurrencyButton'
export default function App() {
  const [fromValue, setFromValue] = useState<Number>(Number(0))
  return (
    <View style={styles.container}>
      {/* Text Field to enter INR Value */}
      <View style={styles.textFieldContainer}>
        <Text style={styles.INR}>INR  ₹</Text>
        {/* Text Input for INR Value */}
        <TextInput 
          keyboardType='numeric'
          value={fromValue.toString()}
          style={styles.textInput}
          onChangeText={(text) => setFromValue(Number(text))}
        />

      </View>
      <View style={styles.currencyBtnContainer}>
        {/* Render Currency Buttons */}
        {currencyByRupee.map((currency) => (
          <CurrencyButton currency={currency} key={currency.name}/>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  textFieldContainer: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  INR: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  textInput: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 13,
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 10,

  },
  currencyBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
  },
})