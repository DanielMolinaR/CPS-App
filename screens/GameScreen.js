import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

import GameHeader from '../components/GameHeader'
import VictoriesComponent from '../components/VictoriesComponent'
import MistakesComponent from '../components/MistakesComponent'
import PenalizationButton from '../components/PenalizationButton'

let actualVictoryPoints = 0

export default function GameScreen({ route, navigation }) {
    let gameMode = route.params.gameMode;

    const [isPenalized, setPenalization] = React.useState(0)

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

          <PenalizationButton isPenalized={isPenalized} setPenalization={setPenalization} gameMode={gameMode}/>

          <VictoriesComponent actualVictoryPoints={actualVictoryPoints} maxVictoryPoints={gameMode.maxVictoryPoints}m/>
          
          {playButton}

        </View>
        
        <MistakesComponent actualMistakePoints={0} maxMistakePoints={gameMode.maxLosePoints}></MistakesComponent>

        <StatusBar style="auto"/>
      </View>
    );
  }