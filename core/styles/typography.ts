import {StyleSheet} from "react-native";
import {DARK_COLOR_300, DARK_COLOR_500} from "./colors";

const typography = StyleSheet.create({
    supertitle: {
        fontSize: 32,
        fontWeight: "bold",
        color: DARK_COLOR_500
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: DARK_COLOR_500
    },
    subheader: {
        fontSize: 24,
        fontWeight: "medium",
        color: DARK_COLOR_500
    },
    title: {
        fontSize: 20,
        fontWeight: "medium",
        color: DARK_COLOR_500
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: DARK_COLOR_500
    },
    content: {
        fontSize: 16,
        fontWeight: "medium",
        color: DARK_COLOR_500
    },
    micro: {
        fontSize: 14,
        fontWeight: "light",
        color: DARK_COLOR_300
    },
    caption: {
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: DARK_COLOR_300,
    }
})

export default typography;