import React from 'react';
import { Font } from 'expo';

import { StyleSheet, View, Text } from 'react-native'; 
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
        const { style, color } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white') {
            bgColor = 'white';
            textColor = '#E31676';
        }

        return (
            <View style={[styles.circleButton, style,  { backgroundColor: bgColor }]}>
                {
                    this.state.fontLoaded ? (
                        <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                            {this.props.children}
                        </Text>
                    ) : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleButton: {
        position: "absolute",
        right: 32,
        bottom: 32,
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
    circleButtonTitle: {
        fontFamily: 'FontAwesome',
        fontSize: 24,
        lineHeight: 24
    },
});