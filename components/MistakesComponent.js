import { View } from 'react-native';

import PointsContainer from './PointsContainer'


export default function victoryContainers({ actualMistakePoints, maxMistakePoints }) {
    let mistakesContainer = []
    var extraStyle = "bg-slate-50	"
    var textColor = "text-gray-500"
    for (let i = 0; i < maxMistakePoints; i++) {
      if (i <= actualMistakePoints) {
        textColor = ""
        if (i < actualMistakePoints) {
          extraStyle = "bg-green-500"
        }
        if (i === actualMistakePoints) {
          extraStyle = "bg-white shadow-2xl shadow-black"
        }
      }
      mistakesContainer.push(<View className="box-border w-8 h-8 bg-white"></View>) 
      textColor = "text-gray-500"
      extraStyle = "bg-slate-50"   
    }
    return (
      <View className="flex-1 flex-row w-full max-h-40 justify-center space-x-4">
        {mistakesContainer}
      </View>
    )
  }