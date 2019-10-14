import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = ({ rounds, userNumber, onNewGame }) => {
  const isSingleRound = rounds === 1;
  return (
    <ScrollView>
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
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed <Text style={styles.highlight}>{rounds}</Text>{' '}
            round
            {!isSingleRound ? 's' : ''} to guess the number{' '}
            <Text style={styles.highlight}>{userNumber}</Text>.
          </BodyText>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton onPress={onNewGame}>NEW GAME</MainButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameOverTitle: {
    fontSize: 25
  },
  buttonContainer: {
    marginVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: 300
  },
  resultContainer: {
    marginVertical: 15,
    marginHorizontal: Dimensions.get('window').height / 60
  },
  resultText: {
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    textAlign: 'center'
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary
  }
});

export default GameOverScreen;
