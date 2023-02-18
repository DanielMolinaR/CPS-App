import { View, Text, Pressable } from 'react-native'


export default function gameModeButton({ navigation, gameMode }) {
    return (
      <View className="w-full max-w-xs h-16 mb-8 md:max-w-lg md:h-28 md:mb-14" >
        <Pressable key={gameMode.name} className="justify-center items-center rounded-xl bg-cps-gray w-full h-full flex-row border-2 border-white"
          onPress={() => navigation.navigate('Game', {gameMode: gameMode})}>
          <View className="w-full items-center">
            <Text className="text-white text-2xl md:text-6xl">{gameMode.name.toUpperCase()}</Text>
          </View>
        </Pressable>
      </View>
    );
}