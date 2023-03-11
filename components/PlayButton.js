import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function PlayButton({}) {
    return (
        <View className="flex-1 w-full justify-center items-end">
        <View className="w-20 h-20 mr-6 justify-center md:max-w-lg md:h-28 md:mb-14" >
          <Pressable key={"test"} className="justify-center items-center rounded-xl rounded-bl-3xl rounded-tr-3xl bg-green-400 w-full h-full flex-row border-2 border-black"
            onPress={() => alert("Holi")}>
            <View className="w-full items-center">
              <Text className="text-white text-2xl md:text-6xl">GO</Text>
            </View>
          </Pressable>
        </View>
      </View>
    )
}