import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ProductItem from '../components/ProductItem';
import { PRODUCTS_LIST } from '../data/constants';
import Separator from '../components/Separator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={PRODUCTS_LIST}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <Pressable onPress={()=> navigation.navigate("Details", {product: item})}>
              <ProductItem product={item} />
              <Separator />
            </Pressable>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12, 
  }
})