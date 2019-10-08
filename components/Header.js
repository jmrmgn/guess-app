import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 40,
    backgroundColor: '#3b5998',
    alignItems: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 18
  }
});

export default Header;
