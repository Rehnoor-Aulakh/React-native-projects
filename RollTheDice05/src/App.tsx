import { Image,  ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { JSX,  PropsWithChildren, useState } from 'react'
import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.image} source={imageUrl} />
    </View>
  )
}

export default function App() {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  }
  // current image is a number from 1 to 6
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  
  function handlePress() {
    ReactNativeHapticFeedback.trigger("impactMedium", options);
    const randomNumber = Math.floor(Math.random() * 6) + 1
    switch (randomNumber) {
      case 1: 
        setDiceImage(DiceOne)
        break
      case 2: 
        setDiceImage(DiceTwo)
        break
      case 3: 
        setDiceImage(DiceThree)
        break
      case 4: 
        setDiceImage(DiceFour)
        break
      case 5: 
        setDiceImage(DiceFive)
        break
      case 6: 
        setDiceImage(DiceSix)
        break
      default: 
        setDiceImage(DiceOne)
        break
    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.btnText}>Roll Dice</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#854ffa',
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 25,
    borderRadius: 25,
    width: 150,
    alignItems: 'center',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  btnText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 200,
    height: 200
  }
})