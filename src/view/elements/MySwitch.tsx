import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Switch
} from 'react-native';

import { CTEXT } from './custom';

const MySwitch = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.subcontainer}>
            <View style={styles.subcontainer}>
                <Text>{isEnabled ? 'Hide T&C' : 'Show T&C'}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    accessible={true}
                    accessibilityLabel="Switch to Accept the Terms and Conditions"
                    accessibilityHint="Double tap to toggle setting"
                    accessibilityRole="switch"
                />
            </View>
            <Text>{isEnabled ? 'CONDITIONS : By Selecting this toggle button you are accepting the terms and conditions of using this example' : null}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subcontainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    leftText: {
        flex: 1,
    },
    rightText: {
        flex: 1,
        marginLeft: 10
    }
});

export default MySwitch;
