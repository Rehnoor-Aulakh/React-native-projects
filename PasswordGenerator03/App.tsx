import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView } from 'react-native-safe-area-context';
// Form validation
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .typeError("Please enter a valid number")
  .min(4, "Password must be at least 4 characters")
  .max(16, "Password must be at most 16 characters")
  .required("Password length is required"),
})
export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated]= useState(false);
  
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charactersList = '';
    if (lowerCase) {
      charactersList += 'abcdefghijklmnopqrstuvwxyz';
    } 
    if (upperCase) {
      charactersList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } 
    if (numbers) {
      charactersList += '0123456789';
    } 
    if (symbols) {
      charactersList += '!@#$%^&*_+~`|:;?,./-=';
    }
    const passwordResult = createPassword(charactersList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  }
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  }
  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }
  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
       initialValues={{ passwordLength: ''}}
       validationSchema={PasswordSchema}
       onSubmit={(values) => {
          console.log(values);
          generatePasswordString(+(values.passwordLength)) 
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         isSubmitting,
         handleReset,
         handleBlur
         /* and other goodies */
       }) => (
         <>
          <View style={styles.inputWrapper}>
            <View style={styles.inputColumn}>
              <View style={styles.labelContainer}>

              <Text style={styles.formLabel}>Password Length</Text>
              {touched.passwordLength && errors.passwordLength && (
                <Text style={styles.errorMessage}>{errors.passwordLength}</Text>
              )}
              </View>
              <TextInput 
                style={styles.inputStyle}
                value={values.passwordLength}
                onChangeText={handleChange('passwordLength')}
                onBlur={handleBlur('passwordLength')}
                placeholder='Eg. 8'
                keyboardType='numeric'
              />
            </View>
          </View>
          <View style={styles.inputColumn}>
            <Text style={styles.formLabel}>Include Lowercase</Text>
            <View style={styles.checkbox}>

            <BouncyCheckbox 
               isChecked={lowerCase}
               onPress={() => setLowerCase(!lowerCase)}
               fillColor='#29AB87'
               />
               </View>
               
          </View>
          <View style={styles.inputColumn}>
            <Text style={styles.formLabel}>Include Uppercase</Text>
            <View style={styles.checkbox}>

            <BouncyCheckbox 
               isChecked={upperCase}
               onPress={() => setUpperCase(!upperCase)}
               fillColor='#29AB87'
               />
               </View>
               
          </View>
          <View style={styles.inputColumn}>
            <Text style={styles.formLabel}>Include Numbers</Text>
            <View style={styles.checkbox}>

            <BouncyCheckbox 
               isChecked={numbers}
               onPress={() => setNumbers(!numbers)}
               fillColor='#29AB87'
               />
               </View>
               
          </View>
          <View style={styles.inputColumn}>
            <Text style={styles.formLabel}>Include Symbols</Text>
            <View style={styles.checkbox}>

            <BouncyCheckbox 
               isChecked={symbols}
               onPress={() => setSymbols(!symbols)}
               fillColor='#29AB87'
               />
               </View>
               
          </View>

          <View style={styles.formActions}>
            <TouchableOpacity 
              style={styles.formButton}
              disabled={ !isValid }
              onPress={() => handleSubmit()}
              >
              <Text style={{color: !isValid ? 'red' : 'white'}}>
                Generate Password
              </Text>
              </TouchableOpacity>
            <TouchableOpacity 
            style={styles.formButtonReset}
            onPress={() => {
              handleReset();
              resetPassword();
            }}
            >
              <Text style={{color: 'white'}}>
                Reset
              </Text>
            </TouchableOpacity>
          </View>
         </>
       )}
     </Formik>
        </View>
        {isPassGenerated && (
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Long Press to copy</Text>
            <Text style={styles.password} selectable>
              {password}
            </Text>
          </View>
        )}
      </SafeAreaView>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 20

  },
  formContainer: {
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'white'
  },
  inputWrapper: {
    
  },
  inputColumn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    gap: 16
  },
  inputStyle: {
    color: 'white',
    backgroundColor: '#585858',
    width: 120,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  formActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
  formButton: {
    backgroundColor: '#5DA3FA',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 15,
    marginHorizontal: 10,
    fontWeight: '600'
  },
  formButtonReset: {
    backgroundColor: '#82878f',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 15,
    marginHorizontal: 10,
    fontWeight: '600'
  },
  formLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  checkbox: {
    marginLeft: 'auto'
  },
  password: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12
  },
  labelContainer: {
    flex: 1,
  },
  card: {
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  cardElevated: {
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2
  }
})