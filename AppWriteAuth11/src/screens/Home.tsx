import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

// React Native Elements
import { FAB } from '@rneui/themed'

import { Snackbar } from 'react-native-snackbar'

// Context API
import { AppwriteContext } from '../appwrite/AppwriteContext'
import { SafeAreaView } from 'react-native-safe-area-context'

import ECommerce from "../../assets/ecommerce.jpg";

type UserObj = {
  name: string;
  email: string;
}


export default function Home() {
  const { width } = useWindowDimensions();
  const imageWidth = Math.min(width - 48, 360);
  const imageHeight = Math.min(imageWidth * 0.7, 250);
  const [userData, setUserData] = useState<UserObj>();
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);
  const handleLogout = async () => {
    await appwrite.logout()
      .then((response) => {
        setIsLoggedIn(false);
        Snackbar.show({
          text: 'Logged out successfully',
          duration: Snackbar.LENGTH_SHORT,
        });
      })
  }

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then(response => {
        if(response) {
          const user: UserObj = {
            name: response.name,
            email: response.email
          }
          setUserData(user);
        }
      })
  }, [appwrite]);

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
        <View style={styles.welcomeContainer}>
          <Image
            source={ECommerce}            
            resizeMode="contain"
            style={[styles.image, { width: imageWidth, height: imageHeight }]}
          />
          <Text style={styles.message}>
            Delivery in 15 Minutes
          </Text>
          {userData && (
            <View style={styles.userContainer}>
              <Text style={styles.userDetails}>Name: {userData.name}</Text>
              <Text style={styles.userDetails}>Email: {userData.email}</Text>
            </View>
          )}
        </View>
        </ScrollView>
        <FAB
          placement="right"
          color="#f02e65"
          size="large"
          title="Logout"
          icon={{name: 'logout', color: '#FFFFFF'}}
          onPress={handleLogout}
        />
      </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D32',
  },
  content: {
    flexGrow: 1,
    paddingBottom: 96,
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  image: {
    maxWidth: '100%',
    marginBottom: 16,
  },
  message: {
    fontSize: 26,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  userContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  userDetails: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
