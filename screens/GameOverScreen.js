import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = ({ rounds, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.gameOverTitle}>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/success.png')}
          // source={{
          //   uri:
          //     'https://media.licdn.com/dms/image/C4E0BAQGfFsoJqupz8Q/company-logo_200_200/0?e=2159024400&v=beta&t=TZCTUrP11vDtbraxso9bUwzgNYwVGJmfDdRJbSeOW3o'
          // }}
        />
      </View>
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
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: 300
  }
});

export default GameOverScreen;
