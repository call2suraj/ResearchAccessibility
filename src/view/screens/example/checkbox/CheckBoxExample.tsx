

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CheckBox from '../../../elements/CheckBox';

type Props = {};
export default class CheckExample extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            isCheckedOne: false,
            isCheckedTwo: false,
            isCheckedThree: false,
            isCheckedFour: false,
            isCheckedFive: true,
            isCheckedSix: false,
            isCheckedSeven: false,
            isCheckedEight: false,
        }
    }

    handleCallback = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
        console.log("handleCallback " + this.state.isChecked)
    }

    handleCallbackOne = () => {
        this.setState({
            isCheckedOne: !this.state.isCheckedOne
        })
        console.log("handleCallbackOne " + this.state.isCheckedOne)
    }

    handleCallbackTwo = () => {
        this.setState({
            isCheckedTwo: !this.state.isCheckedTwo
        })
        console.log("handleCallbackTwo " + this.state.isCheckedTwo)
    }

    handleCallbackThree = () => {
        this.setState({
            isCheckedThree: !this.state.isCheckedThree
        })
        console.log("handleCallbackThree " + this.state.isCheckedThree)
    }

    handleCallbackFour = () => {

        this.setState({
            isCheckedFour: !this.state.isCheckedFour
        })
        console.log("handleCallbackFour " + this.state.isCheckedFour)
    }


    handleCallbackFive = () => {
        console.log("handleCallbackFive " + this.state.isCheckedFive)
        this.setState({
            isCheckedFive: !this.state.isCheckedFive
        })
    }

    handleCallbackSix = () => {
        console.log("handleCallbackSix " + this.state.isCheckedSix)
        this.setState({
            isCheckedSix: !this.state.isCheckedSix
        })
    }

    handleCallbackSeven = () => {
        console.log("handleCallbackSeven " + this.state.isCheckedSeven)
        this.setState({
            isCheckedSeven: !this.state.isCheckedSeven
        })
    }

    handleCallbackEight = () => {
        console.log("handleCallback " + this.state.isCheckedEight)
        this.setState({
            isCheckedEight: !this.state.isCheckedEight
        })
    }


    render() {
        console.log("render handleCallback ", this.state)
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 18 }}>Left Label Checkbox: Accessibility Enabled </Text>
                <CheckBox
                    style={{ flex: 1, padding: 10, width: 150 }}
                    onClick={this.handleCallback}
                    isChecked={this.state.isChecked}
                    leftText={"Testing"}
                    accessLabel="CheckBox Label"
                    accessHint="My Hint"
                    accessRole="checkbox"
                    accessState={this.state.isChecked}
                />

                <View
                    style={{
                        paddingTop: 10,
                    }}>
                    <Text style={{ fontSize: 18 }}>Right Label Checkbox: Accessibility Enabled </Text>
                    <CheckBox
                        style={{ flex: 1, padding: 10, width: 200 }}
                        onClick={this.handleCallbackOne}
                        isChecked={this.state.isCheckedOne}
                        rightText={"Right Label CheckBox"}
                        accessLabel="Left Label CheckBox"
                        accessHint="Hint Double Tab"
                        accessRole="checkbox"
                        accessState={this.state.isCheckedOne}
                    />
                </View>

                <View
                    style={{
                        paddingTop: 10,
                    }}>
                    <Text style={{ fontSize: 18 }}>Checkbox Example : No Text</Text>
                    <CheckBox
                        style={{ flex: 1, padding: 10, width: 200 }}
                        onClick={this.handleCallbackTwo}
                        isChecked={this.state.isCheckedTwo}
                    />
                </View>

                <View
                    style={{
                        paddingTop: 10,
                    }}>
                    <Text style={{ fontSize: 18 }}>Checkbox Example : Disabled and Colored</Text>
                    <CheckBox
                        style={{ flex: 1, padding: 10, width: 200 }}
                        onClick={this.handleCallbackThree}
                        isChecked={this.state.isCheckedThree}
                        rightText={"Disabled CheckBox"}
                        disabled={true}
                        uncheckedCheckBoxColor="#d4d4d5"
                    />
                </View>

                <View
                    style={{
                        paddingTop: 10,
                    }}>
                    <Text style={{ fontSize: 18 }}>Checkbox Example : Colored</Text>
                    <CheckBox
                        style={{ flex: 1, padding: 10, width: 200 }}
                        onClick={this.handleCallbackFour}
                        uncheckedCheckBoxColor="red"
                        isChecked={this.state.isCheckedFour}
                        rightText={"Colored CheckBox"}
                    />
                </View>

                <View
                    style={{
                        paddingTop: 10,
                    }}>
                    <Text style={{ fontSize: 18 }}>Checkbox Example : Default Checked</Text>

                    <CheckBox
                        style={{ flex: 1, padding: 10 }}
                        onClick={this.handleCallbackFive}
                        uncheckedCheckBoxColor="green"
                        isChecked={this.state.isCheckedFive}
                        rightText={"Default Checked CheckBox"}
                    />
                </View>

                <View style={{
                    paddingTop: 10,
                }}>
                    <Text style={{ fontSize: 18 }}>Multiple Checkbox : Accessibility Enabled</Text>
                    <View style={{
                        paddingTop: 10, flex: 1, flexDirection: 'row',
                    }}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={this.handleCallbackSix}
                            isChecked={this.state.isCheckedSix}
                            rightText={"Football"}
                            accessLabel="Football"
                            accessHint="Double Tab for Football"
                            accessRole="checkbox"
                            accessState={this.state.isCheckedSix}
                        />
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={this.handleCallbackSeven}
                            isChecked={this.state.isCheckedSeven}
                            rightText={"Cricket"}
                            accessLabel="Cricket"
                            accessHint="Double Tab for Cricket"
                            accessRole="checkbox"
                            accessState={this.state.isCheckedSeven}
                        />
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={this.handleCallbackEight}
                            isChecked={this.state.isCheckedEight}
                            rightText={"Hockey"}
                            accessLabel="Hockey"
                            accessHint="Double Tab for Hockey"
                            accessRole="checkbox"
                            accessState={this.state.isCheckedEight}
                        />
                    </View>
                </View>

                <View>
                <View
                    style={{
                        paddingTop: 10,
                    }}>
                    <Text style={{ fontSize: 18 }}>Checkbox Example : Paragraph</Text>

                    <CheckBox
                        style={{ flex: 1, padding: 10 }}
                        onClick={this.handleCallbackFive}
                        uncheckedCheckBoxColor="green"
                        isChecked={this.state.isCheckedFive}
                        rightText={"Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites"}
                    />
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
});