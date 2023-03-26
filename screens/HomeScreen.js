import * as React from 'react';
import { View, Image } from 'react-native';

import GameModeButton from '../components/GameModeButton'

import Logo from "../assets/cpslogo.png"
import CtrlAltCreative from "../assets/ctrlalt-creative-black.png"

var familyMode = {
    name: "FAMILY",
    secondsCounter: 40,
    audiosPath: ["PIT_40_MASTER.mp3"],
    maxVictoryPoints: 5,
    maxLosePoints: 6,
    hasPenalization: false,
}
  
var normalMode = {
    name: "NORMAL",
    secondsCounter: 30,
    audiosPath: ["PIT_30_MASTER.mp3"],
    maxVictoryPoints: 5,
    maxLosePoints: 4,
    hasPenalization: false
}
  
var avanzadoMode = {
    name: "AVANZADO",
    secondsCounter: 25,
    audiosPath: ["PIT_25_MASTER.mp3"],
    maxVictoryPoints: 5,
    maxLosePoints: 4,
    hasPenalization: true,
    penalizationTime: 5,
    penalizedAudiosPath: ["PIT_20_MASTER.mp3"]
}
  
var proMode = {
    name: "PRO",
    secondsCounter: 20,
    audioPath: ["PIT_20_MASTER.mp3"],
    maxVictoryPoints: 5,
    maxLosePoints: 3,
    hasPenalization: true,
    penalizationTime: 5,
    penalizedAudiosPath: []
}
  
const gameModes = [familyMode, normalMode, avanzadoMode, proMode]

export default function HomeScreen ({ navigation }) {

    return (
        <View className="flex-1 items-center bg-gray-500">
            <Image className="max-w-xs max-h-64 md:max-h-96 md:mb-4" source={Logo} resizeMode="contain"/>
            <View className="flex-1 items-center justify-center">
                {gameModes.map((mode, index) => <GameModeButton k={index} navigation={navigation} gameMode={mode}/>)}    
            </View>
            <Image className="max-h-16 mb-8 md:max-h-32 md:mb-10" source={CtrlAltCreative} resizeMode="contain"/>
        </View>
    );
}