import { View, Text } from 'react-native'


export default function pointsContainer({ extraStyle, number, textColor }) {
    return (
      <View className={`w-14 max-h-10 max-w-10 mb-8 md:max-w-lg md:h-28 md:mb-14`} >
        <View className={`items-center justify-center w-full h-full rounded-xl drop-shadow-2xl ${extraStyle}`}>
          <Text className={`${textColor} text-xl md:text-6xl`}>{number}</Text>
        </View>
      </View>
    );
}