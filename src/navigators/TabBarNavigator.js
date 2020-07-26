import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AllScreen from '../screens/AllScreen'
import ActiveScreen from '../screens/ActiveScreen'
import TabBarIcon from '../components/TabBarIcon'
import StackNavigator from '../navigators/StackNavigator'
import CompleteScreen from '../screens/CompleteScreen'

const Tab = createBottomTabNavigator();

const TabBarNavigator = () => {
    return(
        <Tab.Navigator 
            initialRouteName="All"
            tabBarOptions={{
                activeTintColor:'white',
                inactiveTintColor:'black',
                tabStyle:{
                    backgroundColor:'#0068ff'
                }
            }}
        >
            <Tab.Screen
                name="Complete"
                component={CompleteScreen}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <TabBarIcon name="md-done-all" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="All"
                component={StackNavigator}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <TabBarIcon name="md-add-circle-outline" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Active"
                component={ActiveScreen}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <TabBarIcon name="md-options" size={size} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabBarNavigator;