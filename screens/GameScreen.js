import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

import GameHeader from '../components/GameHeader'
import VictoriesComponent from '../components/VictoriesComponent'
import MistakesComponent from '../components/MistakesComponent'

let actualVictoryPoints = 0

function penalizationButtonStyle(isPenalized, setPenalization, gameMode) {
  let penalizationButtonStyle = (<View></View>)

  if (gameMode.hasPenalization) {
    let pressFeedback = "bg-red-500 shadow-2xl shadow-black"
    if (isPenalized) {
      pressFeedback = "bg-red-600 shadow-inner scale-95"
    }
    penalizationButtonStyle = (
      <View className="flex-1 w-full justify-center">
        <View className="w-20 h-20 ml-6 justify-center md:max-w-lg md:h-28 md:mb-14" >
          <Pressable key={"test"} className={`w-full h-full justify-center items-center rounded-xl rounded-br-3xl rounded-tl-3xl ${pressFeedback} border-2 border-black`}
            onPress={() => setPenalization((isPenalized) => isPenalized = !isPenalized)}>
            <View className="w-full items-center">
              <Text className="text-white text-2xl md:text-6xl">-5 "</Text>
            </View>
          </Pressable>
        </View>
      </View>
    )
  }

  return penalizationButtonStyle
}

export default function GameScreen({ route, navigation }) {
    let gameMode = route.params.gameMode;

    const [isPenalized, setPenalization] = React.useState(0)

    let penalizationButton = penalizationButtonStyle(isPenalized, setPenalization, gameMode)

    let playButton = (
      <View className="flex-1 w-full justify-center items-end">
        <View className="w-20 h-20 mr-6 justify-center md:max-w-lg md:h-28 md:mb-14" >
          <Pressable key={"test"} className="justify-center items-center rounded-xl rounded-bl-3xl rounded-tr-3xl bg-green-400 w-full h-full flex-row border-2 border-black"
            onPress={() => alert("hey")}>
            <View className="w-full items-center">
              <Text className="text-white text-2xl md:text-6xl">Test</Text>
            </View>
          </Pressable>
        </View>
      </View>
    )
  
    return (
      <View className="flex-1 bg-gray-500">

        <GameHeader navigation={navigation} isPenalized={isPenalized} gameMode={gameMode} />
  
        <View className=" flex-1 flex-row w-full">

          {penalizationButton}

          <VictoriesComponent actualVictoryPoints={actualVictoryPoints} maxVictoryPoints={gameMode.maxVictoryPoints}m/>
          
          {playButton}

        </View>
        
        <MistakesComponent actualMistakePoints={0} maxMistakePoints={gameMode.maxLosePoints}></MistakesComponent>

        <StatusBar style="auto"/>
      </View>
    );
  }