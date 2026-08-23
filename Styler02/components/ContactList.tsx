import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
        {contacts.map((contact) => (
            <View key={contact.uid} style={styles.userCard}>
                <Image source={{uri: contact.imageUrl}} style={styles.userImage} />
                <Text style={[styles.contactName,{color: 'white'}]}>{contact.name}</Text>
                <Text style={[styles.contactStatus,{color: 'white'}]}>{contact.status}</Text>   
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color:'white'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'space-between',
    },
    userCard: {
        marginVertical: 8,
        marginHorizontal: 2,
        width: '48%',
        alignItems: 'center',
    },
    contactName: {
        fontSize: 15,
        fontWeight: '600',
        paddingVertical: 4,

    },
    contactStatus: {
        
    },
    userImage: {
        height: 100,
        width: 100,
        borderRadius: 100/2
    }
})