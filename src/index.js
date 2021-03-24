import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import CartProvider from './providers/cart.provider';
import {Provider} from 'react-redux'; //Provider is the component which will pass the store down to child components
import {store, persistor} from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <CartProvider>
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </CartProvider>, document.getElementById('root'));