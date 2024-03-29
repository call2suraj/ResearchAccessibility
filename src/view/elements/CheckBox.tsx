import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    ViewProperties as RNViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

const ViewPropTypes = View.prototype;

export default class CheckBox extends Component {
    constructor(props: any) {
        super(props);
    }

    static propTypes = {
        ...ViewPropTypes,
        leftText: PropTypes.string,
        leftTextView: PropTypes.element,
        rightText: PropTypes.string,
        leftTextStyle: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
        ]),
        rightTextView: PropTypes.element,
        rightTextStyle: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
        ]),
        checkedImage: PropTypes.element,
        unCheckedImage: PropTypes.element,
        onClick: PropTypes.func.isRequired,
        isChecked: PropTypes.bool.isRequired,
        isIndeterminate: PropTypes.bool.isRequired,
        checkBoxColor: PropTypes.string,
        checkedCheckBoxColor: PropTypes.string,
        uncheckedCheckBoxColor: PropTypes.string,
        disabled: PropTypes.bool,
    }
    static defaultProps = {
        isChecked: false,
        isIndeterminate: false,
        leftTextStyle: {},
        rightTextStyle: {}
    }

    onClick() {
        this.props.onClick();
        console.log('clicked checkbox : '+ this.props.isChecked )
    }

    _renderLeft() {
        if (this.props.leftTextView) return this.props.leftTextView;
        if (!this.props.leftText) return null;
        return (
            <Text style={[styles.leftText, this.props.leftTextStyle]}>{this.props.leftText}</Text>
        );
    }

    _renderRight() {
        if (this.props.rightTextView) return this.props.rightTextView;
        if (!this.props.rightText) return null;
        return (
            <Text style={[styles.rightText, this.props.rightTextStyle]}>{this.props.rightText}</Text>
        );
    }

    _renderImage() {
        if (this.props.isIndeterminate) {
            return this.props.indeterminateImage ? this.props.indeterminateImage : this.genCheckedImage();
        }
        if (this.props.isChecked) {
            return this.props.checkedImage ? this.props.checkedImage : this.genCheckedImage();
        } else {
            return this.props.unCheckedImage ? this.props.unCheckedImage : this.genCheckedImage();
        }
    }

    _getCheckedCheckBoxColor() {
        return this.props.checkedCheckBoxColor ? this.props.checkedCheckBoxColor : this.props.checkBoxColor
    }

    _getUncheckedCheckBoxColor() {
        return this.props.uncheckedCheckBoxColor ? this.props.uncheckedCheckBoxColor : this.props.checkBoxColor
    }

    _getTintColor() {
        return this.props.isChecked ? this._getCheckedCheckBoxColor() : this._getUncheckedCheckBoxColor()
    }

    genCheckedImage() {
        let source;
        if (this.props.isIndeterminate) {
            source = require('../../view/assets/images/ic_indeterminate_check_box.png');
        }
        else {
            source = this.props.isChecked ? require('../../view/assets/images/ic_check_box.png') : require('../../view/assets/images/ic_check_box_outline_blank.png');
        }

        return (
            <Image source={source} style={{tintColor: this._getTintColor()}}/>
        );
    }

    render() {
        return (
            <TouchableHighlight
                style={this.props.style}
                onPress={() => this.onClick()}
                underlayColor='transparent'
                disabled={this.props.disabled}
                accessible={true}
                accessibilityLabel={this.props.accessLabel}
                accessibilityHint={this.props.accessHint}
                accessibilityState={{ disabled: this.props.disabled, checked: this.props.isChecked }}
                accessibilityRole={this.props.accessRole}
            >
                <View style={styles.container}>
                    {this._renderLeft()}
                    {this._renderImage()}
                    {this._renderRight()}
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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