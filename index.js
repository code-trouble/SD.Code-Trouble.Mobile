/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App from './src/App'

if (__DEV__) {
    require("./ReactotronConfig");
  }

AppRegistry.registerComponent(appName, () => App)
