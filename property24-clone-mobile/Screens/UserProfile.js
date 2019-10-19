import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import colors from '../Constants/colors';
import Fonts from '../Constants/Fonts';

//Redux imports
import {connect} from 'react-redux';

class UserProfile extends React.Component{

    static navigationOptions = {
        title: 'Profile',
    }

    render(){
        return(
            <Card style={styles.Screen}>
                <Card.Cover source={{uri: "https://www.immoafrica.net/news/wp-content/uploads/2017/08/REASONS-YOU-SHOULD-WORK-WITH-A-REAL-ESTATE-AGENT.jpeg"}}/>
                <View style={{flex: 1, alignItems: 'center'}}>
                <Card.Title subtitle={this.props.user[0].email} subtitleStyle={styles.SubTitle} titleStyle={styles.Title} title={this.props.user[0].name}/>
                <Avatar.Image style={styles.certificate} size={150} source={{uri: "https://www.uniagents.com/assets/images/Gold-certification.png"}}/>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
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

const mapStatesToProps = state => ({
    user: state.user
  })

export default connect(mapStatesToProps)(UserProfile);