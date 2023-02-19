import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text } from 'react-native';

import PointsContainer from '../components/PointsContainer'
import GameHeader from '../components/GameHeader'

let victories = 1
let isPenalized = false

function victoryContainers(gameMode) {
  let pointsContainers = []
  var extraStyle = "bg-slate-50	"
  var textColor = "text-gray-500"
  for (let i = 0; i < gameMode.maxVictoryPoints; i++) {
    if (i <= victories) {
      textColor = ""
      if (i < victories) {
        extraStyle = "bg-green-500"
      }
      if (i === victories) {
        extraStyle = "bg-white shadow-lg shadow-black"
      }
    }
    pointsContainers.push(<PointsContainer k={i+1} textColor={textColor} extraStyle={extraStyle} number={i+1}/>) 
    textColor = "text-gray-500"
    extraStyle = "bg-slate-50"   
  }
  return (
    <View className="flex items-center justify-center">  
      {pointsContainers}
    </View>
  )
}

export default function GameScreen({ route, navigation }) {
    var gameMode = route.params.gameMode;
  
    return (
      <View className="flex-1 bg-gray-500">

        <GameHeader navigation={navigation} isPenalized={isPenalized} gameMode={gameMode} />
  
        <View className=" flex-1 flex-row w-full">
          <View className="flex-1 w-full bg-white">
            <Text>{gameMode.name.toUpperCase()}</Text>
          </View>
          {
            victoryContainers(gameMode)
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