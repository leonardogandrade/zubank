import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import Routes from './routes';

export default App => {
  return (
    <>
    <StatusBar 
      barStyle='light-content'
      backgroundColor ='#8B10AE'  
    />
    <Routes/>
    </>
  );
};

