import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import Player from './Player';

interface IPlayer {
  name: string;
  primaryPoints: number;
  secondaryPoints: number;
}

class PlayerModel implements IPlayer {
  name = '';
  primaryPoints = 0;
  secondaryPoints = 0;
}

const NewGame = ({navigation}) => {
  const [playerOne, setPlayerOne] = useState(new PlayerModel());
  const [playerTwo, setPlayerTwo] = useState(new PlayerModel());

  const styles = StyleSheet.create({
    full: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      borderRadius: 5,
      backgroundColor: '#000000',
      color: '#ffffff',
      width: '40%',
      height: '35%',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'row',
    },
    column: {
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'column',
    },
    input: {
      fontSize: 80,
      textAlign: 'center',
      height: '30%',
      width: '50%',
      marginBottom: 50,
    },
    row: {
      flexDirection: 'row',
    },
  });
  return (
    <SafeAreaView style={styles.full}>
      <View style={styles.container}>
        <View style={styles.column}>
          <Player data={playerOne} setData={setPlayerOne} />
        </View>
        <View style={styles.column}>
          <Player data={playerTwo} setData={setPlayerTwo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewGame;
