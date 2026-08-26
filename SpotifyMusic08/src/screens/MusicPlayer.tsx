import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import  TrackPlayer, { Track, useActiveTrack } from 'react-native-track-player';

import { playListData } from '../constants';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const { width } = Dimensions.get('window');

export default function MusicPlayer() {
    const track = useActiveTrack();
    const flatListRef = useRef<FlatList<Track>>(null);

    // the buttons scroll the flatList

    useEffect(() => {
        if(!track) return;

        const index = playListData.findIndex(song => song.id === track.id);
        flatListRef.current?.scrollToIndex({index, animated: true});
    }, [track]);

    const renderArtWork = () => {
        return (
            <View
            style={styles.listArtWrapper}
            >
                <View style={styles.albumContainer}>
                     {track?.artwork && (
                        <Image
                            style={styles.albumArtImg}
                            source={{uri:track?.artwork?.toString()}}
                        />
                     )}
                </View>
            </View>
        );
    };

    const handleScroll = async (event: any) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        await TrackPlayer.skip(index);
    };

    return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
        onMomentumScrollEnd={handleScroll}
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
