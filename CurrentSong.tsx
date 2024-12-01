import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const CURRENT_SONG_URL =
    'https://m1nt0kils7.execute-api.us-east-2.amazonaws.com/prod/currentsong';

const CurrentSong = () => {
    const [song, setSong] = useState<{ artist: string; title: string }>({
        artist: '',
        title: '',
    });

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const response = await axios.get(CURRENT_SONG_URL);

                // Split the response text into artist and title
                const [artist, title] = response.data.split(' - ');
                setSong({ artist: artist || 'Unknown Artist', title: title || 'Unknown Title' });
            } catch (e) {
                console.error('Error fetching current song:', e);
            }
        };

        fetchSong();

        const interval = setInterval(fetchSong, 30000); // Update every 30 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
    artist: { fontSize: 18, color: '#666' },
});

export default CurrentSong;