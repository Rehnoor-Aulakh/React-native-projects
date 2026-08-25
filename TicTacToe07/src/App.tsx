import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Snackbar } from 'react-native-snackbar'
import Icons from './components/Icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import SoundPlayer from 'react-native-sound-player';


const options = { enableVibrateFallback: true, ignoreAndroidSystemSettings: false, }

export default function App() {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  function checkIsWinner() {
    // Row 1
    if(gameState[0]!=='empty' && gameState[0]===gameState[1] && gameState[1]===gameState[2]) {
      setGameWinner(gameState[0]);
    
    }
    // Row 2
    else if(gameState[3]!=='empty' && gameState[3]===gameState[4] && gameState[4]===gameState[5]) {
      setGameWinner(gameState[3]);
    }
    // Row 3
    else if(gameState[6]!=='empty' && gameState[6]===gameState[7] && gameState[7]===gameState[8]) {
      setGameWinner(gameState[6]);
    }

    // Column 1
    else if(gameState[0]!=='empty' && gameState[0]===gameState[3] && gameState[3]===gameState[6]) {
      setGameWinner(gameState[0]);
    }
    // Column 2
    else if(gameState[1]!=='empty' && gameState[1]===gameState[4] && gameState[4]===gameState[7]) {
      setGameWinner(gameState[1]);
    }
    // Column 3
    else if(gameState[2]!=='empty' && gameState[2]===gameState[5] && gameState[5]===gameState[8]) {
      setGameWinner(gameState[2]);
    }

    // Diagonal 1
    else if(gameState[0]!=='empty' && gameState[0]===gameState[4] && gameState[4]===gameState[8]) {
      setGameWinner(gameState[0]);
    }
    // Diagonal 2
    else if(gameState[2]!=='empty' && gameState[2]===gameState[4] && gameState[4]===gameState[6]) {
      setGameWinner(gameState[2]);
    }
    // if every position is filled and no winner, then it's a draw
    else if(!gameState.includes('empty')) {
      setGameWinner('draw');
    }
  }


  function reloadGame() {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  }
  // whenever the gameWinner state changes, we want to show a snackbar message to the user
  useEffect(() => {
    if(gameWinner!=='') {
      if(gameWinner!=='draw') {
      SoundPlayer.playSoundFile('win', 'mp3');
      Snackbar.show({
        text: `${gameWinner.toUpperCase()} won the game 🥇`,
        backgroundColor: '#000000',
        textColor: '#fff',
        duration: Snackbar.LENGTH_LONG
      });}
      else {
        SoundPlayer.playSoundFile('draw', 'mp3');
      }
      // wait here for 5 seconds and then reload the game
      setTimeout(() => {
        reloadGame();
      }, 5000); 
    }
  }, [gameWinner])

  function onChangeItem(itemNumber: number) {
    if(gameState[itemNumber]==='empty') {
       gameState[itemNumber] = isCross ? 'cross' : 'circle';
       setGameState(gameState);
       setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: "Position is already filled",
        backgroundColor: 'red',
        textColor: '#fff',
        duration: Snackbar.LENGTH_SHORT
      })
    }
    checkIsWinner();
  }
  
  return (
    <SafeAreaView>
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerText}>
            {gameWinner === 'draw' ? 'It\'s a draw!' : gameWinner.toUpperCase() + ' won the game! 🥇'} 
            
          </Text>
        </View>
      ) : (
        <View style={[ styles.playerInfo, isCross ? styles.playerX : styles.playerO ]}>
          <Text style={styles.gameTurnText}>
            Player {isCross ? 'X' : 'O'}'s turn
          </Text>
        </View>
      )}
      {/* Game Grid */}
      <FlatList
        numColumns={3}
        data={gameState}
        style={styles.grid}
        renderItem= {({item, index}) => (
          <Pressable 
          key={index} 
          onPress={() => {
            SoundPlayer.playSoundFile('click', 'mp3');
            onChangeItem(index)
            ReactNativeHapticFeedback.trigger("impactHeavy", options);
          
          }}
          style={styles.card}
          >
            <Icons name={item} />
          </Pressable>
        )}
      />
      {/* Game Action */}
      <View style={styles.gameAction}>

      <Pressable
        style={styles.gameBtn}
        onPress={()=>{
          reloadGame();
          ReactNativeHapticFeedback.trigger("impactHeavy", options);}}
        >
        <Text style={styles.gameBtnText}>
          Reload Game
        </Text>
      </Pressable>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  playerInfo: {
    padding: 10,
    margin: 10,
    borderRadius: 4,
    alignItems: 'center'
  },
  gameTurnText: {
    fontSize: 25,
    color: '#2b2a2a',
    fontWeight: 'bold'
  },
  playerX: {
    backgroundColor: '#38CC77'
  },
  playerO: {
    backgroundColor: '#F7CD2E'
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    
    borderWidth: 1,
    borderColor: '#212020'
  },
  winnerText: {
    fontSize: 25,
    color: '#2b2a2a',
    fontWeight: 'bold'
  },
  gameAction: {
    marginTop: 30,
    alignItems: 'center',
  },
  gameBtn: {
    backgroundColor: '#8e0c0c',
    padding: 10,
    margin: 10, 
    width: '120',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#7b7676'
  },
  gameBtnText: {
    color: '#cdc0c0',
  },
  winnerInfo: {
    backgroundColor: '#eee9f7'
  }
})