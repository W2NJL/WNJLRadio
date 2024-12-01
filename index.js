import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './App';
import playbackService from './playbackService'; // Ensure this matches the file name you created
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Register the playback service
TrackPlayer.registerPlaybackService(() => playbackService);