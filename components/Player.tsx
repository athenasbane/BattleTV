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
      fontSize: 80,
      textAlign: 'center',
      height: '30%',
      width: '90%',
      marginBottom: 50,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="PLAYER NAME"
        defaultValue={data.name}
        value={data.name}
        onChangeText={(newText) =>
          setData((player) => {
            return {...player, name: newText};
          })
        }
      />
      <Text style={styles.text}>VICTORY POINTS</Text>
      <Text style={styles.text}>PRIMARY</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setData((player) => ({
              ...player,
              primaryPoints: player.primaryPoints - 1,
            }))
          }>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>{data.primaryPoints}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setData((player) => ({
              ...player,
              primaryPoints: player.primaryPoints + 1,
            }))
          }>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>SECONDARY</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setData((player) => ({
              ...player,
              secondaryPoints: player.secondaryPoints - 1,
            }))
          }>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>{data.secondaryPoints}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() =>
            setData((player) => ({
              ...player,
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
              secondaryPoints: player.secondaryPoints + 5,
            }))
          }>
          <Text style={styles.text}>+5</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Player;
