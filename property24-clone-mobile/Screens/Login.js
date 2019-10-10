import React from 'react';
import {View, StyleSheet, Text, Image, KeyboardAvoidingView} from 'react-native';
import {Button} from 'native-base';

import InputField from '../Components/InputField'
import Fonts from '../Constants/Fonts';
import colors from '../Constants/colors';





const Login = props => {

    const navigation = props.navigation;
    


    return(
        <KeyboardAvoidingView styles={styles.Screen} behavior="position">
            <Image style= {styles.Logo} resizeMode={"center"} source={require("../assets/property24.png")}/>
            <View style={styles.HeadingContainer}>
                <Text style={styles.Heading1}>Welcome Back,</Text>
                <Text style={styles.Heading2}> Sign in to continue</Text>
            </View>

            <View style={styles.InputContainer}>
                <InputField placeholder={"JohnDoe@email.com"} title="Email" />
                <InputField placeholder={"●●●●●●●●●"} title="Password" secureTextEntry={true}/>
                <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 12, color: colors.lightGray, alignSelf: "stretch", textAlign: "right"}}>Forgot Password?</Text>
                </View>
            </View>

            <View style={styles.ButtonContainer}>
                <Button onPress={() => navigation.replace("ViewListings")} block style={styles.LoginButton}>
                    <Text style={styles.LoginButtonText}>Login</Text>
                </Button>

                <View style={{flexDirection: "row",alignSelf: "center", marginTop: 50}}>
                    <Text>New User?</Text>
                    <Text style={{color: colors.primary, marginLeft: 8, fontWeight: "bold"}} onPress={() => navigation.navigate("Signup")}>Signup</Text>
                </View>
            </View>

        </KeyboardAvoidingView>

        
    )
}

const styles = StyleSheet.create({
    Screen: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    Logo: {
        maxHeight: 100,
        maxWidth: 250,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: "center"
    },

    HeadingContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
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

    InputContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },

    ButtonContainer: {
        width: "95%",
        marginTop: 10,
        alignSelf: "center"
    },

    LoginButton: {
        width: 250,
        backgroundColor: colors.primary,
        alignSelf: "center"
    },

    LoginButtonText: {
        color: colors.white,
        fontFamily: Fonts.mainFont,
    },


});

export default Login;