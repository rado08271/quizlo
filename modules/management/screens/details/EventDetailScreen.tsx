import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {SLATE_COLOR_100} from "../../../../core/styles/colors";
import typography from "../../../../core/styles/typography";
import Markdown from "react-native-markdown-display";
import {EventDetailInfoItem} from "../../components";

const EventDetailScreen = ({route, navigation}) => {
    const { eventId } = route.params

    return (
        <ScrollView contentContainerStyle={styles.container} contentInsetAdjustmentBehavior="automatic">
            <View style={styles.section}>
                <Text style={typography.subtitle}>Event Details</Text>
                <EventDetailInfoItem icon={'location-outline'} title={'Place'} content={"Bar place at the place"}/>
                <EventDetailInfoItem icon={'time-outline'} title={'Time'} content={"19:00"}/>
                <EventDetailInfoItem icon={'calendar-number-outline'} title={'Date'} content={"27.06.2025"}/>
                <EventDetailInfoItem icon={'people-outline'} title={'Spots'} content={"12"}/>
                <EventDetailInfoItem icon={'person-outline'} title={'Participants'} content={"72"}/>
                <EventDetailInfoItem icon={'play-outline'} title={'Status'} content={"Active"}/>
                <EventDetailInfoItem icon={'trophy-outline'} title={'Winner'} content={"Timely team"}/>
            </View>
            <View style={styles.section}>
                <Text style={typography.subtitle}>Description</Text>
                <View style={styles.descriptionSection}>
                    <Markdown>
                        {`
### Ready to get quizzical? Here's the lowdown:

Mark your calendars for **Friday, June 27, 2025**, because the brain games kick off sharp at **7:00 PM** (that's **19:00** for the super-smart among us). We're taking over the magnificent **Bar at the Skies**, so you can ponder perplexing questions while enjoying, well, the sky!

Rally your dream team, but keep it tight – we're talking a **maximum of 6** brainiacs per squad. And for a **mere 5 euros per person**, you'll get your chance at glory (and probably a good laugh at your friends' terrible guesses). So, start cramming those random facts, because your moment in the trivia spotlight awaits!

We are looking forward to meeting you, and your teams!
`}
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