import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import  { Track, useActiveTrack } from 'react-native-track-player';

import { playListData } from '../constants';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const { width } = Dimensions.get('window');

export default function MusicPlayer() {
    const track = useActiveTrack();

    const renderArtWork = ({item} : {item: Track}) => {
        return (
            <View
            style={styles.listArtWrapper}
            >
                <View style={styles.albumContainer}>
                     {item.artwork && (
                        <Image
                            style={styles.albumArtImg}
                            source={{uri:item.artwork?.toString()}}
                        />
                     )}
                </View>
            </View>
        );
    };

    return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
      />
      <SongInfo track={track}/>
      <SongSlider />
      <ControlCenter />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
    },
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumContainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        height: '100%',
        borderRadius: 10,
    },
});
