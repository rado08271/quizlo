import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Pressable} from "react-native";

type Props = {
    style: StyleSheet,
    label?: string,
    placeholder?: string,
    id?: string,
    onValueChange?: (input: string) => void
}

const FilledInput = ({style, label, placeholder, id, onValueChange}: Props) => {
    const [value, setValue] = useState<string>()

    const changeInputValue = (text: string) => {
        setValue(text)
        if (onValueChange) {
            onValueChange(text)
        }
    }

    return (
        <View style={style}>
            {label && <Text style={styles.labelText}>{label}</Text>}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.inputContent}
                    onChangeText={changeInputValue}
                    value={value}
                    textContentType={"password"}
                />
                {false && <Pressable style={styles.trailingIcon}>
                    {/* TODO: Take some content */}
                </Pressable>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    labelText: {
        fontSize: 16
    },
    inputContainer: {
        display: "flex",
        position: 'relative',
        width: '100%',
    },
    inputContent: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: '#eee',
        width: '100%',
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        borderRadius: 16,
    },
    trailingIcon: {
        position: "absolute",
        right: 16, top: "25%", bottom: "25%",
        aspectRatio: 1, backgroundColor: '#7f7fa2', borderRadius: "100%"
    }
})


export default FilledInput;