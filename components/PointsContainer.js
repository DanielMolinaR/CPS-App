import { View, Text } from 'react-native'


export default function pointsContainer({ extraStyle, number, textColor }) {
    return (
      <View className={`w-14 h-10 m-4 items-center justify-center rounded-xl drop-shadow-2xl ${extraStyle} md:max-w-lg md:h-28 md:mb-14`}>
        <Text className={`${textColor} text-xl md:text-6xl`}>{number}</Text>
      </View>
    );
}