import ReactNative from 'react-native';

import AppleMusic from './applemusic.png';
import DisneyPlus from './disneyplus.png';
import Netflix from './netflix.png';
import Spotify from './spotify.png';

const icons = new Map<string, ReactNative.Image>([
	["applemusic", AppleMusic],
	["disneyplus", DisneyPlus],
	["netflix", Netflix],
	["spotify", Spotify],
])

export default icons;