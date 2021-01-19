import React, { Component } from 'react';
import { Picker } from '@react-native-community/picker'
import { Body, Title, Container, Item, Input, Icon, } from 'native-base';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import styles from './styles'

const arr = ["Celsius", "Fahrenheit", "Kelvin"]
export default class extends Component {
    state = {
        fromUnit: "Celsius", toUnita: "Fahrenheit", toUnitb: "kelvin", resulta: "", resultb: "", user: 0
    }
    alter = (value) => {
        this.setState({ fromUnit: value, user: 0, resulta: "", resultb: "" });
        if (this.state.fromUnit == "Celsius") { this.setState({ toUnita: "Fahrenheit", toUnitb: "kelvin" }) }
        else if (this.state.fromUnit == "Fahrenheit") { this.setState({ toUnita: "Celsius", toUnitb: "kelvin" }) }
        else if (this.state.fromUnit == "Kelvin") { this.setState({ toUnita: "Celsius", toUnitb: "Fahrenheit" }) }
    }
    update = (value) => {
        this.setState({ user: value });
        let a = value;
        if (this.state.fromUnit == "Celsius") {
            let f = (a * 1.8) + 32;
            let k = (value * 1) + 273.15;
            if (isNaN(f)) alert('Only Numeric characters Allowed!!');
            this.setState({ resulta: f, resultb: k });
        }
        else if (this.state.fromUnit == "Fahrenheit") {
            let c = (5 / 9) * (a - 32);
            let k = ((a - 32) / 1.8) + 273.15;
            if (isNaN(c)) alert('Only Numeric characters Allowed!!');
            this.setState({ resulta: c, resultb: k });
        }
        else if (this.state.fromUnit == "Kelvin") {
            let f = ((a - 273.15) * 1.8) + 32;
            let c = a - 273.15;
            if (isNaN(f)) alert('Only Numeric characters Allowed!!');
            this.setState({ resulta: c, resultb: f });
        }
    }
    render() {
        return (
            <>
                <View style={styles.view}>
                    <Text style={styles.text1}>Convert From 🌡️</Text>
                    <Picker style={styles.picker} selectedValue={this.state.fromUnit} onValueChange={this.alter}  >
                        {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}
                    </Picker>
                    <Item rounded>
                        <Input keyboardType="numeric" placeholder='Enter a value' value={this.state.user} onChangeText={this.update} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Text style={styles.text1}>Converting To </Text>
                    <Text style={styles.text}>{this.state.toUnita}</Text>
                    <Text style={styles.text2}>{this.state.resulta}</Text>
                    <Text style={styles.text}>{this.state.toUnitb}</Text>
                    <Text style={styles.text2}>{this.state.resultb}</Text>
                    <Body style={styles.body}></Body>
                </View>
            </>
        );
    }
} 