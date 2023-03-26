import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from "@expo/vector-icons/AntDesign"

export default function LoseButton({ gameResult }) {
    return (
        <View className="flex-1 w-full justify-center">
          <View className="w-20 h-20 ml-6 justify-center md:max-w-lg md:h-28 md:mb-14" >
            <Pressable key={"LoseButton"} className={`w-full h-full bg-red-500 justify-center items-center rounded-xl border-2 border-black`}
              onPress={() => gameResult(false)}>
              <View className="w-full items-center">
                <Icon name="close" size={32} color="white"></Icon>
              </View>
            </Pressable>
          </View>
        </View>
    )
}