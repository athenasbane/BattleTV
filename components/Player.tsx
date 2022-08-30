import React from 'react';
import {IPlayer} from '../types/interfaces/Player.interface';
import {PlayerModel} from '../models/PlayerModel.model';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Player = ({
  data,
  setData,
}: {
  data: IPlayer;
  setData: React.Dispatch<React.SetStateAction<PlayerModel>>;
}) => {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 5,
      backgroundColor: '#000000',
      color: '#ffffff',
      width: '40%',
      height: '35%',
      justifyContent: 'center',
    },
    buttonSecondary: {
      borderRadius: 5,
      backgroundColor: '#000000',
      color: '#ffffff',
      width: '20%',
      height: '35%',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 50,
      marginBottom: 5,
      textShadowColor: 'rgba(0, 0, 0, 0.95)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    textSecondary: {
      color: 'white',
      textAlign: 'center',
      fontSize: 50,
      textShadowColor: 'rgba(0, 0, 0, 0.95)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    column: {
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'column',
    },
    input: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 5,
      fontSize: 80,
      textAlign: 'center',
      height: '15%',
      width: '90%',
      marginBottom: 50,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });

  const addFiveCalculator = (data: IPlayer) => {
    if (data.secondaryPoints <= 40) {
      return 5;
    }

    return 45 - data.secondaryPoints;
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="PLAYER NAME"
        defaultValue={data.name}
        value={data.name}
        onChangeText={(newText) =>
          setData((player) => {
            return {...player, total: player.total, name: newText};
          })
        }
      />
      <Text style={styles.text}>VICTORY POINTS</Text>
      <Text style={styles.text}>PRIMARY</Text>
      <View style={styles.row}>
        <TouchableOpacity
          disabled={data.primaryPoints === 0}
          style={styles.button}
          onPress={() =>
            setData((player) => ({
              ...player,
              total: player.total,
              primaryPoints: player.primaryPoints - 1,
            }))
          }>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>{data.primaryPoints}</Text>
        </View>
        <TouchableOpacity
          disabled={data.primaryPoints === 45}
          style={styles.button}
          onPress={() =>
            setData((player) => ({
              ...player,
              total: player.total,
              primaryPoints: player.primaryPoints + 1,
            }))
          }>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>SECONDARY</Text>
      <View style={styles.row}>
        <TouchableOpacity
          disabled={data.secondaryPoints === 0}
          style={styles.button}
          onPress={() =>
            setData((player) => ({
              ...player,
              total: player.total,
              secondaryPoints: player.secondaryPoints - 1,
            }))
          }>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>{data.secondaryPoints}</Text>
        </View>
        <TouchableOpacity
          disabled={data.secondaryPoints === 45}
          style={styles.buttonSecondary}
          onPress={() =>
            setData((player) => ({
              ...player,
              total: player.total,
              secondaryPoints: player.secondaryPoints + 1,
            }))
          }>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() =>
            setData((player) => ({
              ...player,
              total: player.total,
              secondaryPoints: player.secondaryPoints + addFiveCalculator(data),
            }))
          }>
          <Text style={styles.text}>+{addFiveCalculator(data)}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.textSecondary}>TOTAL</Text>
        <Text style={styles.textSecondary}>{data.total()}</Text>
      </View>
    </>
  );
};

export default Player;
