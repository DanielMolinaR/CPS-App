import * as React from 'react';
import { View, Pressable, Text, Alert } from 'react-native';
import Modal from "react-native-modal";
import { Audio } from 'expo-av';


import GameHeader from '../components/GameHeader'
import VictoriesComponent from '../components/VictoriesComponent'
import MistakesComponent from '../components/MistakesComponent'
import PenalizationButton from '../components/PenalizationButton'
import PlayButton from '../components/PlayButton'
import LoseButton from '../components/LoseButton'
import WinButton from '../components/WinButton'

const audio40 = require('../assets/music/PIT_40_MASTER.mp3')
const audio30 = require('../assets/music/PIT_30_MASTER.mp3')
const audio25 = require('../assets/music/PIT_25_MASTER.mp3')
const audio20 = require('../assets/music/PIT_20_MASTER.mp3')
const audio15 = require('../assets/music/PIT_15_MASTER.mp3')

export default function GameScreen({ route, navigation }) {

  const [gameHasFinished, setGameHasFinished] = React.useState(false);
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    switch(gameMode.name) {
      case 'FAMILY':
        var { sound } = await Audio.Sound.createAsync(audio40)
        break;
      case 'NORMAL':
        var { sound } = await Audio.Sound.createAsync(audio30)
        break;
      case 'AVANZADO':
        if (!isPenalized) {
          var { sound } = await Audio.Sound.createAsync(audio25)
        } else {
          var { sound } = await Audio.Sound.createAsync(audio20)
        }
        break;
      case 'PRO':
        if (!isPenalized) {
          var { sound } = await Audio.Sound.createAsync(audio20)
        } else {
          var { sound } = await Audio.Sound.createAsync(audio15)
        }        
        break;
    } 
    setSound(sound);
  
    console.log('Playing Sound');
    await sound.playAsync();
  }

  function playOff() {
    setSound();
  }

  function gameResult(hasWon) {
    if (hasWon) {
      setVictoryPoints(victoryPoints+1)
    } else {
      setLosingPoints(losingPoints+1)
    }

    playOff()
    setModalVisible(!isModalVisible)

  }
  
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

    let gameMode = route.params.gameMode;

    const [seconds, setSeconds] = React.useState(gameMode.secondsCounter);

    const [isPenalized, setPenalization] = React.useState(false)

    React.useEffect(() => {
        if (isPenalized) {
          setSeconds(gameMode.secondsCounter - gameMode.penalizationTime)
        } else {
          setSeconds(gameMode.secondsCounter)
        }
      }, [isPenalized]);

    const [isModalVisible, setModalVisible] = React.useState(false);

    const [losingPoints, setLosingPoints] = React.useState(0);

    React.useEffect(() => {
      if (losingPoints == gameMode.maxLosePoints) {
        setGameHasFinished(true)
        Alert.alert("Has perdido!!!")
      }
    }, [losingPoints])
    
    const [victoryPoints, setVictoryPoints] = React.useState(0);

    React.useEffect(() => {
      if (victoryPoints == gameMode.maxVictoryPoints) {
        setGameHasFinished(true)
        Alert.alert("Has ganado!!!")
      }
    }, [victoryPoints])

    let [secondsClock, setSecondsClock] = React.useState(0);   
    
    React.useEffect(() => {
      const timer = setTimeout(async function() {
        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }

        if (secondsClock == "Preparados!") {
          playSound()
          await sleep(2500)
          setSecondsClock("Listos!");
        } else if (secondsClock == "Listos!"){
          await sleep(2600)
          setSecondsClock(seconds);
        } else if (secondsClock > 0) {
          setSecondsClock(secondsClock - 1);
        }
      }, 1000)
  
      return () => { // this should work flawlessly besides some milliseconds lost here and there 
         clearTimeout(timer)
      }
     }, [secondsClock]);

     let [miliseconds, setMiliseconds] = React.useState(0);   

     React.useEffect(() => {
      const timer = setTimeout(function() {
        if (miliseconds > 0) {
          setMiliseconds(miliseconds - 1);
        } else if (secondsClock > 0){
          setMiliseconds(60)
        }
      }, 0.00000001)
  
      return () => { // this should work flawlessly besides some milliseconds lost here and there 
         clearTimeout(timer)
      }
     }, [miliseconds]);


    return (
      <View className="flex-1 bg-gray-500">

        <GameHeader navigation={navigation} isPenalized={isPenalized} gameMode={gameMode} />
  
        <View className=" flex-1 flex-row w-full">

          <PenalizationButton isPenalized={isPenalized} setPenalization={setPenalization} gameMode={gameMode}/>

          <VictoriesComponent actualVictoryPoints={victoryPoints} maxVictoryPoints={gameMode.maxVictoryPoints}/>
          
          <PlayButton 
            setModalVisible={setModalVisible} 
            setSecondsClock={setSecondsClock} 
            seconds={seconds} 
            setMiliseconds={setMiliseconds}
            gameHasFinished={gameHasFinished}
          />

          <Modal
            isVisible={isModalVisible}
          >
            <View className="flex-1 w-full h-full justify-end items-center">
              <View className="m-2 bg-white w-5/6 h-40 rounded-xl items-center justify-center">
                <Text className="font-medium text-3xl">{secondsClock}</Text>
              </View>
            </View>

            <View className="flex-1 flex-row items-start mt-2">
              
              <LoseButton 
                gameResult={gameResult}
              />

              <WinButton 
                gameResult={gameResult}
              />

            </View>
          </Modal>

        </View>

        <MistakesComponent actualMistakePoints={losingPoints} maxMistakePoints={gameMode.maxLosePoints}></MistakesComponent>
      </View>
    );
  }