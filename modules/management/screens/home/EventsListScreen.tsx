import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text, Pressable, FlatList} from "react-native";
import moment from "moment";
import typography from "../../../../core/styles/typography";
import {SLATE_COLOR_50, SLATE_COLOR_700} from "../../../../core/styles/colors";
import {mockedQuizzes, QuizItem, QuizStatus} from "../../services/get-quiz-events";
import {mockedQuizDetails} from "../../services/get-quiz-details";
import {useNavigation} from "@react-navigation/native";
import {QuizEventListItem} from "../../components";

const EventsListScreen = () => {
    const {navigate} = useNavigation()
        const navigateToEventDetailsScreen = (eventId: string) => {
        navigate('Details', {
            screen: "EventDetail",
            params: { eventId }
        })
    }

    return (
        <FlatList<QuizItem>
            data={mockedQuizzes.sort((a, b) =>
                b.quizDate - a.quizDate
            )}
            keyExtractor={(item) => item.quizName}
            renderItem={({item}) => <QuizEventListItem
                id={item.id}
                date={item.quizDate}
                name={item.quizName}
                status={item.status}
                imageUrl={item.imageUrl}
                onPress={navigateToEventDetailsScreen}
            />}
            contentContainerStyle={styles.listOfQuizzesScrollView}/>
    );
};

const styles = StyleSheet.create({
    listOfQuizzesScrollView: {
        padding: 16,
        gap: 8
    }
})

export default EventsListScreen;