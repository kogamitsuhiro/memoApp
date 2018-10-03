import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput style={styles.input} value="Email address" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.button} title="ログイン" onPress={() => { this.props.navigation.navigate('Home'); }}>
          <Text style={styles.buttonTitle}>
            ログイン
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#e31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '70%',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});
