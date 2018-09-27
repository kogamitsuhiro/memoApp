import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          { this.props.children }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    backgroundColor: '#eee',
  },
});
