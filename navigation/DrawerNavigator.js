import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

const drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
        <drawer.Navigator>
            <drawer.Screen name='home' component={BottomTabNavigator}/>
            <drawer.Screen name='profile' component={Profile}/>
        </drawer.Navigator>
    );
}

export default DrawerNavigator;