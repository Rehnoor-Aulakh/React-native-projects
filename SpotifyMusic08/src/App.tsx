import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import {setupPlayer, addTrack} from '../musicPlayerServices';
import ControlCenter from './components/ControlCenter';

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();
    if(isSetup) {
      await addTrack();
    }
    setIsPlayerReady(isSetup);
  }

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
    <View>
      <ControlCenter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});