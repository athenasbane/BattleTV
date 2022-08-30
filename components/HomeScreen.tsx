import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const styles = StyleSheet.create({
    full: {
      backgroundColor: '#00000000',
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
      height: '25%',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 50,
    },
  });
  return (
    <>
      <SafeAreaView style={styles.full}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NewGame');
            }}>
            <Text style={styles.text}>New Game</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
