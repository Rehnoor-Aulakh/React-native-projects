import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { JSX, useState } from 'react'
import { currencyByRupee } from './constants'
import CurrencyButton from './components/CurrencyButton'

export default function App():JSX.Element {
  const [inputValue, setInputValue] = useState<number>(0)
  const [resultValue, setResultValue] = useState<number>(0)
  const [targetCurrency, setTargetCurrency] = useState<Currency>(currencyByRupee[0])
  return (
    <View style={styles.container}>
      {/* Text Field to enter INR Value */}
      <View style={styles.textFieldContainer}>
        <Text style={styles.INR}>INR  ₹</Text>
        {/* Text Input for INR Value */}
        <TextInput 
          keyboardType='numeric'
          value={inputValue.toString()}
          style={styles.textInput}
          onChangeText={(text) => setInputValue(Number(text))}
        />

      </View>
      <View style={styles.currencyBtnContainer}>
        {/* Render Currency Buttons */}
        {currencyByRupee.map((currency) => (
          <CurrencyButton key={currency.name}
            name={currency.name}
            flag={currency.flag}
            symbol={currency.symbol}
            currency={currency}
            targetCurrency={targetCurrency}
            setTargetCurrency={setTargetCurrency}
           />
        ))}
      </View>
      <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{(inputValue * targetCurrency.value).toFixed(2)} {targetCurrency.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',

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
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 100,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20
  },
  resultText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  }
})