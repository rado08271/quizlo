import React from 'react';
import {Text, View, FlatList, Pressable, StyleSheet} from "react-native";
import {Team, teams} from "../../services/get-event-participants";
import typography from "../../../../core/styles/typography";
import Icon from "react-native-vector-icons/Ionicons";
import {BLUE_COLOR_50, SLATE_COLOR_100, SLATE_COLOR_50} from "../../../../core/styles/colors";

const ParticipantsListScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.registerNewTeam}>
                <Pressable android_ripple={{color: SLATE_COLOR_50}} style={styles.registerNewTeamPress}>
                    <View style={styles.registerNewTeamIcon}>
                        <Icon name={"add"} size={32}></Icon>
                    </View>
                    <Text style={typography.content}>Register new Team</Text>
                </Pressable>
            </View>
            <Text style={typography.caption}>Participants</Text>
            <FlatList<Team> contentContainerStyle={styles.listContainer} data={teams.filter(value => !value.isInWaitList)}
                            renderItem={({item}) =>
                                <Pressable style={styles.teamRow}>
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
        padding: 16,
        gap: 8
    },
    listContainer: {
        gap: 6,
        padding: 6
    },
    registerNewTeamIcon: {
        padding: 4,
        backgroundColor: BLUE_COLOR_50,
        borderRadius: 8
    },
    registerNewTeam: {
        padding: 8,
    },
    registerNewTeamPress: {
        padding: 8,
        borderRadius: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    teamRow: {
        padding: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
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

export default ParticipantsListScreen;