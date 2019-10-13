import * as React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import {Card} from 'react-native-paper';
import ImageBlock from '../Components/ImageBlock';
import Fonts from '../Constants/Fonts';


export default class CreateListing extends React.Component {
    render(){
        return(
            <View style={styles.screen}>
                <Text style={styles.imageTitle}>Property Images</Text>
                <ImageBlock/>
                <Text style={styles.propertyDetailsHeading}>Property Details</Text>
                <Card style={styles.propertyDetailsCard}>

                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
    },

    imageTitle: {
        fontSize: 20,
        fontFamily: Fonts.mainFont,
        fontWeight: 'bold',
        marginBottom: 8
    },

    propertyDetailsHeading: {
        fontSize: 20,
        fontFamily: Fonts.mainFont,
        fontWeight: 'bold',
        marginVertical: 8
    },

    propertyDetailsCard: {
        width: "100%"
    }
 
});