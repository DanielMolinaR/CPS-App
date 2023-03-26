import { View } from 'react-native';
import Icon from "@expo/vector-icons/AntDesign"

export default function victoryContainers({ actualMistakePoints, maxMistakePoints }) {
    let mistakesContainer = []
    var extraStyle = "bg-slate-50	"
    var textColor = "text-gray-500"
    for (let i = 0; i < maxMistakePoints; i++) {
      if (i < actualMistakePoints) {
        mistakesContainer.push(
          <View className={`box-border w-8 h-8 bg-red-500`}>
            <Icon name="close" size={32} color="black"></Icon>
          </View>
        ) 
      } else {
        mistakesContainer.push(
          <View className={`box-border w-8 h-8 bg-white`}>
          </View>
        ) 
      }

    }
    return (
      <View className="flex-1 flex-row w-full max-h-40 justify-center space-x-4 pt-4">
        {mistakesContainer}
      </View>
    )
  }