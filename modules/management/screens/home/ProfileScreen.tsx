import React from 'react';
import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import typography from "../../../../core/styles/typography";
import Icon from 'react-native-vector-icons/AntDesign';
import FilledButton from "../../../../core/components/buttons/FilledButton";
import {mockedUserProfile} from "../../services/get-user-profile";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image alt={`user image of a user called ${'username'}`}
                       src={mockedUserProfile.userImageUrl}
                       style={styles.userProfileImage}/>
                <View style={styles.userNameSection}>
                    <Text style={StyleSheet.compose(typography.header, {textAlign: "center"})}>{mockedUserProfile.userName}</Text>
                    <Text style={StyleSheet.compose(typography.micro, {textAlign: "center"})}>@{mockedUserProfile.userNickname}</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
                <View style={styles.profileSection}>
                    <Text style={typography.subtitle}>Account</Text>
                    <Pressable style={styles.profileItem}>
                        <Text style={typography.content}>Edit Profile</Text>
                        <Icon name={'edit'} size={16}/>
                    </Pressable>
                    <Pressable style={styles.profileItem}>
                        <Text style={typography.content}>Notifications</Text>
                        <Icon name={'shake'} size={16}/>
                    </Pressable>
                    <Pressable style={styles.profileItem}>
                        <Text style={typography.content}>Security</Text>
                        <Icon name={'Safety'} size={16}/>
                    </Pressable>
                    <Pressable style={styles.profileItem}>
                        <Text style={typography.content}>Language</Text>
                        <Icon name={'earth'} size={16}/>
                    </Pressable>
                </View>
                <View style={styles.profileSection}>
                    <Text style={typography.subtitle}>Support</Text>
                    <Pressable style={styles.profileItem}>
                        <Text style={typography.content}>About</Text>
                        <Icon name={'infocirlceo'} size={16}/>
                    </Pressable>
                    <Pressable style={styles.profileItem}>
                        <Text style={typography.content}>Help Center</Text>
                        <Icon name={'questioncircleo'} size={16}/>
                    </Pressable>
                    <Pressable style={styles.profileItem}>
                        <Text style={typography.content}>Contact Us</Text>
                        <Icon name={'customerservice'} size={16}/>
                    </Pressable>
                </View>
                <View style={styles.profileSection}>
                    <Text style={typography.subtitle}>Legal</Text>
                    <Pressable style={styles.profileItem}>
                        <Text style={typography.content}>Terms of Service</Text>
                        <Icon name={'carryout'} size={16}/>
                    </Pressable>
                    <Pressable style={styles.profileItem}>
                        <Text style={typography.content}>Privacy Policy</Text>
                        <Icon name={'flag'} size={16}/>
                    </Pressable>
                    <Pressable style={styles.profileItem}>
                        <Text style={typography.content}>Delete Account</Text>
                        <Icon name={'delete'} size={16}/>
                    </Pressable>
                </View>
                <FilledButton style={styles.logoutFilledButton} onPress={() => {
                    console.log("logout")
                }}>Log Out</FilledButton>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingTop: 16,
        flex: 1,
        flexDirection: "column",
        gap: 8,
    },
    scrollViewContentContainer: {
        display: "flex",
        paddingHorizontal: 16,
        gap: 24,
    },
    userContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    },
    userProfileImage: {
        width: 96,
        aspectRatio: 1,
        borderRadius: 48
    },
    userNameSection: {
        gap: 2
    },
    profileSection: {
        gap: 16
    },
    profileItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline"
    },
    logoutFilledButton: {}
})

export default ProfileScreen;