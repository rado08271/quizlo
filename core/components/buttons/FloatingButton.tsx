import React from 'react';
import {View, Pressable, StyleSheet, Text} from "react-native";

type Props = {
    style: StyleSheet
    onPress: () => void
}

const FloatingButton = ({style, onPress}: Props) => {
    return (
        <View style={style}>
            <Pressable android_ripple={{color: '#adb0f3', radius: 24}} onPress={onPress}
                       style={{...styles.floatingContainer, ...styles.floatingShadow}}>
                <Text style={styles.floatingText}>💛</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    floatingContainer: {
        position: "relative",
        width: 80,
        aspectRatio: 1,
        borderRadius: '100%',
        backgroundColor: '#3134d3',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    floatingShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    floatingText: {
        includeFontPadding: false,
        textAlign: 'center',
        fontSize: 32,
        color: '#fff',
    }
})

export default FloatingButton;