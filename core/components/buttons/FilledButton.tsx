import React, {PropsWithChildren} from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import Stylesheet from "../../../modules/auth/screens/stylesheet";

type Props = PropsWithChildren&{
    style: StyleSheet
    onPress: () => void,
}

const FilledButton = ({style, onPress, children}: Props) => {
    return (
        <View style={style}>
            <Pressable android_ripple={{color: '#adb0f3'}} onPress={onPress} style={styles.container}>
                <Text style={styles.filledButtonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffd341',
        paddingVertical: 16,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    filledButtonText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    }
})

export default FilledButton;