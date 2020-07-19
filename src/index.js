import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import store from './Redax/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

