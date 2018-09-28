import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

// ↓これを書かないとエラーが出る
// https://github.com/apollographql/apollo-link/issues/75#issuecomment-333328069
GLOBAL.self = GLOBAL;

const App = createStackNavigator({
  Home: MemoListScreen,
  MemoDetail: MemoDetailScreen,
  MemoEdit: MemoEditScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
}, {
  navigationOptions: {
    headerTitle: 'Memot',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
