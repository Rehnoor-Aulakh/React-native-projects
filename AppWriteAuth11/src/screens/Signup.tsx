import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'

// React Native Elements
import { FAB } from '@rneui/themed'

import { Snackbar } from 'react-native-snackbar'

// Context API
import { AppwriteContext } from '../appwrite/AppwriteContext'
import { SafeAreaView } from 'react-native-safe-area-context'

// Navigation
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../routes/AuthStack'

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'Signup'>;
const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);
const [error, setError] = useState<string>('');

export default function Signup() {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  )
}

const styles = StyleSheet.create({})