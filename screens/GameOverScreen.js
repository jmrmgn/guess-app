import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = ({ rounds, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.gameOverTitle}>Game Over!</TitleText>
      <BodyText>Number of rounds: {rounds}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
      <View style={styles.buttonContainer}>
        <Button title="NEW GAME" onPress={onNewGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameOverTitle: {
    fontSize: 20
  },
  buttonContainer: {
    marginVertical: 10
  }
});

export default GameOverScreen;
