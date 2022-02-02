import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Tabs from './src/navigatior/Tabs';



const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
