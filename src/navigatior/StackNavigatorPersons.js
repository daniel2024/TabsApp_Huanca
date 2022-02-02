import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Persons , ViewPerson} from '../screens';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown:false}}>
            <Stack.Screen name="Persons" component={Persons} />
            <Stack.Screen name="PersonaScreen" component={ViewPerson} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
