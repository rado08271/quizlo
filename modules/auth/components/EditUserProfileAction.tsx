import React from 'react';
import {useNavigation} from "@react-navigation/native";
import {Pressable, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const EditUserProfileAction = () => {
    const {navigate} = useNavigation()

    const navigateToEditProfile = () => console.log("Edit Profile")

    return (
        <Pressable style={styles.headerAction} onPress={navigateToEditProfile}>
            <Icon name={'edit'} size={24}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    headerAction: {
        paddingHorizontal: 16
    }
})


export default EditUserProfileAction;
