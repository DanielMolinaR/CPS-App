import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function PenalizationButton({ isPenalized, setPenalization, gameMode }) {
    let penalizationButtonStyle = (<View></View>)

    if (gameMode.hasPenalization) {
      let pressFeedback = "bg-red-500 shadow-2xl shadow-black"
      if (isPenalized) {
        pressFeedback = "bg-red-600 shadow-inner scale-95"
      }
      penalizationButtonStyle = (
        <View className="flex-1 w-full justify-center">
          <View className="w-20 h-20 ml-6 justify-center md:max-w-lg md:h-28 md:mb-14" >
            <Pressable key={"PenalizationButton"} className={`w-full h-full justify-center items-center rounded-xl rounded-br-3xl rounded-tl-3xl ${pressFeedback} border-2 border-black`}
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