import TrackPlayer, { Capability } from 'react-native-track-player';

export async function setupPlayer() {
    
    try {
        await TrackPlayer.setupPlayer();

        // Update player options
        await TrackPlayer.updateOptions({
            capabilities: [
                Capability.Play,   // Use Capability enum from TrackPlayer
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.Stop,
            ],
        });
    } catch (e) {
        console.error('Error setting up Track Player:', e);
    }
}

export async function addTrack() {
    await TrackPlayer.add({
        id: 'wnjl-stream',
        url: 'https://d4cbg8stml4t6.cloudfront.net/stream',
        title: 'WNJL Radio',
        artist: 'Smooth Jazz',
        artwork: 'https://www.wnjl.com/assets/wnjl-BioIWmS5.png', // Replace with your logo URL
    });
}