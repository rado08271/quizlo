import React from 'react';
import {Text, View} from "react-native";
import typography from "../../../../core/styles/typography";

const CommunicationScreen = () => {
    return (
        <View>
            <View>
                <Text style={typography.caption}>Emails</Text>
                <View>
                    <Text style={typography.content}>Quiz mail list</Text>
                    <Text style={typography.content}>Event mail list</Text>
                </View>
            </View>
            <View>
                <Text style={typography.caption}>Email automations</Text>
                <View>
                    <View>
                        <Text style={typography.content}>Event invite all</Text>
                        <Text>Send</Text>
                    </View>

                    <View>
                        <Text style={typography.content}>Event inform participants</Text>
                        <Text>Send</Text>
                    </View>

                    <View>
                        <Text style={typography.content}>Event feedback participants</Text>
                        <Text>Send</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CommunicationScreen;