import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoList from './src/components/MemoList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
        <Appbar />
        <MemoList />
        <View style={styles.memoAddButton}>
            <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  memoAddButton: {
    position: "absolute",
    right: 30,
    bottom: 30,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memoAddButtonTitle: {
    fontSize: 32,
  },
});
