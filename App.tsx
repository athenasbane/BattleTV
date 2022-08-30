/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template for TV
 * https://github.com/react-native-tvos/react-native-template-typescript-tv
 *
 * @format
 */

import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import 'react-native/tvos-types.d';
import HomeScreen from './components/HomeScreen';
import NewGame from './components/NewGame';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <ImageBackground
      source={require('./assets/images/background.jpg')}
      style={styles.backgroundImage}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewGame" component={NewGame} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
});

export default App;
