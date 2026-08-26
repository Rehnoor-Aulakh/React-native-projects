import { Pressable, StyleSheet,  View } from 'react-native';
import React from 'react';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import { playbackService } from '../../musicPlayerServices';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ControlCenter() {
    const playbackState = usePlaybackState();

    // next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };
    // previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    // attaches to a pressable button and toggles between play and pause
    const togglePlayback = async (playback?: State) => {
        if(!playback) {
            return;
        }
        const currentTrack = await TrackPlayer.getActiveTrack();
        if(currentTrack !== null) {
            if(playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };
  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon
            name="skip-previous"
            size={50}
            style={styles.icon}
            />
        </Pressable>
        <Pressable onPress={() => togglePlayback(playbackState.state)}>
            <Icon 
            name={playbackState.state === State.Playing ? "pause" : "play-arrow"}
            size={75} 
            style={[styles.icon, styles.playButton]}
            />
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon 
            name="skip-next" 
            size={50} 
            style={styles.icon}
            />
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: '#ffffff',
    },
    playButton: {
        marginHorizontal: 24,
    },
});
