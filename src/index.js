import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { HashRouter } from 'react-router-dom'

import weatherReducer from './models/weather/reducers';
import timerReducer from './models/timer/reducers';

const rootReducer = combineReducers({
    weather: weatherReducer,
    timer: timerReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
