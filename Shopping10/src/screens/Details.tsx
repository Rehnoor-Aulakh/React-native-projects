import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type DetailsProp = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({route}: DetailsProp) {
  const {product} = route.params;
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{uri: product.imageUrl}} style={styles.image}/>
        <View>
          <Text style={styles.productName}>{product.name}</Text>
          <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{product.rating} ★</Text>
            </View>
            <Text style={styles.ratingCount}>{product.ratingCount.toLocaleString()}</Text>
          </View>

          <View style={[styles.rowContainer, styles.priceContainer]}>
             <Text style={styles.originalPrice}>
                    ₹{product.originalPrice.toLocaleString()}
                </Text>
                <Text style={styles.discountPrice}>
                    ₹{product.discountPrice.toLocaleString()}
                </Text>
                <Text style={styles.offerPercentage}>
                    %{product.offerPercentage} off
                </Text>
          </View>
          {product.tags.map((tag,index) => (
            <View key={index} style={styles.badge}>
                <Text style={styles.tagBadge}>{tag}</Text>
              </View>
          ))}
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  image: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  productName: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  ratingContainer: {
    marginVertical: 12
  },
  rating: {
    marginRight: 4,
    backgroundColor: '#008c00',
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
  }, 
  ratingText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14
  },
  ratingCount: {
    fontSize: 14,
    color: '#878787',
  },
  priceContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: '#deffeb'
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,

    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'line-through'
  },
  discountPrice: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
    marginRight: 8,
  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4bb550',

    marginRight: 8,
  },
  badge: {
    margin: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tagBadge: {
    color: 'rgba(0, 0, 0, 0.8)',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 2,
    paddingHorizontal: 4,

  }

})