import { createStackNavigator } from 'react-navigation';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

// eslint-disable-next-line
require("firebase/firestore");

// ↓これを書かないとエラーが出る
// https://github.com/apollographql/apollo-link/issues/75#issuecomment-333328069
// eslint-disable-next-line
GLOBAL.self = GLOBAL;

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const App = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
  Home: MemoListScreen,
  MemoDetail: MemoDetailScreen,
  MemoEdit: MemoEditScreen,
  MemoCreate: MemoCreateScreen,
}, {
  navigationOptions: {
    headerTitle: 'Memot',
    headerTintColor:  '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
