import React from 'react'
import { createStackNavigator } from '@react-navigation/stack' 
import AllScreen from '../screens/AllScreen';
import SingleTodoScreen from '../screens/SingleTodoScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: '#0068ff',
                },
                headerTitleAlign:'center',
                title: 'ToDo App',
                headerTintColor:'white'
            }}
        >
            <Stack.Screen
                name="All"
                component={AllScreen}
            />
            <Stack.Screen
                name="SingleTodo"
                component={SingleTodoScreen}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;