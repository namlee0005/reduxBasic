import React, { Component, useEffect, useRef } from 'react';
import { store } from './src/store';
import RootScreen from './src/RootScreen';
import { Provider } from 'react-redux';
// import * as NavigationService from './src/navigation/navigateService';

const App = () => {
    console.disableYellowBox = true;
    
    return (
        <Provider store={store}>
            <RootScreen />
        </Provider>
    )
}

export default App;
