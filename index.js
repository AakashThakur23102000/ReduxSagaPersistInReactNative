/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import reducerStore from './src/redux/reducerStore';

// persistor
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const newAppJs = () => {
    let persister = persistStore(reducerStore)
    return (
        <Provider store={reducerStore}>
            <PersistGate persistor={persister}>
                <App />
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => newAppJs);
