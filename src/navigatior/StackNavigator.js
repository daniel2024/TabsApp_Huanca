import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import { Home, IconsView, Back, Name } from '../screens';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="IconsView" component={IconsView} />
            <Stack.Screen name="Back" component={Back} />
            <Stack.Screen name="Name" component={Name} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
