import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const LOWER = 'lower';
const HIGHER = 'higher';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice]);

  const handleNextGuess = direction => {
    if (
      (direction === LOWER && currentGuess < userChoice) ||
      (direction === HIGHER && currentGuess > userChoice)
    ) {
      Alert.alert("Dont't lie", 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel' }
      ]);
      return;
    }

    if (direction === LOWER) {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setRounds(currRounds => currRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>Opponent's Guess</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={handleNextGuess.bind(this, LOWER)}>
          <Ionicons name="md-arrow-dropdown" size={24} color="white" />
        </MainButton>
        <MainButton onPress={handleNextGuess.bind(this, HIGHER)}>
          <Ionicons name="md-arrow-dropup" size={24} color="white" />
        </MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '90%'
  }
});

export default GameScreen;
