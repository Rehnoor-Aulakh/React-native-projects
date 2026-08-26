import { ActivityIndicator, SafeAreaView, StyleSheet,  View } from 'react-native';
import React, {useState, useEffect} from 'react';
import {setupPlayer, addTrack} from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();
    if(isSetup) {
      // adds playlist data to the queue
      await addTrack();
    }
    setIsPlayerReady(isSetup);
  }

  // setup on the initial render
  useEffect(() => {
    setup();
  }, []);

  if(!isPlayerReady) {
     return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
     );
  }

  return (
    <View style={styles.container}>
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
