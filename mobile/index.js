/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Main from './src/pages/Main/Main';
import {name as appName} from './app.json';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Main);
