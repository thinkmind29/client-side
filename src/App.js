import React from 'react';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Routes from './Routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

const App = () => {

    return (
    
    <Provider store={store}>
        <Routes />
    </Provider>

    )
    
}

export default App;
