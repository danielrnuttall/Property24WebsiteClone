import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import colors from '../Constants/colors';
import Fonts from '../Constants/Fonts';

export default class UserProfile extends React.Component{

    static navigationOptions = {
        title: 'Profile',
    }

    render(){
        return(
            <Card style={styles.Screen}>
                <Card.Cover source={{uri: "https://www.immoafrica.net/news/wp-content/uploads/2017/08/REASONS-YOU-SHOULD-WORK-WITH-A-REAL-ESTATE-AGENT.jpeg"}}/>
                <Card.Title subtitle="Juliapetersons@p24.com" subtitleStyle={styles.SubTitle} titleStyle={styles.Title} title="Julia Petersons"/>
                <Avatar.Image style={styles.certificate} size={150} source={{uri: "https://www.uniagents.com/assets/images/Gold-certification.png"}}/>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1
    },

    Title: {
        paddingTop:50,
        fontSize: 30,
        alignSelf: 'center'
    },

    SubTitle: {
        alignSelf: 'center',
        fontSize: 15
    },

    certificate: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        marginTop: 50
    }
});
