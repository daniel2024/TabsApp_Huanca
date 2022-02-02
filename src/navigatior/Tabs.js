import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavigator from './StackNavigator';
import StackNavigatorPersons from './StackNavigatorPersons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {

                    let iconName = '';
                    switch (route.name) {
                        case 'StackNavigatorHome':
                            iconName = 'home'
                            break;

                        case 'Tab2Screen':
                            iconName = 'body'
                            break;

                        case 'StackNavigator':
                            iconName = 'bookmarks-outline'
                            break;
                    }

                    return <Icon name={iconName} size={20} color={color} />
                }
            })}
        >
            <Tab.Screen name="StackNavigatorHome" options={{ title: 'Home' }} component={StackNavigator} />
            <Tab.Screen name="Tab2Screen" options={{ title: 'Persons' }} component={StackNavigatorPersons} />
        </Tab.Navigator>
    );
}

export default Tabs;