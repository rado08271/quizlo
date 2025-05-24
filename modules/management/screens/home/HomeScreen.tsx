import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from "@react-navigation/native";
import typography from "../../../../core/styles/typography";
import {mockedQuizDetails} from "../../services/get-quiz-details";

const HomeScreen = () => {
    const { navigate } = useNavigation()

    const navigateToCollaboratorsManagement = () => navigate("ManageQuizOrgs")
    const navigateToEmailManagement = () => navigate("ManageQuizMails")

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Manage People</Text>
            <View style={styles.manageContainer}>
                <Pressable android_ripple={{color: "#eee"}} style={styles.manageRow} onPress={navigateToCollaboratorsManagement}>
                    <View style={styles.manageRowIcon}><Icon name={'team'} size={24}/></View>
                    <View style={styles.manageRowContent}>
                        <Text style={typography.content}>Collaborators</Text>
                        <Text style={typography.content}>{mockedQuizDetails.people.team}</Text>
                    </View>
                </Pressable>
                <Pressable android_ripple={{color: "#eee"}} style={styles.manageRow} onPress={navigateToEmailManagement}>
                    <View style={styles.manageRowIcon}>
                        <Icon name={'inbox'} size={24}/>
                    </View>
                    <View style={styles.manageRowContent}>
                        <Text style={typography.content}>Users</Text>
                        <Text style={typography.content}>{mockedQuizDetails.people.users}</Text>
                    </View>
                </Pressable>
            </View>

            <Text style={styles.header}>Quiz Details</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.detailsRow}>
                    <Text style={typography.subtitle}>Started Date</Text>
                    <Text style={typography.title}>{mockedQuizDetails.details.startedDate.format('DD.MM.YYYY')}</Text>
                </View>
                <View style={styles.detailsRow}>
                    <Text style={typography.subtitle}>Next Quiz</Text>
                    <Text style={typography.title}>{mockedQuizDetails.details.nextQuizDate.format('DD.MM.YYYY')}</Text>
                </View>
            </View>

            <Text style={styles.header}>All Quizes</Text>
            <FlatList
                data={mockedQuizDetails.stats}
                numColumns={2}
                columnWrapperStyle={{ gap: 16}}
                keyExtractor={(item) => item.key}
                renderItem={({ item } ) => (
                    <View style={styles.statsRow}>
                        <Text style={typography.subtitle}>{item.key}</Text>
                        <Text style={typography.subheader}>{item.value}</Text>
                    </View>
                )}
                contentContainerStyle={styles.statsContainer}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 16,
        padding: 16
    },
    header: {
        fontSize: 24,
        fontWeight: "500"
    },
    manageContainer: {
        gap: 4
    },
    manageRow: {
        display: "flex",
        gap: 16,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    manageRowContent: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"
    },
    manageRowIcon: {
        backgroundColor: '#cbd8e1',
        borderRadius: 4,
        padding: 6,
    },
    detailsContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: 16
    },
    detailsRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    statsContainer: {
        position: "relative",
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
    },
    statsRow: {
        minWidth: "40%",
        display: "flex",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderStyle: "dotted",
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#aaa"
    },
})

export default HomeScreen;