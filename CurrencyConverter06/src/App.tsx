import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { JSX, useEffect, useState } from 'react';
import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';
import {Snackbar} from 'react-native-snackbar';

export default function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState<Currency>(
    currencyByRupee[0],
  );

  const buttonPressed = (targetValue: Currency) => {
    const amount = Number(inputValue);

    if (inputValue.trim() === '' || isNaN(amount) || amount <= 0) {
      Snackbar.show({
        text: 'Please enter a valid INR amount',
        backgroundColor: '#EA7773',
        textColor: '#fff',
      });
      return;
    }

    setTargetCurrency(targetValue);
  };

  useEffect(() => {
    // always recalculate the result when either the input value or the target currency changes
    const amount = Number(inputValue);
    if (!isNaN(amount) && amount > 0) {
      setResultValue(amount * targetCurrency.value);
    } else {
      setResultValue(0);
    }

  }, [inputValue, targetCurrency]);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.rupeeContainer}>
          <Text style={styles.rupee}>₹</Text>

          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="number-pad"
            maxLength={14}
            placeholder="Enter amount in INR"
            clearButtonMode="always"
            style={styles.inputAmountField}
          />
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {resultValue > 0
              ? `${resultValue.toFixed(2)} ${targetCurrency.symbol}`
              : ''}
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
              style={[
                styles.button,
                targetCurrency.name === item.name && styles.selected,
              ]}
              onPress={() => buttonPressed(item)}>
              <CurrencyButton {...item} />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },

  topContainer: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rupeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rupee: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 8,
  },

  inputAmountField: {
    width: 220,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    fontSize: 18,
  },

  resultContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },

  bottomContainer: {
    flex: 3,
  },

  button: {
    flex: 1,
    margin: 12,
    height: 70,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
  },

  selected: {
    backgroundColor: '#FFEAA7',
  },
});