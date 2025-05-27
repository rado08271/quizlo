import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {SLATE_COLOR_100} from "../../../../core/styles/colors";
import typography from "../../../../core/styles/typography";
import Markdown from "react-native-markdown-display";
import {EventDetailInfoItem} from "../../components";
import {eventDetail} from "../../services/get-event-detail";
import eventDetailInfoItem from "../../components/EventDetailInfoItem";

const EventDetailScreen = ({route, navigation}) => {
    const { eventId } = route.params

    return (
        <ScrollView contentContainerStyle={styles.container} contentInsetAdjustmentBehavior="automatic">
            <View style={styles.section}>
                <Text style={typography.subtitle}>{eventDetail.eventName}</Text>
                <EventDetailInfoItem icon={'location-outline'} title={'Place'} content={eventDetail.place.placeholder}/>
                <EventDetailInfoItem icon={'time-outline'} title={'Time'} content={eventDetail.quizDate.format("HH:mm")}/>
                <EventDetailInfoItem icon={'calendar-number-outline'} title={'Date'} content={eventDetail.quizDate.format("DD.MM.YYYY")}/>
                <EventDetailInfoItem icon={'people-outline'} title={'Spots'} content={eventDetail.spots.toString()}/>
                <EventDetailInfoItem icon={'person-outline'} title={'Participants'} content={eventDetail.participants.toString()}/>
                <EventDetailInfoItem icon={'play-outline'} title={'Status'} content={eventDetail.status}/>
                <EventDetailInfoItem icon={'trophy-outline'} title={'Winner'} content={eventDetail.winner}/>
            </View>
            <View style={styles.section}>
                <Text style={typography.subtitle}>Description</Text>
                <View style={styles.descriptionSection}>
                    <Markdown>
                        {eventDetail.description}
                    </Markdown>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 16,
    },
    section: {
        gap: 16,
    },
    descriptionSection: {
        padding: 16,
        borderStyle: "dotted",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: SLATE_COLOR_100
    },

})

export default EventDetailScreen;