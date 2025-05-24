import React from 'react';
import {Pressable, Text, StyleSheet, View} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const { navigate } = useNavigation()

    const navigateToCollaboratorsManagement = () => navigate("ManageQuizOrgs")
    const navigateToEmailManagement = () => navigate("ManageQuizMails")

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Manage People</Text>
            <View style={styles.manageContainer}>
                <Pressable android_ripple={{color: "#eee"}} style={styles.manageRow} onPress={navigateToCollaboratorsManagement}>
                    <View style={styles.manageRowIcon}>
                        <Icon name={'team'} size={24}/>
                    </View>
                    <Text style={styles.manageRowText}>Collaborators</Text>
                </Pressable>
                <Pressable android_ripple={{color: "#eee"}} style={styles.manageRow} onPress={navigateToEmailManagement}>
                    <View style={styles.manageRowIcon}>
                        <Icon name={'inbox'} size={24}/>
                    </View>
                    <Text style={styles.manageRowText}>Users</Text>
                </Pressable>
            </View>

            <Text style={styles.header}>Quiz Details</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsRowTitle}>Started Date</Text>
                    <Text style={styles.detailsRowValue}>11.11.2022</Text>
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsRowTitle}>Next Quiz</Text>
                    <Text style={styles.detailsRowValue}>27.06.2025</Text>
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsRowTitle}>Your team</Text>
                    <Text style={styles.detailsRowValue}>4</Text>
                </View>
            </View>

            <Text style={styles.header}>All Quizes</Text>
            <View style={styles.statsContainer}>
                <View style={styles.statsRow}>
                    <Text style={styles.statsRowHeader}>Total Income</Text>
                    <Text style={styles.statsRowValue}>$ 1,302</Text>
                </View>
                <View style={styles.statsRow}>
                    <Text style={styles.statsRowHeader}>Total Users</Text>
                    <Text style={styles.statsRowValue}>1405</Text>
                </View>
                <View style={styles.statsRow}>
                    <Text style={styles.statsRowHeader}>Total Quizes</Text>
                    <Text style={styles.statsRowValue}>26</Text>
                </View>
                <View style={styles.statsRow}>
                    <Text style={styles.statsRowHeader}>Total Days</Text>
                    <Text style={styles.statsRowValue}>732</Text>
                </View>
                <View style={styles.statsRow}>
                    <Text style={styles.statsRowHeader}>Best Team Overall</Text>
                    <Text style={styles.statsRowValue}>Pablo</Text>
                </View>
            </View>
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
    manageRowIcon: {
        backgroundColor: '#cbd8e1',
        borderRadius: 4,
        padding: 6,
    },
    manageRowText: {
        fontSize: 16
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
    detailsRowTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    detailsRowValue: {
        fontSize: 20,
    },
    statsContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 16
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
    statsRowHeader: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold"
    },
    statsRowValue: {
        textAlign: "center",
        fontSize: 24
    }
})

export default HomeScreen;