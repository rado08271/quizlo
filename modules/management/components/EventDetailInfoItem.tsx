import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import typography from "../../../core/styles/typography";
import {BLUE_COLOR_50, SLATE_COLOR_100} from "../../../core/styles/colors";

type Props = {
    icon: string,
    title: string,
    content: string,
    onPress?: () => void
}

const EventDetailInfoItem = ({icon, content, title, onPress}: Props) => {
    return (
        <View style={styles.eventDetailRow}>
            <Pressable android_ripple={{ color: BLUE_COLOR_50}} style={styles.eventDetailRowPressable} onPress={() => onPress ? onPress() : undefined}>
                <View style={styles.iconView}>
                    <Icon name={icon} size={20}/>
                </View>
                <View style={styles.textContent}>
                    <Text style={typography.micro}>{title}</Text>
                    <Text numberOfLines={1} ellipsizeMode={"tail"} style={typography.content}>{content}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    eventDetailRow: {
        borderRadius: 16
    },
    eventDetailRowPressable: {
        display: "flex",
        flexDirection: "row",
        gap: 16
    },
    iconView: {
        backgroundColor: SLATE_COLOR_100,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        borderRadius: 8,
        aspectRatio: 1
    },
    textContent: {
        display: "flex",
        flex: 1,
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start"
    },
})

export default EventDetailInfoItem;