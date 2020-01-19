import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main/';

export default Routes=>{
    
    const routeStack = createSwitchNavigator({
        Main : Main
    })

    const AppContainer = createAppContainer(routeStack);
    
    return(
        <AppContainer/>
    )
}