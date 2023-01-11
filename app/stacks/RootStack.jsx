import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import ResultsScreen from '../screens/ResultsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyStack from './SurveyStack';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen 
        name="Home" component={HomeScreen} 
         options={{headerShown: false}}
      />
      <Stack.Screen
        name="Survey"
        component={SurveyStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  )
}

export default RootStack
