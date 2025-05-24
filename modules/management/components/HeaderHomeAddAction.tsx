import {Pressable, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const HeaderHomeAddAction = () => {
    const {navigate} = useNavigation()

    const navigateToCreateQuiz = () => navigate("CreateQuiz")

    return (
        <Pressable style={styles.headerAction} onPress={navigateToCreateQuiz}>
            <Icon name={'plus'} size={24}/>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    headerAction: {
        paddingHorizontal: 16
    }
})

export default HeaderHomeAddAction