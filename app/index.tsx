import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import JoinScreen from './join';
import LoginScreen from './login';
import SurveyScreen from './survey';
import ListingScreen from './listings'
import Property from '../components/models/property';
import SignUpScreen from './signUp';
import MenuScreen from './menu';



const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Join" component={JoinScreen} />
      <Stack.Screen name="Sign-Up" component={SignUpScreen}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Survey" component={SurveyScreen}/>
      <Stack.Screen name="Listings" component={ListingScreen} options={{ title: 'Listing Screen' }}/>
      <Stack.Screen name="Menu" component={MenuScreen}/>
    </Stack.Navigator>
      
  )
}
export default index;

