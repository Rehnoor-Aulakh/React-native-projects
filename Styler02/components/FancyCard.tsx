import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElevated]}>
            <Image 
                source={{
                    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                }}
                style= {styles.cardImage}
                
            />
            {/* Card body */}
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>Pink City, Jaipur, Rajasthan</Text>
                <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                red and pink sandstone, it is on the edge of the City Palace.</Text>
                <Text style={styles.cardFooter}>12 Minutes Away</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    }, 
    card: {
        width: 320,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 2
    }, 
    cardElevated: {
        backgroundColor: 'white',
        elevation: 5,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        paddingHorizontal: 12,
        flex: 1,
        flexGrow: 1,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6
    }, 
    cardLabel: {
        fontSize: 16,
        color: '#555',
        marginBottom: 4
    }, 
    cardDescription: {
        fontSize: 13,
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6,
        color: '#777'
    }, 
    cardFooter: {
        fontSize: 12,
        alignSelf: 'flex-end',
        color: 'green'
    }
})