import { StyleSheet,  Text,  View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import { useProgress } from 'react-native-track-player';
export default function SongSlider() {
    // Get the current position and duration of the song
    const { duration, position} = useProgress();

  return (
    <View style={styles.container}>
      <Slider
        style={styles.sliderContainer}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        />
        <View style={styles.timeContainer}>
            <Text style={styles.time}>
                {new Date(position * 1000).toISOString().substr(14, 5)}
            </Text>
            <Text style={styles.time}>
                {new Date((duration - position) * 1000).toISOString().substr(14, 5)}
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderContainer: {
        width: 320,
        height: 40,
        marginTop: 25,
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    timeContainer: {
        width: 340,
        marginHorizontal: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -10,
    },
    time: {
        fontSize: 12,
        color: '#FFFFFF',
    },
});
