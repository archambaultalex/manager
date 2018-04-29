import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyDVoYWWMFHsK7GE4FAN3YjLbKeu_uXMCHU',
            authDomain: 'manager-1e55f.firebaseapp.com',
            databaseURL: 'https://manager-1e55f.firebaseio.com',
            projectId: 'manager-1e55f',
            storageBucket: 'manager-1e55f.appspot.com',
            messagingSenderId: '391958371721'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
