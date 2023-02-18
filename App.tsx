import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameModeButton from './components/GameModeButton'

import Logo from "./assets/cpslogo.png"
import CtrlAltCreative from "./assets/ctrlalt-creative-black.png"

interface Game {
  name: string,
  secondsCounter: Int16Array;
  audioPath: string;
  maxVictoryPoints: Int16Array;
  maxLosePoints: Int16Array;
  hasPenalization: boolean;
  penalizationTime?: Int16Array;
}

let familyMode = {
  name: "FAMILY",
  secondsCounter: 40,
  audioPath: "",
  maxVictoryPoints: 5,
  maxLosePoints: 6,
  hasPenalization: false,
}

let normalMode = {
  name: "Normal",
  secondsCounter: 30,
  audioPath: "",
  maxVictoryPoints: 5,
  maxLosePoints: 4,
  hasPenalization: false
}

let avanzadoMode = {
  name: "AVANZADO",
  secondsCounter: 25,
  audioPath: "",
  maxVictoryPoints: 5,
  maxLosePoints: 4,
  hasPenalization: true,
  penalizationTime: 5,
}

let proMode = {
  name: "PRO",
  secondsCounter: 20,
  audioPath: "",
  maxVictoryPoints: 5,
  maxLosePoints: 3,
  hasPenalization: true,
  penalizationTime: 5,
}

const gameModes = [familyMode, normalMode, avanzadoMode, proMode]

function HomeScreen() {
  return (
    <View className="flex-1 items-center bg-gray-500">
      <Image className="max-w-xs max-h-72 -mb-2 md:max-h-96 md:mb-4" source={Logo} resizeMode="contain"/>
      <View className="flex-1 items-center">
        {gameModes.map(mode => <GameModeButton gameMode={mode}/>)}    
      </View>
      <Image className="max-h-16 mb-8 md:max-h-32 md:mb-10" source={CtrlAltCreative} resizeMode="contain"/>
      <StatusBar style="auto"/>
    </View>
  );
}

function GameScreen() {
  return (
    <View className="flex-1 items-center bg-gray-500">
      <Image className="max-w-xs max-h-72 -mb-2 md:max-h-96 md:mb-4" source={Logo} resizeMode="contain"/>
      <StatusBar style="auto"/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;