import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        aspectRatio: 1/0.6,
        backgroundColor: '#123',
    },
    textContainer: {
        flex: 1,
        gap: 4,
        padding: 32,
    },
    inputContainer: {
        width: '100%',
        padding: 16,
        gap: 16
    },
    header: {
        textAlign: "center",
        fontSize: 32,
        color: '#0a0a0a',
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        color: '#000000',
    },
    primaryButton: {
        width: '100%',
        padding: 16
    },
    inputText: {
        width: '100%',
    },
    underlinedText: {
        textDecorationLine: "underline",
        color: "#777"
    }
})

export default styles