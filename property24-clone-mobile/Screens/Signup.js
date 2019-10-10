import React from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import {Button} from 'native-base';

import InputField from '../Components/InputField';
import Fonts from '../Constants/Fonts';
import colors from '../Constants/colors';

const Signup = props => {
    return(
            <KeyboardAvoidingView style={styles.screen} behavior="position">
            <Image style={styles.Logo} resizeMode={"center"} source={require("../assets/property24.png")}/>

            <View style={styles.HeadingContainer}>
                <Text style={styles.Heading1}>Welcome New User,</Text>
                <Text style={styles.Heading2}> Sign up to get started</Text>
            </View>

            <View styles={styles.InputContainer}>
                <InputField style={{width: 10}} placeholder={"John Doe"} title="Full Name" />
                <InputField style={{width: 10}} placeholder={"JohnDoe@email.com"} title="Email" />
                <InputField placeholder={"●●●●●●●●●"} title="Password" secureTextEntry={true}/>
                <InputField placeholder={"●●●●●●●●●"} title="Confirm Password" secureTextEntry={true}/>
            </View>

            <View style={styles.ButtonContainer}>
            <Button block style={styles.SignupButton}>
                    <Text style={styles.SignupButtonText}>Sign up</Text>
            </Button>
            </View>
            </KeyboardAvoidingView>

        
    )
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },

    HeadingContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 35,
    },

    Heading1: {
        fontSize: 30,
        fontFamily: Fonts.mainFont,
    },

    Heading2: {
        fontSize: 14,
        color: colors.lightGray,
        fontFamily: Fonts.mainFont,
    },


    Logo: {
        maxHeight: 50,
        maxWidth: 250,
        marginBottom: 20,
    },

    InputContainer: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center"
    },

    ButtonContainer: {
        flexDirection: 'row',
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 20,  
    },

    SignupButton: {
        width: 250,
        backgroundColor: colors.primary,
        alignSelf: "center"
    },

    SignupButtonText: {
        color: colors.white,
        fontFamily: Fonts.mainFont,
    },
});

export default Signup;

