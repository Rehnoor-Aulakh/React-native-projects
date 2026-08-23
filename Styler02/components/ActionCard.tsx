import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteUrl: string) {
        Linking.openURL(websiteUrl)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.card, styles.elevatedCard]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    What's new in Javascript 21 - ES12
                </Text>
            </View>
            <Image 
                source={{
                    uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                }}
                style={styles.cardImage}

            />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={2} style={{color: 'white'}}>
                    Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
                </Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                    <Text style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/rehnoor-aulakh/')}>
                    <Text style={styles.socialLinks}>Follow me</Text>
                </TouchableOpacity>
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
        color: 'white'
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 350,
        height: 340,
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 2,
    },
    elevatedCard: {
        backgroundColor: '#f87d11',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headerText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        color: 'black',
        fontSize: 16,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 6,
        fontWeight: '600',
        elevation: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})