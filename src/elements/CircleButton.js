import React from 'react';
import { Font } from 'expo';

import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import fontAwesome from '../../assets/fonts/fontawesome-webfont.ttf';

export default class CircleButton extends React.Component {
    state = {
      fontLoaded: false,
    }

    async componentWillMount() {
      await Font.loadAsync({
        FontAwesome: fontAwesome,
      });

      this.setState({ fontLoaded: true });
    }

    render() {
      const { style, color, onPress } = this.props;

      let bgColor = '#E31676';
      let textColor = '#fff';

      if (color === 'white') {
        bgColor = 'white';
        textColor = '#E31676';
      }

      return (
        <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
          <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
            {
              this.state.fontLoaded ? (
                <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                  { this.props.children }
                </Text>
              ) : null
            }
          </View>
        </TouchableHighlight>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    right: 32,
    bottom: 32,
  },
  circleButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
  },
});
