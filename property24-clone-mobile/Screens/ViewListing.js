import * as React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import {Button, Text} from 'native-base';
import ViewImageBlock from '../Components/ViewImageBlock';
import Fonts from '../Constants/Fonts';
import colors from '../Constants/colors';


export default class CreateListing extends React.Component {
    state = {
        name: "3 Bedroom Mansion",
        address: "25 Zaio Road, Milnerton, 7441",
        price: "R2,400,000"
    }

    static navigationOptions = {
        headerTitle: "Property Name",
    }

    render(){
        return(
        <ScrollView styles={styles.screen}>
        <View style={{padding: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.imageTitle}>Property Images</Text>
                <Button transparent
                onPress={() => this.props.navigation.navigate("EditListing")}
                >
                    <Text style={{color: colors.primary}}>Edit</Text>
                </Button>
            </View>
            <ViewImageBlock style={{borderWidth: 1, borderColor: colors.primary}}/>
            <Text style={styles.propertyDetailsHeading}>Property Details</Text>
            
            <Card style={styles.propertyDetailsCard}>
                <TextInput
                style={styles.textInputs}
                underlineColor={colors.primary}
                selectionColor={colors.primary}
                label="Name"
                editable = {false}
                value = {this.state.name}
                mode="flat"
                />

                <TextInput
                style={styles.textInputs}
                underlineColor={colors.primary}
                selectionColor={colors.primary}
                label="Address"
                editable = {false}
                value = {this.state.address}
                mode="flat"
                />

                <TextInput
                style={styles.textInputs}
                underlineColor={colors.primary}
                selectionColor={colors.primary}
                label="Price"
                keyboardType='numeric'
                editable = {false}
                value = {this.state.price}
                mode="flat"
                />
            </Card>
        </View>
        </ScrollView>    

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
        height: 200,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.primary
        
    },

    textInputs: {
        backgroundColor: colors.white,
        color: colors.primary,
        marginHorizontal: 30
    },

 
});