import * as React from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import ImageBlock from '../Components/ImageBlock';


export default class CreateListing extends React.Component {
    render(){
        return(
            <View style={styles.screen}>
                <ImageBlock/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
    }
});