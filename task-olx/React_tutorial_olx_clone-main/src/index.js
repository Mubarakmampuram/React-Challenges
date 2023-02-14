import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import {app} from './firebase/config';
import Context from './store/FirebaseContext';

ReactDOM.render(
    <FirebaseContext.Provider value ={app}>
        <Context>

        
        <App />
        </Context>

    </FirebaseContext.Provider>

, document.getElementById('root'));
