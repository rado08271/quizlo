import React from 'react';
import {Text, View, FlatList, StyleSheet, Pressable} from "react-native";
import {Team, teams} from "../../services/get-event-participants";
import typography from "../../../../core/styles/typography";
import Icon from "react-native-vector-icons/Ionicons";

const ParticipantsWaitListScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList<Team> contentContainerStyle={styles.container} data={teams.filter(value => value.isInWaitList)} renderItem={ ({item}) =>
                <Pressable style={styles.teamRow}>
                    <View style={styles.teamRowPlace}>
                        <Text style={typography.content}>{item.positionOfRegistration}.</Text>
                    </View>
                    <View style={styles.teamRowContent}>
                        <View>
                            <Text style={typography.title}>{item.name}</Text>
                            <Text style={typography.caption}>{item.registeredAt.format("DD.MM.")}</Text>
                        </View>
                        <Text style={typography.title}>{item.participants}</Text>
                    </View>
                    <View style={styles.teamRowIcon}>
                        <Icon name={'ellipsis-vertical-sharp'} size={20}></Icon>
                    </View>
                </Pressable>
            }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 6,
        padding: 6
    },
    teamRow: {
        padding: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
    },
    teamRowPlace: {
        width: 32
    },
    teamRowContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
        flex: 1,
    },
    teamRowIcon: {
        padding: 4,
        aspectRatio: 1,
        borderRadius: 4

    }
})

export default ParticipantsWaitListScreen;