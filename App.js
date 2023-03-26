import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';


import HomeScreen from "./screens/HomeScreen"
import GameScreen from "./screens/GameScreen"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        animated={true}
        backgroundColor="#6B7280"
        barStyle={'default'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen key="Home" name='Home' component={HomeScreen} />
        <Stack.Screen key="Game" name='Game' >{(props) => <GameScreen {...props}/>}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;