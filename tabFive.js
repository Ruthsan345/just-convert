import React, { Component } from 'react';
import { Picker } from '@react-native-community/picker'
import { Body, Title, Container, Item, Input, Icon, } from 'native-base';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import axios from 'axios';
import styles from './styles';



export default class extends Component {
    state = { fromvalue: "2", tovalue: "10", result: "", data: "" }
    alterfrom = (value) => { this.setState({ fromvalue: value, result: "" }); }
    alterto = (value) => { this.setState({ tovalue: value, result: "" }); }
    update = (value) => {
        var baseConvert = require('baseconvert');
        if (value != "") {
            let a = value;
            var b = this.state.fromvalue;
            var c = this.state.tovalue;
            var myNumber = baseConvert.converter(a).fromBase(b).toBase(c);
            if (isNaN(myNumber)) { alert("Invalid Number Please enter a proper value") }
            else { this.setState({ result: myNumber }) }
        }

    }
    render() {
        return (
            <>
                <View style={styles.view}>
                    <Text style={styles.text1}>Convert From 🔢</Text>
                    <Picker style={styles.picker} selectedValue={this.state.fromvalue} onValueChange={this.alterfrom}  >
                        <Picker.Item label="Binary" value="2" />
                        <Picker.Item label="Quinary" value="5" />
                        <Picker.Item label="Octal" value="8" />
                        <Picker.Item label="Decimal" value="10" />
                        <Picker.Item label="Hexadecimal" value="16" />
                    </Picker>
                    <Item rounded>
                        <Input keyboardType="numeric" placeholder='Enter a value' value={this.state.user} onChangeText={this.update} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Text style={styles.text1}>Converting To </Text>
                    <Picker style={styles.picker} selectedValue={this.state.tovalue} onValueChange={this.alterto}  >
                        <Picker.Item label="Binary" value="2" />
                        <Picker.Item label="Quinary" value="5" />
                        <Picker.Item label="Octal" value="8" />
                        <Picker.Item label="Decimal" value="10" />
                        <Picker.Item label="Hexadecimal" value="16" />
                    </Picker>
                    <View style={styles.text1}>
                        <Text style={styles.text2}> {this.state.result} </Text>
                    </View>
                    <Text ></Text>
                    <Text ></Text>


                    <Body style={styles.body1}></Body>
                </View>
            </>
        );
    }
} 