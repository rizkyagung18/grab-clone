import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import { StatusBar, Text, View } from 'react-native'
import { Navigator } from './navigator'

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    )
}

export default MainNavigator