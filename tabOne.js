import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import { Body, Title, Container, Item, Input, Icon, } from 'native-base';
import s from './Style';
import styles from './styles'


class Distance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: '', unitFrom: 'mi', unitTo: 'km', result: null,
            distance: {
                'km': 1000, 'm': 1, 'cm': 0.01, 'mm': 0.001, 'in': 0.0254,
                'mi': 1609.34, 'n.m': 1852, 'yd': 0.9144, 'ft': 0.3048
            }
        }

    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    clearInput = () => {
        this.setState({ userInput: '' });
    }

    handleToChange = (unit2) => {
        this.setState({ unitTo: unit2 }, () => this.calculate());
    }

    handleFromChange = (unit1) => {
        this.setState({ unitFrom: unit1 }, () => this.calculate());
    }

    calculate = () => {
        if (this.state.userInput !== '') {
            let intermediary, target;
            intermediary = this.state.userInput * this.state.distance[this.state.unitFrom]
            target = intermediary / this.state.distance[this.state.unitTo]
            if (isNaN(target))
                Alert.alert('ERROR Bro!', 'Only Numeric characters Allowed!!.');
            else
                this.setState({ result: this.formatNumber(parseFloat(target).toFixed(1)) });
        }
        else {
            this.setState({ result: null })
        }
    }
    swap = () => {
        let temp1, temp2;
        temp1 = this.state.unitFrom;
        temp2 = this.state.unitTo;
        this.setState({ unitFrom: temp2, unitTo: temp1 }, () => {
            this.calculate()
        })
    }

    updateAndCalculate = (text) => {
        this.setState({ userInput: text.replace(/,/g, '') }, () =>
            this.calculate()
        )
    }

    render() {
        return (
            <>
                <View style={styles.view}>
                    <View >
                        <Text style={styles.text1}>Convert From 🛣 </Text>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitFrom}
                            onValueChange={this.handleFromChange}>
                            <Picker.Item label="Kilometer " value="km" />
                            <Picker.Item label="Meter " value="m" />
                            <Picker.Item label="Centimeter" value="cm" />
                            <Picker.Item label="Millimeter " value="mm" />
                            <Picker.Item label="Mile " value="mi" />
                            <Picker.Item label="Yard " value="yd" />
                            <Picker.Item label="Feet " value="ft" />
                            <Picker.Item label="Inches " value="in" />
                        </Picker>
                        <View style={s.textInputContainerIOS} >
                            <Item rounded>
                                <Input
                                    placeholder="Enter a value"
                                    style={s.textStyle}
                                    value={this.formatNumber(this.state.userInput)}
                                    onChangeText={this.updateAndCalculate}
                                    maxLength={18}
                                    keyboardType='numeric'
                                    clearButtonMode='while-editing'
                                />
                                <Icon name='checkmark-circle' />

                            </Item>
                        </View>
                    </View>
                    <View style={styles.text} >
                        <TouchableOpacity onPress={this.swap}>
                        </TouchableOpacity>
                        {Platform.OS === 'android' &&
                            <TouchableOpacity onPress={this.clearInput}>
                            </TouchableOpacity>
                        }
                    </View>

                    <View style={styles.view}>

                        <Text style={styles.textd}>Convert To </Text>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitTo}
                            onValueChange={this.handleToChange}>
                            <Picker.Item label="Kilometer " value="km" />
                            <Picker.Item label="Meter " value="m" />
                            <Picker.Item label="Centimeter" value="cm" />
                            <Picker.Item label="Millimeter " value="mm" />
                            <Picker.Item label="Mile " value="mi" />
                            <Picker.Item label="Yard " value="yd" />
                            <Picker.Item label="Feet " value="ft" />
                            <Picker.Item label="Inches " value="in" />
                        </Picker>

                        <View style={styles.text1}>
                            <Text style={styles.text2c}> {this.state.result} </Text>
                        </View>
                    </View>
                    <Body style={styles.body1}></Body>
                </View>
            </>
        );
    }
}

export default Distance;