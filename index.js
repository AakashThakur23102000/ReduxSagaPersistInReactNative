/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import reducerStore from './src/redux/reducerStore';

const newAppJs = ()=>{
    return(
        <Provider store={reducerStore}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => newAppJs);
