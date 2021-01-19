import React, { Component } from 'react';
import { Picker } from '@react-native-community/picker'
import { Body, Title, Container, Item, Input, Icon, } from 'native-base';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import axios from 'axios';
import s from './Style';
import styles from './styles';

const arr = ["INR", "EUR", "USD", "JPY", "GBP", "AUD", "MXN", "KWD", "SGD", "MYR", "AED"];

export default class extends Component {
    state = { fromcurr: "INR", tocurr: "EUR", result: "", data: "" }
    alterfrom = (value) => { this.setState({ fromcurr: value, result: "" }); }
    alterto = (value) => { this.setState({ tocurr: value, result: "" }); }
    update = (value) => {
        let a = value;
        var b = this.state.fromcurr;
        var c = this.state.tocurr;
        var d = b + "_" + c
        if (value != "") {
            axios.get(`https://free.currconv.com/api/v7/convert?q=${d}&compact=ultra&apiKey=8ba844e791c8fc93dc67`)
                .then(res => {
                    this.setState({ data: res.data[d] })
                }).catch(error => {
                    alert(error)
                })
            let calc = a * this.state.data;
            this.setState({ result: calc })
        }
    }
    render() {
        return (
            <>
                <View style={styles.view}>
                    <Text style={styles.text1}>Convert From 💵</Text>
                    <Picker style={styles.picker} selectedValue={this.state.fromcurr} onValueChange={this.alterfrom}  >
                        {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}
                    </Picker>
                    <Item rounded>
                        <Input keyboardType="numeric" placeholder='Enter a value' value={this.state.user} onChangeText={this.update} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Text style={styles.text1}>Converting To 💴 </Text>
                    <Picker style={styles.picker} selectedValue={this.state.tocurr} onValueChange={this.alterto}  >
                        {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}
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