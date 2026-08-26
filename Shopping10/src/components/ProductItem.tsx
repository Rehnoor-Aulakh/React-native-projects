import { Image, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

type ProductProps = PropsWithChildren<{
    product: Product;
}>;

export default function ProductItem({product}: ProductProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <View>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{product.rating} ★</Text>
            </View>
            <Text style={styles.ratingCount}>{product.ratingCount.toLocaleString()}</Text>
        </View>

        <View style={[styles.rowContainer, styles.priceContainer]}>
          <Text style={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</Text>
          <Text style={styles.discountPrice}>₹{product.discountPrice.toLocaleString()}</Text>
          <Text style={styles.offerPercentage}>%{product.offerPercentage} off</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    rowContainer: {
      flexDirection: 'row',
    },
    ratingContainer: {
      marginBottom: 8,
    },
    ratingText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '600',
    },
    ratingCount: {
      color: '#878787'
    },
    image: {
        height: 150,
        width: 90,
        borderRadius: 10,
        resizeMode: 'contain',
        marginRight: 12,
    },
    rating: {
      backgroundColor: '#008c00',
      borderRadius: 4,
      paddingHorizontal: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 4,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        overflow: 'scroll'
    },
    originalPrice: {
      fontSize: 18,
      marginRight: 4,
      fontWeight: '600',
      color: 'rgba(0, 0, 0, 0.5)',
      textDecorationLine: 'line-through',
    },
    priceContainer: {
      marginBottom: 12,
    },
    discountPrice: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000000',
      marginRight: 4,
    },
    offerPercentage: {
      fontSize: 17,
      fontWeight: '600',
      color: '#4bb550',
    }
})
