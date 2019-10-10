import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 40,
    backgroundColor: Colors.primary,
    alignItems: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 18
  }
});

export default Header;
