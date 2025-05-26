import React from 'react';
import {QuizStatus} from "../services/get-quiz-events";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import typography from "../../../core/styles/typography";
import moment from "moment";
import {SLATE_COLOR_50} from "../../../core/styles/colors";

type Props = {
    name: string,
    id: string,
    status: QuizStatus
    date?: moment,
    imageUrl?: string,
    onPress?: (quizEventItemId: string) => void
}

const getColorBasedOnStatus = (status: QuizStatus) => {
    switch (status) {
        case "active":
            return styles.quizStatusActive
        case "passed":
            return styles.quizStatusPassed
        case "planned":
            return styles.quizStatusPlanned
        case "cancelled":
            return styles.quizStatusCancelled
    }
}

const QuizEventListItem = ({date, name, status, imageUrl, id, onPress}: Props) => {
    return (
        <View style={StyleSheet.compose(styles.quizItemRow, getColorBasedOnStatus(status))}>
            <Pressable android_ripple={{color: '#E7EEF3'}} onPress={() => onPress ? onPress(id) : undefined}
                       style={styles.quizItemPressable}>
                <Image
                    style={styles.quizItemIcon}
                    alt={'Image for a quiz at a bar'}
                    src={imageUrl}
                />
                <View style={styles.quizItemContent}>
                    <Text numberOfLines={1} style={typography.title}>{name}</Text>
                    <Text style={typography.caption}>{status}</Text>
                </View>
                {
                    date && <View style={styles.quizDateContent}>
                        <Text style={typography.supertitle}>{date.format('DD')}</Text>
                        <Text style={typography.content}>{date.format("MMM")}</Text>
                    </View>
                }
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    quizItemRow: {
        borderRadius: 11,
        borderRightWidth: 4,
        backgroundColor: SLATE_COLOR_50,
    },
    quizItemPressable: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        paddingRight: 8,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    quizItemIcon: {
        width: 72,
        borderRadius: 8,
        aspectRatio: 1,
    },
    quizItemContent: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: 4,
    },
    quizDateContent: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch",
        alignItems: "center",
    },
    quizStatusPassed: {
        borderColor: "#f1cc84",
    },
    quizStatusActive: {
        borderColor: "#b9f184",
    },
    quizStatusCancelled: {
        borderColor: "#939492",
    },
    quizStatusPlanned: {
        borderColor: "#84c0f1",
    }
})

export default QuizEventListItem;