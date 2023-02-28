import { View } from 'react-native';

import PointsContainer from './PointsContainer'


export default function victoryContainers({ actualVictoryPoints, maxVictoryPoints }) {
    let pointsContainers = []
    var extraStyle = "bg-slate-50	"
    var textColor = "text-gray-500"
    for (let i = 0; i < maxVictoryPoints; i++) {
      if (i <= actualVictoryPoints) {
        textColor = ""
        if (i < actualVictoryPoints) {
          extraStyle = "bg-green-500"
        }
        if (i === actualVictoryPoints) {
          extraStyle = "bg-white shadow-2xl shadow-black"
        }
      }
      pointsContainers.push(<PointsContainer k={i+1} textColor={textColor} extraStyle={extraStyle} number={i+1}/>) 
      textColor = "text-gray-500"
      extraStyle = "bg-slate-50"   
    }
    return (
      <View className="flex-1 items-center justify-center">  
        {pointsContainers}
      </View>
    )
  }