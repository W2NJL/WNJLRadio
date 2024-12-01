import React, { useEffect } from 'react';
import { NativeModules, View, Button, StyleSheet } from 'react-native';
import TrackPlayer, { State, useTrackPlayerEvents, Event } from 'react-native-track-player';
import { setupPlayer, addTrack } from './player';
import CurrentSong from './CurrentSong';

const { CarPlayModule } = NativeModules;

const App = () => {
    useEffect(() => {
        const initPlayer = async () => {
            await setupPlayer();
            await addTrack();
        };

        initPlayer();

        // Initialize CarPlay
        CarPlayModule.setupCarPlay();

        return () => {
            TrackPlayer.reset();
        };
    }, []);

    const playPause = async () => {
        const state = await TrackPlayer.getState();
        if (state === State.Playing) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    return (
        <View style={styles.container}>
          <CurrentSong />
            <Button title="Play/Pause" onPress={playPause} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
});

export default App;