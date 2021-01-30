import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Activity from '../screens/Activity'
import Payment from '../screens/Payment'
import Chat from '../screens/Chat'
import Account from '../screens/Account'
import Gajian from '../screens/Gajian'
import Ticket from '../screens/Ticket'
import IonicIcons from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeTab = () => (
    <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({route}) => ({
            tabBarLabel: ({focused, color}) => {
                return <Text style={{color: focused ? '#1ccc64' : 'black', fontSize: 12}}>{route.name}</Text>
            }
        })}
    >
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({focused, color, size}) => {
                    return <IonicIcons size={24} color={focused ? "#1ccc64" : "#ababab"} name={focused ? "compass" : "compass-outline"} />
                }
            }} 
        />
        <Tab.Screen 
            name="Activity" 
            component={Activity} 
            options={{
                tabBarIcon: ({focused, color, size}) => {
                    return <IonicIcons size={24} color={focused ? "#1ccc64" : "#ababab"} name={focused ? "newspaper" : "newspaper-outline"} />
                }
            }} 
        />
        <Tab.Screen 
            name="Payment" 
            component={Payment} 
            options={{
                tabBarIcon: ({focused, color, size}) => {
                    return <IonicIcons size={24} color={focused ? "#1ccc64" : "#ababab"} name={focused ? "wallet" : "wallet-outline"} />
                }
            }} 
        />
        <Tab.Screen 
            name="Messages" 
            component={Chat}
            options={{
                tabBarIcon: ({focused, color, size}) => {
                    return <IonicIcons size={24} color={focused ? "#1ccc64" : "#ababab"} name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"} />
                }
            }}      
        />
        <Tab.Screen 
            name="Account" 
            component={Account} 
            options={{
                tabBarIcon: ({focused, color, size}) => {
                    return <IonicIcons size={24} color={focused ? "#1ccc64" : "#ababab"} name={focused ? "person-circle" : "person-circle-outline"} />
                }
            }}  
        />
    </Tab.Navigator>
)

export const Navigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeTab} options={{headerShown: false}} />
            <Stack.Screen name="Gajian" component={Gajian} options={{headerTitle: ""}} />
            <Stack.Screen name="Ticket" component={Ticket} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}