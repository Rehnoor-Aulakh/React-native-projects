import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Snackbar } from 'react-native-snackbar'
import Icons from './components/Icons'

export default function App() {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  function reloadGame() {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  }
  // whenever the gameWinner state changes, we want to show a snackbar message to the user
  useEffect(() => {
    if(gameWinner) {
      Snackbar.show({
        text: `${gameWinner} won the game`,
        backgroundColor: '#000000',
        textColor: '#fff',
        duration: Snackbar.LENGTH_LONG
      });
      // wait here for 5 seconds and then reload the game
      setTimeout(() => {
        reloadGame();
      }, 5000); 
    }
  }, [gameWinner])

  // whenever the gameState changes, we want to check if there is a winner
  useEffect(() => {
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
  }
    checkIsWinner();
  }, [gameState]);


  function onChangeItem(itemNumber: number) {
    if(gameState[itemNumber]==='empty') {
       gameState[itemNumber] = isCross ? 'cross' : 'circle';
       setGameState(gameState);
       setIsCross(!isCross);
    }
  }
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})