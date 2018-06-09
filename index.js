// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('albums', () => App);
// * Old Code * //

// * New Code 
// Import a libary to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
// Create component
const App = () => (    
    <View>
        <Header headerText={'albums'}/>
        <AlbumList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
