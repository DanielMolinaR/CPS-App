import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameModeButton from './components/GameModeButton'
import PointsContainer from './components/PointsContainer'

import Logo from "./assets/cpslogo.png"
import CtrlAltCreative from "./assets/ctrlalt-creative-black.png"

var familyMode = {
  name: "FAMILY",
  secondsCounter: 40,
  audioPath: "",
  maxVictoryPoints: 5,
  maxLosePoints: 6,
  hasPenalization: false,
}

var normalMode = {
  name: "Normal",
  secondsCounter: 30,
  audioPath: "",
  maxVictoryPoints: 5,
  maxLosePoints: 4,
  hasPenalization: false
}

var avanzadoMode = {
  name: "AVANZADO",
  secondsCounter: 25,
  audioPath: "",
  maxVictoryPoints: 5,
  maxLosePoints: 4,
  hasPenalization: true,
  penalizationTime: 5,
}

var proMode = {
  name: "PRO",
  secondsCounter: 20,
  audioPath: "",
  maxVictoryPoints: 5,
  maxLosePoints: 3,
  hasPenalization: true,
  penalizationTime: 5,
}

const gameModes = [familyMode, normalMode, avanzadoMode, proMode]

function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center bg-gray-500">
      <Image className="max-w-xs max-h-72 -mb-2 md:max-h-96 md:mb-4" source={Logo} resizeMode="contain"/>
      <View className="flex-1 items-center">
        {gameModes.map((mode, index) => <GameModeButton k={index} navigation={navigation} gameMode={mode}/>)}    
      </View>
      <Image className="max-h-16 mb-8 md:max-h-32 md:mb-10" source={CtrlAltCreative} resizeMode="contain"/>
      <StatusBar style="auto"/>
    </View>
  );
}

function GameScreen({ route, navigation }) {
  var victories = 1
  let gameMode = route.params.gameMode;

  function victoryContainers() {
    let pointsContainers = []
    var extraStyle = "bg-white"
    var textColor = "text-gray-500"
    for (let i = 0; i < gameMode.maxVictoryPoints; i++) {
      if (i <= victories) {
        textColor = ""
        if (i < victories) {
          extraStyle = "bg-green-500"
        }
      }
      pointsContainers.push(<PointsContainer k={i+1} textColor={textColor} extraStyle={extraStyle} number={i+1}/>) 
      textColor = "text-gray-500"
      extraStyle = "bg-white"   
    }
    return (
      <View className="flex-1 items-center justify-center">  
        {pointsContainers}
      </View>
    )
  }

  return (
    <View className="flex-1 bg-gray-500">
      <View className="mt-2 flex-row max-h-32 items-center bg-blue-100">
        <View className="flex-1 h-full">
          <TouchableOpacity 
            onPress={() => navigation.popToTop()
          }> 
            <Image className="ml-2 w-40 h-32 md:max-h-96 md:mb-4" source={Logo} resizeMode="contain"/>
          </TouchableOpacity>
        </View>
        <View className="flex-1 flex-row w-full h-full items-center justify-center space-x-1">
          <View className="mt-2 w-24 h-8 bg-red-500 items-center justify-center rounded-2xl bg-gray-700 border-2 border-green-500">
            <Text className="text-white">{gameMode.name.toUpperCase()}</Text>
          </View>
          <View className="mt-2 w-16 h-8 items-center justify-center">
            <Text className="text-yellow-500 text-lg">{gameMode.secondsCounter} secs</Text>
          </View>
        </View>
      </View>

      <View className=" flex-1 flex-row w-full bg-red-100">
        <View className="flex-1 w-full bg-white">
          <Text>{gameMode.name.toUpperCase()}</Text>
        </View>
        {
          victoryContainers(victories, gameMode.maxVictoryPoints)
        }
        <View className="flex-1 w-full bg-white">
          <Text>{gameMode.name.toUpperCase()}</Text>
        </View>
      </View>
      <View className="flex-1 flex-row w-full max-h-36">
        <Text className="text-white">{gameMode.name.toUpperCase()}</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen key="Home" name='Home' component={HomeScreen} />
        <Stack.Screen key="Game" name='Game' >{(props) => <GameScreen {...props}/>}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;