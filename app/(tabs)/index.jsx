import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinScreen from './join';
import LoginScreen from './login';
import SurveyScreen from './survey';


const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Join" component={JoinScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Survey" component={SurveyScreen}/>
    </Stack.Navigator>
      
  )
}
export default index

