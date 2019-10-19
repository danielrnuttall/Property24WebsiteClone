import React from 'react';
import {View, StyleSheet, Text, Image, KeyboardAvoidingView} from 'react-native';
import {Button} from 'native-base';


import InputField from '../Components/InputField'
import Fonts from '../Constants/Fonts';
import colors from '../Constants/colors';

//Redux code
import {connect} from 'react-redux';
import {LoginUser} from '../Redux/Actions/LoginActions';
import {bindActionCreators} from 'redux';

class Login extends React.Component{

    constructor(props){
        super(props);
    }

    state = {
        email: '',
        password: '',
        users: []
    }

    render(){

        const loginUser = (email, password) =>{
            let users = this.props.users;
            
            let user = users.filter(function(user){
                return user.email == email && user.password == password
            })

            if(user.length == 1){
                //Details are correct and user is logged in.
                this.props.reduxLoginUser(user[0].name, user[0].email, user[0].password);
                this.props.navigation.replace('ViewListings');
            }
            else{
                alert("Incorrect email or password!");
            }
        }

        return(
            <KeyboardAvoidingView styles={styles.Screen} behavior="position">
                <Image style= {styles.Logo} resizeMode={"center"} source={require("../assets/property24.png")}/>
                <View style={styles.HeadingContainer}>
                    <Text style={styles.Heading1}>Welcome Back,</Text>
                    <Text style={styles.Heading2}> Sign in to continue</Text>
                </View>

                <View style={styles.InputContainer}>
                    <InputField onChangeText ={(email) => this.setState({email: email})} placeholder={"JohnDoe@email.com"} title="Email" />
                    <InputField onChangeText ={(password) => this.setState({password: password})} placeholder={"●●●●●●●●●"} title="Password" secureTextEntry={true}/>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{fontSize: 12, color: colors.lightGray, alignSelf: "stretch", textAlign: "right"}}>Forgot Password?</Text>
                    </View>
                </View>

                <View style={styles.ButtonContainer}>
                    <Button onPress={() => loginUser(this.state.email, this.state.password)} block style={styles.LoginButton}>
                        <Text style={styles.LoginButtonText}>Login</Text>
                    </Button>

                    <View style={{flexDirection: "row",alignSelf: "center", marginTop: 50}}>
                        <Text>New User?</Text>
                        <Text style={{color: colors.primary, marginLeft: 8, fontWeight: "bold"}} onPress={() => this.props.navigation.navigate("Signup")}>Signup</Text>
                    </View>
                </View>

            </KeyboardAvoidingView>

            
        )
    }
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


const mapStatesToProps = state => ({
    users: state.users,
})

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        reduxLoginUser: LoginUser
    }, dispatch);
}

export default connect(mapStatesToProps, mapActionsToProps)(Login);