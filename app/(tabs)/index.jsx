import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinScreen from './join';
import LoginScreen from './login';


const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Join" component={JoinScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
      
  )
}
export default index

