import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable,} from "react-native";
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import typography from "../../../../core/styles/typography";
import {BLUE_COLOR_300, SLATE_COLOR_100, SLATE_COLOR_400} from "../../../../core/styles/colors";

const ScoreboardScreen = () => {
    const [checked, setChecked] = React.useState(false);
    const [points, setPoints] = React.useState(0);

    const processPoints = (points: string) => {
        const number = Number(points)
        if (number < 0) {
            setPoints(0)
            return
        }

        if (number > 10) {
            setPoints(10)
            return;
        }

        setPoints(number)
    }

    return (
        <View style={styles.container}>
            <View style={styles.scoreCategorySection}>
                <Text>category 1.</Text>
                <View style={styles.scoreCategoryTeamRow}>
                    <Text style={typography.title}>team A</Text>
                    <View style={styles.scoreCategoryTeamPoints}>
                        <TextInput
                            onChangeText={processPoints}
                            style={styles.scoreCategoryTeamRowPoints} value={points.toString()}/>
                        <Pressable
                            onPress={() => setChecked(!checked)}
                            style={StyleSheet.compose(styles.scoreCategoryTeamRowExtra, {backgroundColor: checked ? BLUE_COLOR_300 : SLATE_COLOR_100})}></Pressable>
                    </View>
                </View>
                <View style={styles.scoreCategoryTeamRow}>
                    <Text style={typography.title}>Druhy team</Text>
                    <View style={styles.scoreCategoryTeamPoints}>
                        <TextInput
                            onChangeText={processPoints}
                            style={styles.scoreCategoryTeamRowPoints} value={points.toString()}/>
                        <Pressable
                            onPress={() => setChecked(!checked)}
                            style={StyleSheet.compose(styles.scoreCategoryTeamRowExtra, {backgroundColor: checked ? BLUE_COLOR_300 : SLATE_COLOR_100})}></Pressable>
                    </View>
                </View>

            </View>

            <View style={styles.scoreCategorySection}>
                <Text>category 2.</Text>
                <View style={styles.scoreCategoryTeamRow}>
                    <Text style={typography.title}>team A</Text>
                    <View style={styles.scoreCategoryTeamPoints}>
                        <TextInput
                            onChangeText={processPoints}
                            style={styles.scoreCategoryTeamRowPoints} value={points.toString()}/>
                        <Pressable
                            onPress={() => setChecked(!checked)}
                            style={StyleSheet.compose(styles.scoreCategoryTeamRowExtra, {backgroundColor: checked ? BLUE_COLOR_300 : SLATE_COLOR_100})}></Pressable>
                    </View>
                </View>
                <View style={styles.scoreCategoryTeamRow}>
                    <Text style={typography.title}>Druhy team</Text>
                    <View style={styles.scoreCategoryTeamPoints}>
                        <TextInput
                            onChangeText={processPoints}
                            style={styles.scoreCategoryTeamRowPoints} value={points.toString()}/>
                        <Pressable
                            onPress={() => setChecked(!checked)}
                            style={StyleSheet.compose(styles.scoreCategoryTeamRowExtra, {backgroundColor: checked ? BLUE_COLOR_300 : SLATE_COLOR_100})}></Pressable>
                    </View>
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex"
    },
    scoreCategorySection: {
        padding: 8,
        gap: 8
    },
    scoreCategoryTeamRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    scoreCategoryTeamPoints: {
        display: "flex",
        flexDirection: "row",
        gap: 8
    },
    scoreCategoryTeamRowPoints: {
        padding: 4,
        borderRadius: 8,
        borderWidth: 2,
        aspectRatio: 1,
        width: 32,
        textAlign: "center"
    },
    scoreCategoryTeamRowExtra: {
        width: 32,
        borderRadius: 8,


    }

})

export default ScoreboardScreen;