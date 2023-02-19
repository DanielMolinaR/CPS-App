import * as React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import Logo from "../assets/cpslogo.png"

function displaySeconds(isPenalized, gameMode){
    let display = <Text className="text-yellow-500 text-lg font-bold">{gameMode.secondsCounter} secs</Text>
    if (isPenalized) {
      display = (
        <View>
          <Text className="text-yellow-500 text-lg line-through">{gameMode.secondsCounter} secs</Text>
          <Text className="text-red-500 text-lg font-bold">{gameMode.secondsCounter - gameMode.penalizationTime} secs</Text>
        </View>
      )
    }
    return (
      <View className="flex-1">
        {display}
      </View>
    )
  }

export default function GameHeader({ navigation, isPenalized, gameMode}) {
    return (
        <View className="mt-2 flex-row max-h-32 items-center">
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
                {displaySeconds(isPenalized, gameMode)}
            </View>
            </View>
        </View>
    )
}