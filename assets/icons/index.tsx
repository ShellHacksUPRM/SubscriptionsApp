import ReactNative from 'react-native';

import AppleMusic from './applemusic.png';
import Audible from './audible.png';
import Costco from './costco.png';
import Crunchyroll from './crunchyroll.png';
import Dashpass from './dashpass.png';
import DisneyPlus from './disneyplus.png';
import HboMax from './hbomax.jpeg';
import Hulu from './hulu.jpeg';
import Netflix from './netflix.png';
import Peacock from './peacock.png';
import PrimeVideo from './primevideo.png';
import SamsClub from './samsclub.png';
import Spotify from './spotify.png';
import WalmartPlus from './walmartplus.png';
import YouTubePremium from './youtubepremium.png';

const icons = new Map<string, ReactNative.Image>([
	["Apple Music", AppleMusic],
	["Audible", Audible],
	["Costco", Costco],
	["Crunchyroll", Crunchyroll],
	["Dashpass", Dashpass],
	["Disney+", DisneyPlus],
	["HBO Max", HboMax],
	["Hulu", Hulu],
	["Netflix", Netflix],
	["Peacock", Peacock],
	["Prime Video", PrimeVideo],
	["Sam's Club", SamsClub],
	["Spotify", Spotify],
	["Walmart+", WalmartPlus],
	["YouTube Premium", YouTubePremium],
])

export default icons;