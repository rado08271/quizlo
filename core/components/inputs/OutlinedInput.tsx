import React from 'react';
import {StyleSheet, View, TextInput, Text} from "react-native";

type Props = {
    style: StyleSheet
}

const OutlinedInput = ({style}: Props) => {
    return (
        <View style={style}>
            <Text style={styles.labelText}>This is a label</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputContent}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    labelText: {
        fontSize: 20
    },
    inputContainer: {
        display: "flex",
        position: 'relative',
        width: '100%',
    },
    inputContent: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        width: '100%',
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 16,
    },
    image: {
        position: "absolute",
        left: 16
    }
})


export default OutlinedInput;