import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text, Pressable, FlatList} from "react-native";
import moment from "moment";
import typography from "../../../../core/styles/typography";
import {SLATE_COLOR_50, SLATE_COLOR_700} from "../../../../core/styles/colors";
import {mockedQuizzes, QuizStatus} from "../../services/get-quiz-events";
import {mockedQuizDetails} from "../../services/get-quiz-details";
import {useNavigation} from "@react-navigation/native";

const EventsListScreen = () => {
    const {navigate} = useNavigation()
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

    const navigateToEventDetailsScreen = (eventId: string) => {
        navigate('Details', {
            screen: "EventDetail",
            params: { eventId }
        })
    }

    return (
        <FlatList
            data={mockedQuizzes}
            keyExtractor={(item) => item.quizName}
            renderItem={({item}) => (
                <View style={StyleSheet.compose(styles.quizItemRow, getColorBasedOnStatus(item.status))}>
                    <Pressable android_ripple={{color: '#E7EEF3'}} onPress={() => navigateToEventDetailsScreen(item.id)}
                               style={styles.quizItemPressable}>
                        <Image
                            style={styles.quizItemIcon}
                            alt={'Image for a quiz at a bar'}
                            src={item.imageUrl}
                        />
                        <View style={styles.quizItemContent}>
                            <Text numberOfLines={1} style={typography.title}>{item.quizName}</Text>
                            <Text style={typography.caption}>{item.status}</Text>
                        </View>
                        <View style={styles.quizDateContent}>
                            <Text style={typography.supertitle}>{item.quizDate.format('DD')}</Text>
                            <Text style={typography.content}>{item.quizDate.format("MMM")}</Text>
                        </View>
                    </Pressable>
                </View>
            )}
            contentContainerStyle={styles.listOfQuizzesScrollView}/>
    );
};

const styles = StyleSheet.create({
    listOfQuizzesScrollView: {
        padding: 16,
        gap: 8
    },
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

export default EventsListScreen;