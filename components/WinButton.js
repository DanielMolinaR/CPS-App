import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from "@expo/vector-icons/AntDesign"

export default function WinButton({ gameResult }) {
    return (
        <View className="flex-1 w-full justify-center items-end">
          <View className="w-20 h-20 mr-6 justify-center md:max-w-lg md:h-28 md:mb-14" >
            <Pressable key={"LoseButton"} className={`w-full h-full bg-green-500 justify-center items-center rounded-xl border-2 border-black`}
              onPress={() => gameResult(true)}>
              <View className="w-full items-center">
                <Icon name="check" size={32} color="white"></Icon>
              </View>
            </Pressable>
          </View>
        </View>
    )
}