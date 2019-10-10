import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import colors from '../Constants/colors';
import Fonts from '../Constants/Fonts';

const InputField = props =>{
    return(
        <View style={styles.Screen}>
            <Text style={styles.Title}>{props.title}</Text>
            <TextInput {...props} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry} style={{...props.style, ...styles.field}}></TextInput>
        </View>
    )  
}

const styles = StyleSheet.create({
    Screen: {
        width: "95%",
        padding: 10,

    },

    Title: {
        fontFamily: Fonts.mainFont,
        fontWeight: "bold",
        fontSize: 14,
        marginRight: 'auto'
    },

    field: {
        opacity: 0.6,
        width: 250,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1,
    }
});

export default InputField;