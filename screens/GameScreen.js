import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View } from 'react-native';

import GameHeader from '../components/GameHeader'
import VictoriesComponent from '../components/VictoriesComponent'
import MistakesComponent from '../components/MistakesComponent'
import PenalizationButton from '../components/PenalizationButton'
import PlayButton from '../components/PlayButton'

let actualVictoryPoints = 0

export default function GameScreen({ route, navigation }) {
    let gameMode = route.params.gameMode;

    const [isPenalized, setPenalization] = React.useState(0)
  
    return (
      <View className="flex-1 bg-gray-500">

        <GameHeader navigation={navigation} isPenalized={isPenalized} gameMode={gameMode} />
  
        <View className=" flex-1 flex-row w-full">

          <PenalizationButton isPenalized={isPenalized} setPenalization={setPenalization} gameMode={gameMode}/>

          <VictoriesComponent actualVictoryPoints={actualVictoryPoints} maxVictoryPoints={gameMode.maxVictoryPoints}m/>
          
          <PlayButton/>

        </View>
        
        <MistakesComponent actualMistakePoints={0} maxMistakePoints={gameMode.maxLosePoints}></MistakesComponent>

        <StatusBar style="auto"/>
      </View>
    );
  }