import React, { Component } from 'react';
import { Picker } from '@react-native-community/picker'
import { Body, Title, Container, Item, Input, Icon, } from 'native-base';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import axios from 'axios';
import styles from './styles';

const arr = ["Seconds", "Minutes", "Hour", "Day", "Week", "Month", "Year"];
const { ms, s, m, h, d } = require('time-convert')
const { seconds, minutes, hours, days } = require('time-convert')



export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitFrom: 'Minutes', userInput: '', unitTo: 'Hour', value: null,
            distance: {
                'Seconds': 1, 'Minutes': 60, 'Hour': 3600, 'Day': 86400, 'Week': 604800,
                'Month': 2.628e+6, 'Year': 3.154e+7
            }
        }
    }
    state = { fromtime: "Seconds", totime: "Hour", result: "", data: "" }
    FromChange = (unit) => {
        this.setState({ unitFrom: unit, userInput: '' }, () => this.calculate());
    }
    ToChange = (unit1) => {
        this.setState({ unitTo: unit1, userInput: '' }, () => this.calculate());
    }

    calculate = () => {
        if (this.state.userInput !== '') {
            let mid, result;
            mid = this.state.userInput * this.state.distance[this.state.unitFrom]
            result = mid / this.state.distance[this.state.unitTo]
            this.setState({ value: parseFloat(result).toFixed(2) });
        }
        else {
            this.setState({ value: null })
        }
    }

    updateAndCalculate = (text) => {
        this.setState({ userInput: text.replace(/,/g, '') }, () =>
            this.calculate())
    }

    render() {
        return (
            <>
                <View style={styles.view}>
                    <Text style={styles.text1}>Convert From 🕒</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.unitFrom}
                        onValueChange={this.FromChange}>
                        {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}

                    </Picker>
                    <Item rounded>
                        <Input keyboardType="numeric" placeholder='Enter a value' value={this.state.userInput} onChangeText={this.updateAndCalculate} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Text style={styles.text1}>Converting To </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.unitTo}
                        onValueChange={this.ToChange}>
                        {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}

                    </Picker>

                    <View style={styles.text1}>
                        <Text style={styles.text2}> {this.state.value} </Text>
                    </View>
                    <Text ></Text>
                    <Text ></Text>


                    <Body style={styles.body1}></Body>
                </View>
            </>
        );
    }
} 